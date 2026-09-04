// ARCHIVO AUTO-GENERADO por scripts/process-images.ts — no editar a mano.
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

export const proyectos: Proyecto[] = [
  {
    "slug": "andresito",
    "farmacia": null,
    "localidad": "Comandante Andresito",
    "provincia": "Misiones",
    "anio": 2026,
    "fotos": [
      {
        "alt": "Salón de venta terminado con góndolas centrales y estanterías perimetrales en melamina blanca, mostrador de atención al fondo.",
        "width": 1320,
        "height": 977,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAABQAwCdASoYABIAPuVgpk2pJawiMAwBgByJZwDJEAlEt4BWAADKV0Ij+K6F5t9kNNIgIF9em07VKBjMcbFUOekWHjnXgAAA",
        "src": "/images/proyectos/andresito/salon-01-1320.webp",
        "srcset": "/images/proyectos/andresito/salon-01-640.webp 640w, /images/proyectos/andresito/salon-01-1280.webp 1280w, /images/proyectos/andresito/salon-01-1320.webp 1320w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito/salon-01-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito/salon-01-1280.webp"
          },
          {
            "w": 1320,
            "src": "/images/proyectos/andresito/salon-01-1320.webp"
          }
        ]
      },
      {
        "alt": "Vista del salón con góndolas de perfumería y sección de indumentaria infantil sobre estanterías blancas iluminadas.",
        "width": 1314,
        "height": 980,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwBACdASoYABIAPuFgpU2opaOiN/VYARAcCWcAzNAypLLv8sr+9Ri8vAAA+dXxySBZeR3f2Wk1QrXe1SvsoMbDRKaGApCdLEWxdAjgM4Mc3qMqIWXnnTv60AA=",
        "src": "/images/proyectos/andresito/salon-05-1314.webp",
        "srcset": "/images/proyectos/andresito/salon-05-640.webp 640w, /images/proyectos/andresito/salon-05-1280.webp 1280w, /images/proyectos/andresito/salon-05-1314.webp 1314w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito/salon-05-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito/salon-05-1280.webp"
          },
          {
            "w": 1314,
            "src": "/images/proyectos/andresito/salon-05-1314.webp"
          }
        ]
      },
      {
        "alt": "Mueble de perfumería y cosmética con estantes de vidrio, espejo central e iluminación LED perimetral.",
        "width": 1313,
        "height": 1747,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADQBACdASoYACAAPuVio02pJaMiMAwBIByJZwAAXAHNjiDGepgFo25xVerxcsJgAAD9U59MppOD4rukZNPmm9UZdEu0aADROPwQ5CLvfYasiU5DSl0Q0mvop60CBHmdVXekGMEAAAA=",
        "src": "/images/proyectos/andresito/perfumeria-04-1313.webp",
        "srcset": "/images/proyectos/andresito/perfumeria-04-640.webp 640w, /images/proyectos/andresito/perfumeria-04-1280.webp 1280w, /images/proyectos/andresito/perfumeria-04-1313.webp 1313w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito/perfumeria-04-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito/perfumeria-04-1280.webp"
          },
          {
            "w": 1313,
            "src": "/images/proyectos/andresito/perfumeria-04-1313.webp"
          }
        ]
      },
      {
        "alt": "Isla vitrina con tapa de vidrio e iluminación interior para exhibición de accesorios, junto al sector de cajas.",
        "width": 1319,
        "height": 1746,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABwBACdASoYACAAPu12s1MpqCSiqAgBMB2JZwDO7D/nZPVcn7IYGcxr3jAO4AD2dQwPcdJaJikjB642IoIpe5acHj9ImaVvmuM/rJu6rr3EPpbzK/cwzIW+ZgRANgaGmRCJctLxyN6fbiKMmzd9EfF2JoAAAA==",
        "src": "/images/proyectos/andresito/vitrina-02-1319.webp",
        "srcset": "/images/proyectos/andresito/vitrina-02-640.webp 640w, /images/proyectos/andresito/vitrina-02-1280.webp 1280w, /images/proyectos/andresito/vitrina-02-1319.webp 1319w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito/vitrina-02-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito/vitrina-02-1280.webp"
          },
          {
            "w": 1319,
            "src": "/images/proyectos/andresito/vitrina-02-1319.webp"
          }
        ]
      },
      {
        "alt": "Montaje del mobiliario en obra: mostradores y paneles de melamina embalados antes de la instalación final.",
        "width": 1267,
        "height": 990,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACQAwCdASoYABMAPu1mqE2ppaOiMAgBMB2JZwAAApytfMexqHwAAP7L5Qw2Zj4EECpyhsgAp2IP9QLtiSlLTFQN01o/xvfH67/vYOLN1PZAMhQAAAA=",
        "src": "/images/proyectos/andresito/obra-03-1267.webp",
        "srcset": "/images/proyectos/andresito/obra-03-640.webp 640w, /images/proyectos/andresito/obra-03-1267.webp 1267w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito/obra-03-640.webp"
          },
          {
            "w": 1267,
            "src": "/images/proyectos/andresito/obra-03-1267.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "ciccale",
    "farmacia": "Farmacia Ciccale",
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Mostrador principal de Farmacia Ciccale con frente verde, columna señalizadora con el logo y estantería alta vidriada e iluminada.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAAAQBgCdASoYACsAPs1WoE2npSMiOrzIAPAZiWUAwGQgOSFK5UlPPo4PUu3XNe0BCoyHPlq70sa0rbAA99QXC72ogfWAoOTDE4lasE/SqiAz1KfmuO0HjBCOc1duRiQgkJk2OTIA8uPb0Bma2fE7NWZZAQ7Ptaf1g/uInGVEcQ/4VGBnSgi8F7A/hxUdwAAA",
        "src": "/images/proyectos/ciccale/mostrador-05-900.webp",
        "srcset": "/images/proyectos/ciccale/mostrador-05-640.webp 640w, /images/proyectos/ciccale/mostrador-05-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/mostrador-05-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/mostrador-05-900.webp"
          }
        ]
      },
      {
        "alt": "Detalle del mostrador con el cartel institucional de Farmacia Ciccale sobre frente verde y alacenas superiores con puertas de vidrio.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAABwBQCdASoYACsAPu1ysFMppqQipWmZMB2JZQDJEFhz3kJoz1u9Ay3ll9Jun8ocNUlccQNAAP5pWqCSsWOFpOvSn/fbSAH2J5+GjQfkFQpwNfwoVDyFDN6uabGUD4K9iX5K592NOkvn7hCQvO16uukookcX2d66OPjq+dHh1Ftmlyx3BiVMtWmAAAA=",
        "src": "/images/proyectos/ciccale/cartel-02-900.webp",
        "srcset": "/images/proyectos/ciccale/cartel-02-640.webp 640w, /images/proyectos/ciccale/cartel-02-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/cartel-02-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/cartel-02-900.webp"
          }
        ]
      },
      {
        "alt": "Mostrador con tapa de vidrio y cajoneras, estantería de slatwall con estantes blancos e iluminación LED, y acceso al depósito.",
        "width": 1600,
        "height": 900,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAwCdASoYAA0ALrV2u12jqampiYC0SxgGWWIdd73WD05mAMB/AAD+6CQNd5XprDM0jZHYpuX3v/zPiX8jZwV3ujaVIoWngAA=",
        "src": "/images/proyectos/ciccale/mostrador-03-1600.webp",
        "srcset": "/images/proyectos/ciccale/mostrador-03-640.webp 640w, /images/proyectos/ciccale/mostrador-03-1280.webp 1280w, /images/proyectos/ciccale/mostrador-03-1600.webp 1600w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/mostrador-03-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/ciccale/mostrador-03-1280.webp"
          },
          {
            "w": 1600,
            "src": "/images/proyectos/ciccale/mostrador-03-1600.webp"
          }
        ]
      },
      {
        "alt": "Estantería perimetral en melamina blanca con paneles slatwall, cajones verdes e iluminación LED vertical.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAAAwBgCdASoYACsAPs1UoU2npSMiOrzIAPAZiWUAw+hpeVps1+x0ApO8XYzvWFTnAsM7nr1Wpn44LeQgAPx8N07ewO5RpDS3wNyfTqHYX7b+abMXBEjCNszbo21g/pwn6Rdnsk9ti4fhWmja0D0MO2V8U/LE2mXuuW5ifGWEemhQkFnn5siFdsCscUSK+f6RIAAAAA==",
        "src": "/images/proyectos/ciccale/estanteria-04-900.webp",
        "srcset": "/images/proyectos/ciccale/estanteria-04-640.webp 640w, /images/proyectos/ciccale/estanteria-04-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/estanteria-04-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/estanteria-04-900.webp"
          }
        ]
      },
      {
        "alt": "Rincón de estanterías en L con zócalo verde, estantes regulables y tiras LED, listo para reponer mercadería.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAACQBgCdASoYACsAPu1eq04ppKQiMBVdUTAdiWUAy6Qrr++8yhYglVMstG8qtcZuGUs+P80VycGYQxlr2YKAAJ6zM9ZYkx+/KY2gjsCo2Y5aKWCD1hvK62fAJk4nz4HhcpQSSmac84p2G6vhg5gY0bBlQ/CT+M4Ndwx5ZED69X4isZBvj+HdqSSAAAA=",
        "src": "/images/proyectos/ciccale/rincon-01-900.webp",
        "srcset": "/images/proyectos/ciccale/rincon-01-640.webp 640w, /images/proyectos/ciccale/rincon-01-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/rincon-01-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/rincon-01-900.webp"
          }
        ]
      }
    ]
  }
];
