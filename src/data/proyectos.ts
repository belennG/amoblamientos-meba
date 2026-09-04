// Acceso a los proyectos + helpers de presentación.
// Los datos vienen del manifiesto auto-generado (npm run images).
import { proyectos, type Proyecto, type ProyectoFoto, type Orientacion } from './proyectos.generated';

export { proyectos };
export type { Proyecto, ProyectoFoto, Orientacion };

/** Título de la tarjeta: nombre de la farmacia si se conoce, si no la localidad. */
export function tituloProyecto(p: Proyecto): string {
  if (p.farmacia) return p.farmacia;
  if (p.localidad) return `Farmacia en ${p.localidad}`;
  return 'Proyecto';
}

/** Subtítulo: ubicación + año, con lo que haya disponible. */
export function subtituloProyecto(p: Proyecto): string {
  const lugar = [p.localidad, p.provincia].filter(Boolean).join(', ');
  return [lugar, p.anio].filter(Boolean).join(' · ');
}

/** Busca una foto puntual por slug de proyecto y nombre de archivo (sin extensión). */
export function fotoPorNombre(slug: string, nombreBase: string): ProyectoFoto {
  const proyecto = proyectos.find((p) => p.slug === slug);
  const foto = proyecto?.fotos.find((f) => f.src.includes(`/${nombreBase}-`));
  if (!foto) throw new Error(`Foto no encontrada: ${slug}/${nombreBase}`);
  return foto;
}
