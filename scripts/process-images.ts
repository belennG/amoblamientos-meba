/**
 * Pipeline de imágenes de proyectos.
 *
 * Lee  incoming/<localidad-slug>__<proyecto-slug>/  (cada carpeta con un
 * meta.json) y, para cada foto, genera copias WebP optimizadas en varios
 * anchos dentro de  public/images/proyectos/<proyecto-slug>/  más un
 * placeholder borroso en base64.
 *
 * Al final escribe el manifiesto tipado  src/data/proyectos.generated.ts
 * con el ancho/alto real y la orientación de cada foto.
 *
 * Uso:  node scripts/process-images.ts
 */
import { readdir, readFile, mkdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const INCOMING = path.join(ROOT, 'incoming');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'proyectos');
const MANIFEST = path.join(ROOT, 'src', 'data', 'proyectos.generated.ts');

// Anchos a generar. Sólo se emiten los <= ancho original (más el original
// recortado a WIDTHS[máx] como tope).
const WIDTHS = [640, 1280, 1920];
const WEBP_QUALITY = 78;

type Orientacion = 'horizontal' | 'vertical' | 'cuadrada';

interface MetaJson {
  farmacia?: string;
  localidad?: string;
  provincia?: string;
  anio: number;
  orden?: string[];
  fotos?: Record<string, string>;
}

interface FotoManifest {
  alt: string;
  width: number;
  height: number;
  orientacion: Orientacion;
  blur: string;
  src: string;
  srcset: string;
  fuentes: { w: number; src: string }[];
}

interface ProyectoManifest {
  slug: string;
  farmacia: string | null;
  localidad: string | null;
  provincia: string | null;
  anio: number;
  fotos: FotoManifest[];
}

const IMG_RE = /\.(jpe?g|png|webp)$/i;

function orientacionDe(w: number, h: number): Orientacion {
  const r = w / h;
  if (r > 1.05) return 'horizontal';
  if (r < 0.95) return 'vertical';
  return 'cuadrada';
}

async function procesarFoto(
  srcPath: string,
  outFolder: string,
  publicBase: string,
  baseName: string,
  alt: string,
): Promise<FotoManifest> {
  const input = sharp(srcPath).rotate(); // aplica orientación EXIF
  const meta = await input.metadata();
  const rotated = meta.autoOrient ?? meta;
  const origW = rotated.width ?? meta.width ?? 0;
  const origH = rotated.height ?? meta.height ?? 0;
  if (!origW || !origH) throw new Error(`Sin dimensiones: ${srcPath}`);

  const targets = [...new Set(WIDTHS.filter((w) => w <= origW).concat(Math.min(origW, WIDTHS[WIDTHS.length - 1])))].sort(
    (a, b) => a - b,
  );

  const fuentes: { w: number; src: string }[] = [];
  for (const w of targets) {
    const out = path.join(outFolder, `${baseName}-${w}.webp`);
    await sharp(srcPath)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(out);
    fuentes.push({ w, src: `${publicBase}/${baseName}-${w}.webp` });
  }

  const blurBuf = await sharp(srcPath)
    .rotate()
    .resize({ width: 24 })
    .blur(1.2)
    .webp({ quality: 40 })
    .toBuffer();
  const blur = `data:image/webp;base64,${blurBuf.toString('base64')}`;

  const maxFuente = fuentes[fuentes.length - 1];
  return {
    alt,
    width: origW,
    height: origH,
    orientacion: orientacionDe(origW, origH),
    blur,
    src: maxFuente.src,
    srcset: fuentes.map((f) => `${f.src} ${f.w}w`).join(', '),
    fuentes,
  };
}

async function procesarProyecto(dirName: string): Promise<ProyectoManifest | null> {
  const dir = path.join(INCOMING, dirName);
  const [, slug] = dirName.includes('__') ? dirName.split('__') : ['', dirName];
  const proyectoSlug = slug || dirName;

  let meta: MetaJson;
  try {
    meta = JSON.parse(await readFile(path.join(dir, 'meta.json'), 'utf8')) as MetaJson;
  } catch {
    console.warn(`  ! ${dirName}: falta meta.json, se omite`);
    return null;
  }

  const archivos = (await readdir(dir)).filter((f) => IMG_RE.test(f));
  if (archivos.length === 0) {
    console.warn(`  ! ${dirName}: sin imágenes, se omite`);
    return null;
  }

  const orden = meta.orden?.length
    ? meta.orden.filter((f) => archivos.includes(f)).concat(archivos.filter((f) => !meta.orden!.includes(f)))
    : archivos.sort();

  const outFolder = path.join(OUT_DIR, proyectoSlug);
  await mkdir(outFolder, { recursive: true });
  const publicBase = `/images/proyectos/${proyectoSlug}`;

  const localidad = meta.localidad?.trim() || null;
  const provincia = meta.provincia?.trim() || null;
  const lugar = [localidad, provincia].filter(Boolean).join(', ');

  const fotos: FotoManifest[] = [];
  for (const archivo of orden) {
    const baseName = archivo.replace(IMG_RE, '');
    const altManual = meta.fotos?.[archivo];
    const alt =
      altManual ||
      `Mobiliario de farmacia fabricado por Amoblamientos MEBA${lugar ? ` en ${lugar}` : ''}.`;
    process.stdout.write(`  · ${proyectoSlug}/${archivo} … `);
    const foto = await procesarFoto(path.join(dir, archivo), outFolder, publicBase, baseName, alt);
    console.log(`${foto.fuentes.map((f) => f.w).join('/')}  (${foto.orientacion})`);
    fotos.push(foto);
  }

  return {
    slug: proyectoSlug,
    farmacia: meta.farmacia?.trim() || null,
    localidad,
    provincia,
    anio: meta.anio,
    fotos,
  };
}

/** Genera public/og.jpg (1200×630) a partir de una foto de proyecto + texto. */
async function generarOg(proyectos: ProyectoManifest[]) {
  // Primera foto horizontal en el orden curado de los proyectos.
  const dirs = (await readdir(INCOMING)).sort();
  let fondo: string | null = null;
  for (const proyecto of proyectos) {
    const foto = proyecto.fotos.find((f) => f.orientacion === 'horizontal');
    if (!foto) continue;
    const base = foto.src.split('/').pop()!.replace(/-\d+\.webp$/, '');
    const dirName = dirs.find((d) => d.endsWith(`__${proyecto.slug}`));
    if (!dirName) continue;
    const archivos = (await readdir(path.join(INCOMING, dirName))).filter((f) =>
      f.replace(IMG_RE, '') === base,
    );
    if (archivos[0]) {
      fondo = path.join(INCOMING, dirName, archivos[0]);
      break;
    }
  }
  if (!fondo) {
    console.warn('  ! og.jpg: no se encontró foto de fondo, se omite');
    return;
  }

  const W = 1200;
  const H = 630;
  const svg = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0d0b0a" stop-opacity="0.45"/>
          <stop offset="0.55" stop-color="#0d0b0a" stop-opacity="0.55"/>
          <stop offset="1" stop-color="#0d0b0a" stop-opacity="0.92"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
      <text x="80" y="470" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="600" fill="#e8e2d9">Amoblamientos <tspan fill="#c9a35b">MEBA</tspan></text>
      <text x="82" y="520" font-family="Inter, Arial, sans-serif" font-size="27" fill="#a89f92">Amoblamientos para farmacias · Diseño 3D sin cargo · Todo el país</text>
    </svg>
  `);

  const base = await sharp(fondo)
    .rotate()
    .resize({ width: W, height: H, fit: 'cover', position: 'center' })
    .toBuffer();

  await sharp(base)
    .composite([{ input: svg }])
    .jpeg({ quality: 82 })
    .toFile(path.join(ROOT, 'public', 'og.jpg'));
  console.log(`✓ og.jpg (${path.relative(ROOT, fondo)})`);
}

async function main() {
  let dirs: string[];
  try {
    dirs = (await readdir(INCOMING, { withFileTypes: true }))
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();
  } catch {
    console.error(`No existe la carpeta ${INCOMING}`);
    process.exit(1);
  }

  console.log(`Procesando ${dirs.length} proyecto(s) desde incoming/`);
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const proyectos: ProyectoManifest[] = [];
  for (const dirName of dirs) {
    const p = await procesarProyecto(dirName);
    if (p) proyectos.push(p);
  }

  const header = `// ARCHIVO AUTO-GENERADO por scripts/process-images.ts — no editar a mano.
// Regenerar con:  npm run images

export type Orientacion = 'horizontal' | 'vertical' | 'cuadrada';

export interface ProyectoFoto {
  alt: string;
  width: number;
  height: number;
  orientacion: Orientacion;
  /** placeholder borroso en base64 (data URI) */
  blur: string;
  /** copia de mayor tamaño */
  src: string;
  /** srcset completo listo para <img srcset> */
  srcset: string;
  fuentes: { w: number; src: string }[];
}

export interface Proyecto {
  slug: string;
  farmacia: string | null;
  localidad: string | null;
  provincia: string | null;
  anio: number;
  fotos: ProyectoFoto[];
}

export const proyectos: Proyecto[] = ${JSON.stringify(proyectos, null, 2)};
`;

  await mkdir(path.dirname(MANIFEST), { recursive: true });
  await writeFile(MANIFEST, header, 'utf8');
  const totalFotos = proyectos.reduce((n, p) => n + p.fotos.length, 0);
  console.log(`\n✓ ${proyectos.length} proyectos, ${totalFotos} fotos → ${path.relative(ROOT, MANIFEST)}`);

  await generarOg(proyectos);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
