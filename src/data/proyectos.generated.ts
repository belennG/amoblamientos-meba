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
    "slug": "carpi",
    "farmacia": "Farmacia Carpi",
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Fachada de Farmacia Carpi con cartel institucional y cruz farmacéutica en la entrada.",
        "width": 1320,
        "height": 1696,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQBACdASoYAB8APu1yrVGppyQiqAqpMB2JZQAAj+meWHdoxCpN6LN/Tuib/YKfAAD+9jHWname6WYI3OY2QtFxtF6PNnwTUPl9K0tW/1Cz1J7p83ChmwvG+389RB1pDbxSejDZ6CFmDjAA",
        "src": "/images/proyectos/carpi/fachada-03-1320.webp",
        "srcset": "/images/proyectos/carpi/fachada-03-640.webp 640w, /images/proyectos/carpi/fachada-03-1280.webp 1280w, /images/proyectos/carpi/fachada-03-1320.webp 1320w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/carpi/fachada-03-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/carpi/fachada-03-1280.webp"
          },
          {
            "w": 1320,
            "src": "/images/proyectos/carpi/fachada-03-1320.webp"
          }
        ]
      },
      {
        "alt": "Sector de perfumería y cuidado personal con mostrador de vidrio y plantas decorativas.",
        "width": 1308,
        "height": 2048,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwBQCdASoYACYAPt1cpU2opSOiOrZoARAbiWcAz6BMNqBmjlwF1cx66WRQqOnIVdiwZFGAAJ2el/Wnk9lFtSh2FGooTMH60SZ3F0qtP5j6xvZUOFgf6VrGBVGECtNOhlhZbF68oGyhFnkke5UzlWyR2Ah3ZwsX2wEMYX9kF0AAAA==",
        "src": "/images/proyectos/carpi/salon-01-1308.webp",
        "srcset": "/images/proyectos/carpi/salon-01-640.webp 640w, /images/proyectos/carpi/salon-01-1280.webp 1280w, /images/proyectos/carpi/salon-01-1308.webp 1308w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/carpi/salon-01-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/carpi/salon-01-1280.webp"
          },
          {
            "w": 1308,
            "src": "/images/proyectos/carpi/salon-01-1308.webp"
          }
        ]
      },
      {
        "alt": "Estanterías de cuidado del cabello y cosmética totalmente repuestas en el salón de venta.",
        "width": 1320,
        "height": 1657,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQBACdASoYAB4APu1qrU8ppiQiKA1RMB2JZwAALlrGfrjU5gJwwYRUTTG2Nf1KgAD+jEZdq9H6O3wShFwt8G9W1dM1VD86OuRYphgrjxxAUuLAQJ7LgAARP/BZkEyEM0Ic22E8OCSA4NoEAAA=",
        "src": "/images/proyectos/carpi/perfumeria-02-1320.webp",
        "srcset": "/images/proyectos/carpi/perfumeria-02-640.webp 640w, /images/proyectos/carpi/perfumeria-02-1280.webp 1280w, /images/proyectos/carpi/perfumeria-02-1320.webp 1320w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/carpi/perfumeria-02-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/carpi/perfumeria-02-1280.webp"
          },
          {
            "w": 1320,
            "src": "/images/proyectos/carpi/perfumeria-02-1320.webp"
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
      },
      {
        "alt": "Columna con el logo circular de Farmacia Ciccale sobre frente verde, junto a estanterías vidriadas e iluminadas.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAABwBQCdASoYACsAPu1ysFMppqQipWmZMB2JZQDJEFhz3kJoz1u9Ay3ll9Jun8ocNUlccQNAAP5pWqCSsWOFpOvSn/fbSAH2J5+GjQfkFQpwNfwoVDyFDN6uabGUD4K9iX5K592NOkvn7hCQvO16uukookcX2d66OPjq+dHh1Ftmlyx3BiVMtWmAAAA=",
        "src": "/images/proyectos/ciccale/cartel-07-900.webp",
        "srcset": "/images/proyectos/ciccale/cartel-07-640.webp 640w, /images/proyectos/ciccale/cartel-07-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/cartel-07-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/cartel-07-900.webp"
          }
        ]
      },
      {
        "alt": "Estantería esquinera en melamina blanca con paneles slatwall, cajones verdes e iluminación LED vertical.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAACQBgCdASoYACsAPu1eq04ppKQiMBVdUTAdiWUAy6Qrr++8yhYglVMstG8qtcZuGUs+P80VycGYQxlr2YKAAJ6zM9ZYkx+/KY2gjsCo2Y5aKWCD1hvK62fAJk4nz4HhcpQSSmac84p2G6vhg5gY0bBlQ/CT+M4Ndwx5ZED69X4isZBvj+HdqSSAAAA=",
        "src": "/images/proyectos/ciccale/estanteria-06-900.webp",
        "srcset": "/images/proyectos/ciccale/estanteria-06-640.webp 640w, /images/proyectos/ciccale/estanteria-06-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/estanteria-06-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/estanteria-06-900.webp"
          }
        ]
      },
      {
        "alt": "Mostrador con tapa de vidrio y estanterías traseras vidriadas e iluminadas en el sector de recetario.",
        "width": 1600,
        "height": 900,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAwCdASoYAA0ALrV2u12jqampiYC0SxgGWWIdd73WD05mAMB/AAD+6CQNd5XprDM0jZHYpuX3v/zPiX8jZwV3ujaVIoWngAA=",
        "src": "/images/proyectos/ciccale/mostrador-08-1600.webp",
        "srcset": "/images/proyectos/ciccale/mostrador-08-640.webp 640w, /images/proyectos/ciccale/mostrador-08-1280.webp 1280w, /images/proyectos/ciccale/mostrador-08-1600.webp 1600w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/mostrador-08-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/ciccale/mostrador-08-1280.webp"
          },
          {
            "w": 1600,
            "src": "/images/proyectos/ciccale/mostrador-08-1600.webp"
          }
        ]
      },
      {
        "alt": "Vista hacia el depósito y sector interno, con estanterías perimetrales y cajones verdes.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAAAwBgCdASoYACsAPs1UoU2npSMiOrzIAPAZiWUAw+hpeVps1+x0ApO8XYzvWFTnAsM7nr1Wpn44LeQgAPx8N07ewO5RpDS3wNyfTqHYX7b+abMXBEjCNszbo21g/pwn6Rdnsk9ti4fhWmja0D0MO2V8U/LE2mXuuW5ifGWEemhQkFnn5siFdsCscUSK+f6RIAAAAA==",
        "src": "/images/proyectos/ciccale/deposito-09-900.webp",
        "srcset": "/images/proyectos/ciccale/deposito-09-640.webp 640w, /images/proyectos/ciccale/deposito-09-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/deposito-09-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/deposito-09-900.webp"
          }
        ]
      },
      {
        "alt": "Rincón de estanterías con el logo de Farmacia Ciccale sobre frente verde y estantes regulables iluminados.",
        "width": 900,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAAAQBgCdASoYACsAPs1WoE2npSMiOrzIAPAZiWUAwGQgOSFK5UlPPo4PUu3XNe0BCoyHPlq70sa0rbAA99QXC72ogfWAoOTDE4lasE/SqiAz1KfmuO0HjBCOc1duRiQgkJk2OTIA8uPb0Bma2fE7NWZZAQ7Ptaf1g/uInGVEcQ/4VGBnSgi8F7A/hxUdwAAA",
        "src": "/images/proyectos/ciccale/rincon-10-900.webp",
        "srcset": "/images/proyectos/ciccale/rincon-10-640.webp 640w, /images/proyectos/ciccale/rincon-10-900.webp 900w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/ciccale/rincon-10-640.webp"
          },
          {
            "w": 900,
            "src": "/images/proyectos/ciccale/rincon-10-900.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "gugafarma",
    "farmacia": "Farmacia Gugafarma",
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Fachada de Farmacia Gugafarma con frente celeste, vidriera iluminada y cartel institucional.",
        "width": 1320,
        "height": 1321,
        "orientacion": "cuadrada",
        "blur": "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAABQBQCdASoYABgAPu1iqU2ppaQiMBgMATAdiWIArDMYATkb7IgwKHEGaQWlYMA6KrPbvtAA/t4VvOHLlxGkUbV7QFAlK5uxyY262WDjFLoyQoe+6lu/cj28N2K36M6S+8R6r7LXpzDyyN4iOZhwD6A/+7dK6NsuDAzmQ+DGYksFTL0zyk2FuBhL45nTLouH0AAAAA==",
        "src": "/images/proyectos/gugafarma/fachada-02-1320.webp",
        "srcset": "/images/proyectos/gugafarma/fachada-02-640.webp 640w, /images/proyectos/gugafarma/fachada-02-1280.webp 1280w, /images/proyectos/gugafarma/fachada-02-1320.webp 1320w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/gugafarma/fachada-02-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/gugafarma/fachada-02-1280.webp"
          },
          {
            "w": 1320,
            "src": "/images/proyectos/gugafarma/fachada-02-1320.webp"
          }
        ]
      },
      {
        "alt": "Detalle de la vidriera con el logo de Farmacia Gugafarma y estanterías de perfumería al fondo.",
        "width": 1319,
        "height": 1340,
        "orientacion": "cuadrada",
        "blur": "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAAAwBQCdASoYABgAPu1mqk2ppaQiMAgBMB2JYgDBzB08vZTPAufhGWCmjj4DF9xtxL1T0AD+V3u3AfLU8upAlrVZpKDA/x4O9Y7YmB1PbP7Q0ARAhtZM8fqvk93s8QOCrR2G+2wmWlGS1maPMOcQVtLxWQNtVOoRIV9CQBMT2bUgdrsAAAA=",
        "src": "/images/proyectos/gugafarma/vidriera-01-1319.webp",
        "srcset": "/images/proyectos/gugafarma/vidriera-01-640.webp 640w, /images/proyectos/gugafarma/vidriera-01-1280.webp 1280w, /images/proyectos/gugafarma/vidriera-01-1319.webp 1319w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/gugafarma/vidriera-01-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/gugafarma/vidriera-01-1280.webp"
          },
          {
            "w": 1319,
            "src": "/images/proyectos/gugafarma/vidriera-01-1319.webp"
          }
        ]
      },
      {
        "alt": "Salón de venta con estanterías de perfumería y cuidado personal en melamina blanca con iluminación LED.",
        "width": 1319,
        "height": 1334,
        "orientacion": "cuadrada",
        "blur": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABwBQCdASoYABgAPu1qq0+ppiOiKA1RMB2JZwDMX30gMyhPzeiJZsqZjj52bOMW+/WeBd4AAPnOwq1WXC9qhU3TuJzO1wQyIfwEz+1max9Ql0Vnjv0yXDVjzZKc8l3SLm3WytQLqVuAfowyRo8kookYAAA=",
        "src": "/images/proyectos/gugafarma/salon-03-1319.webp",
        "srcset": "/images/proyectos/gugafarma/salon-03-640.webp 640w, /images/proyectos/gugafarma/salon-03-1280.webp 1280w, /images/proyectos/gugafarma/salon-03-1319.webp 1319w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/gugafarma/salon-03-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/gugafarma/salon-03-1280.webp"
          },
          {
            "w": 1319,
            "src": "/images/proyectos/gugafarma/salon-03-1319.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "sanbenito",
    "farmacia": "Farmacia San Benito",
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Mostrador perimetral en blanco y verde con cajoneras y estanterías altas en la obra de Farmacia San Benito.",
        "width": 2048,
        "height": 1536,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAABQBACdASoYABIAPtVWoU2oJKMiN+gBABqJZQC9WBIJLwC5He7tr29zRc2QAP5XVhM51+S+cpHfG/kAFcDoJKhhsGUNWM/yygKZ5/dEFBNDw69v/x8AAA==",
        "src": "/images/proyectos/sanbenito/mostrador-01-1920.webp",
        "srcset": "/images/proyectos/sanbenito/mostrador-01-640.webp 640w, /images/proyectos/sanbenito/mostrador-01-1280.webp 1280w, /images/proyectos/sanbenito/mostrador-01-1920.webp 1920w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/sanbenito/mostrador-01-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/sanbenito/mostrador-01-1280.webp"
          },
          {
            "w": 1920,
            "src": "/images/proyectos/sanbenito/mostrador-01-1920.webp"
          }
        ]
      },
      {
        "alt": "Puestos de atención numerados con friso verde y logo institucional sobre mostrador de caja.",
        "width": 2048,
        "height": 1536,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAwCdASoYABIAPuliq02pLyQiMBgMAeAdCWcAyRBWlIL0xxC0sADFaaKU0QDK9BSCl3TsGccpDFAl8FzmjOhI2ScFbdq/xlZMxyh4AAA=",
        "src": "/images/proyectos/sanbenito/cajas-02-1920.webp",
        "srcset": "/images/proyectos/sanbenito/cajas-02-640.webp 640w, /images/proyectos/sanbenito/cajas-02-1280.webp 1280w, /images/proyectos/sanbenito/cajas-02-1920.webp 1920w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/sanbenito/cajas-02-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/sanbenito/cajas-02-1280.webp"
          },
          {
            "w": 1920,
            "src": "/images/proyectos/sanbenito/cajas-02-1920.webp"
          }
        ]
      },
      {
        "alt": "Vista en altura del salón con mostradores y estanterías de melamina en etapa final de obra.",
        "width": 1536,
        "height": 2048,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABwBQCdASoYACAAPt1ap02opSOiN/qoARAbiWcAxzAedmeZjje7HKXCRoU+stdSG0S5/QcAAOETAEmWCdBDpKajbQMs97ILlXn/0w7jt6ByJUyDtG90E8381aXe5YIJ9+MUsdS4xcsqO03fnEAAAA==",
        "src": "/images/proyectos/sanbenito/obra-03-1536.webp",
        "srcset": "/images/proyectos/sanbenito/obra-03-640.webp 640w, /images/proyectos/sanbenito/obra-03-1280.webp 1280w, /images/proyectos/sanbenito/obra-03-1536.webp 1536w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/sanbenito/obra-03-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/sanbenito/obra-03-1280.webp"
          },
          {
            "w": 1536,
            "src": "/images/proyectos/sanbenito/obra-03-1536.webp"
          }
        ]
      },
      {
        "alt": "Salón de doble altura con estanterías perimetrales iluminadas y grandes ventanales.",
        "width": 2048,
        "height": 1536,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAACQBACdASoYABIAPuVgpU2pJaOiMAwBIByJZwDOdCHrTJm74DwVHc6qOVlBjAAA9aNmw/d5QzZ9/woGGq5nq1/DJg/bx4LYD6nfpvZb5d4AAA==",
        "src": "/images/proyectos/sanbenito/salon-04-1920.webp",
        "srcset": "/images/proyectos/sanbenito/salon-04-640.webp 640w, /images/proyectos/sanbenito/salon-04-1280.webp 1280w, /images/proyectos/sanbenito/salon-04-1920.webp 1920w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/sanbenito/salon-04-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/sanbenito/salon-04-1280.webp"
          },
          {
            "w": 1920,
            "src": "/images/proyectos/sanbenito/salon-04-1920.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "andresito2",
    "farmacia": null,
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Salón de venta repuesto con perfumería, higiene infantil y sector de cosmética.",
        "width": 1267,
        "height": 990,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACQAwCdASoYABMAPu1mqE2ppaOiMAgBMB2JZwAAApytfMexqHwAAP7L5Qw2Zj4EECpyhsgAp2IP9QLtiSlLTFQN01o/xvfH67/vYOLN1PZAMhQAAAA=",
        "src": "/images/proyectos/andresito2/salon-01-1267.webp",
        "srcset": "/images/proyectos/andresito2/salon-01-640.webp 640w, /images/proyectos/andresito2/salon-01-1267.webp 1267w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito2/salon-01-640.webp"
          },
          {
            "w": 1267,
            "src": "/images/proyectos/andresito2/salon-01-1267.webp"
          }
        ]
      },
      {
        "alt": "Estanterías de cuidado personal y cosmética totalmente repuestas.",
        "width": 1320,
        "height": 977,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAABQAwCdASoYABIAPuVgpk2pJawiMAwBgByJZwDJEAlEt4BWAADKV0Ij+K6F5t9kNNIgIF9em07VKBjMcbFUOekWHjnXgAAA",
        "src": "/images/proyectos/andresito2/perfumeria-02-1320.webp",
        "srcset": "/images/proyectos/andresito2/perfumeria-02-640.webp 640w, /images/proyectos/andresito2/perfumeria-02-1280.webp 1280w, /images/proyectos/andresito2/perfumeria-02-1320.webp 1320w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito2/perfumeria-02-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito2/perfumeria-02-1280.webp"
          },
          {
            "w": 1320,
            "src": "/images/proyectos/andresito2/perfumeria-02-1320.webp"
          }
        ]
      },
      {
        "alt": "Montaje del mobiliario en obra, con paneles y módulos aún embalados.",
        "width": 1319,
        "height": 1746,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABwBACdASoYACAAPu12s1MpqCSiqAgBMB2JZwDO7D/nZPVcn7IYGcxr3jAO4AD2dQwPcdJaJikjB642IoIpe5acHj9ImaVvmuM/rJu6rr3EPpbzK/cwzIW+ZgRANgaGmRCJctLxyN6fbiKMmzd9EfF2JoAAAA==",
        "src": "/images/proyectos/andresito2/obra-03-1319.webp",
        "srcset": "/images/proyectos/andresito2/obra-03-640.webp 640w, /images/proyectos/andresito2/obra-03-1280.webp 1280w, /images/proyectos/andresito2/obra-03-1319.webp 1319w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito2/obra-03-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito2/obra-03-1280.webp"
          },
          {
            "w": 1319,
            "src": "/images/proyectos/andresito2/obra-03-1319.webp"
          }
        ]
      },
      {
        "alt": "Salón de venta terminado con islas de juguetería y cuidado personal.",
        "width": 1314,
        "height": 980,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwBACdASoYABIAPuFgpU2opaOiN/VYARAcCWcAzNAypLLv8sr+9Ri8vAAA+dXxySBZeR3f2Wk1QrXe1SvsoMbDRKaGApCdLEWxdAjgM4Mc3qMqIWXnnTv60AA=",
        "src": "/images/proyectos/andresito2/salon-04-1314.webp",
        "srcset": "/images/proyectos/andresito2/salon-04-640.webp 640w, /images/proyectos/andresito2/salon-04-1280.webp 1280w, /images/proyectos/andresito2/salon-04-1314.webp 1314w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito2/salon-04-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito2/salon-04-1280.webp"
          },
          {
            "w": 1314,
            "src": "/images/proyectos/andresito2/salon-04-1314.webp"
          }
        ]
      },
      {
        "alt": "Vitrina de bijouterie y accesorios con iluminación LED interior.",
        "width": 1313,
        "height": 1747,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADQBACdASoYACAAPuVio02pJaMiMAwBIByJZwAAXAHNjiDGepgFo25xVerxcsJgAAD9U59MppOD4rukZNPmm9UZdEu0aADROPwQ5CLvfYasiU5DSl0Q0mvop60CBHmdVXekGMEAAAA=",
        "src": "/images/proyectos/andresito2/vitrina-05-1313.webp",
        "srcset": "/images/proyectos/andresito2/vitrina-05-640.webp 640w, /images/proyectos/andresito2/vitrina-05-1280.webp 1280w, /images/proyectos/andresito2/vitrina-05-1313.webp 1313w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/andresito2/vitrina-05-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/andresito2/vitrina-05-1280.webp"
          },
          {
            "w": 1313,
            "src": "/images/proyectos/andresito2/vitrina-05-1313.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "garyulo",
    "farmacia": null,
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Mostrador de atención en melamina blanca con friso superior en madera y estanterías perimetrales de farmacia recién instaladas.",
        "width": 1280,
        "height": 963,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACQBACdASoYABIAPu1qq08ppiOiMBgIATAdiWcAyrQPQubM8MMKQO93LFNdkgAA4jvYHkbmk50T8CDXuReFIrAHifAR/51pRcP0690MGS/KhcWTwwY6AAAA",
        "src": "/images/proyectos/garyulo/mostrador-01-1280.webp",
        "srcset": "/images/proyectos/garyulo/mostrador-01-640.webp 640w, /images/proyectos/garyulo/mostrador-01-1280.webp 1280w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/garyulo/mostrador-01-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/garyulo/mostrador-01-1280.webp"
          }
        ]
      },
      {
        "alt": "Vitrina de exhibición con estantes de vidrio y mostrador de recepción con frente de madera.",
        "width": 963,
        "height": 1280,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADwBACdASoYACAAPu1yr1IppyQiqAgBMB2JZwDE2BEIUcFzQv/+0y5JKg/4tcqjOcAA/t6RmGbeF+4ceB/R5CcQCVhWSqpz5WvWLI4nCjj3lKuOEWSbW/zr+YLx/6wmY8nkSmJ53SgAAA==",
        "src": "/images/proyectos/garyulo/vitrina-02-963.webp",
        "srcset": "/images/proyectos/garyulo/vitrina-02-640.webp 640w, /images/proyectos/garyulo/vitrina-02-963.webp 963w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/garyulo/vitrina-02-640.webp"
          },
          {
            "w": 963,
            "src": "/images/proyectos/garyulo/vitrina-02-963.webp"
          }
        ]
      },
      {
        "alt": "Mostradores con tapa de vidrio en etapa de montaje, con escalera de obra al fondo del local.",
        "width": 963,
        "height": 1280,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwBACdASoYACAAPu1qrU8ppiQiMAgBMB2JZQCsAGXvOTLt2RbjS6ig7L4A8g9o3AAA/q+c8DLhdkjskO+W9gD0Q1iLTp2tGDtHAimU/ydB420dl/eisu2MVFPFIhY4LBjyAAAA",
        "src": "/images/proyectos/garyulo/obra-03-963.webp",
        "srcset": "/images/proyectos/garyulo/obra-03-640.webp 640w, /images/proyectos/garyulo/obra-03-963.webp 963w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/garyulo/obra-03-640.webp"
          },
          {
            "w": 963,
            "src": "/images/proyectos/garyulo/obra-03-963.webp"
          }
        ]
      },
      {
        "alt": "Vitrinas modulares con puertas de vidrio y zócalo en melamina símil madera, listas para reponer mercadería.",
        "width": 963,
        "height": 1280,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwBACdASoYACAAPu1orU6ppiSiMAgBMB2JZwDJEBKQ/amIGxd/6WQE63kNtfIjGgAA9ynsHXGsZIRsi5w+c/zKWXukCdpXGAQ1yPkRF1V+mje2NNHCWs5y1VKOxr+mtkB4qRz4/H4B+lFKOK5xCmKAAAA=",
        "src": "/images/proyectos/garyulo/estanteria-04-963.webp",
        "srcset": "/images/proyectos/garyulo/estanteria-04-640.webp 640w, /images/proyectos/garyulo/estanteria-04-963.webp 963w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/garyulo/estanteria-04-640.webp"
          },
          {
            "w": 963,
            "src": "/images/proyectos/garyulo/estanteria-04-963.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "tarico",
    "farmacia": null,
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Torres de estanterías blancas con iluminación LED vertical, con vidrieras cubiertas de papel durante la obra.",
        "width": 1011,
        "height": 1574,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwBQCdASoYACUAPt1ao02opSMjNUgBEBuJZwDM0BfYtDg7hF4Rmy6sQWBYn3vhaKNRAAD8sed44KpDu9idb0J7goD9gP7j42fPoCQaT29IZkkOms227PgH88RdMB0Fy1LWdAowAAA=",
        "src": "/images/proyectos/tarico/estanteria-01-1011.webp",
        "srcset": "/images/proyectos/tarico/estanteria-01-640.webp 640w, /images/proyectos/tarico/estanteria-01-1011.webp 1011w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/tarico/estanteria-01-640.webp"
          },
          {
            "w": 1011,
            "src": "/images/proyectos/tarico/estanteria-01-1011.webp"
          }
        ]
      },
      {
        "alt": "Mostrador con cajoneras en madera clara e isla de vidrio, junto a estanterías perimetrales iluminadas.",
        "width": 1018,
        "height": 1585,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACwBACdASoYACUAPuVapU2pJSOiNVv4ASAciWcAzjgPR2WM5u/8jZE2ftSfU/FgAPbtO4MYPBYS2woovtFiRVjBGNaHDllZtBcKJREku9pWJuG8cOIOWZ+NmCgAaqJFZgP129KQAAA=",
        "src": "/images/proyectos/tarico/mostrador-02-1018.webp",
        "srcset": "/images/proyectos/tarico/mostrador-02-640.webp 640w, /images/proyectos/tarico/mostrador-02-1018.webp 1018w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/tarico/mostrador-02-640.webp"
          },
          {
            "w": 1018,
            "src": "/images/proyectos/tarico/mostrador-02-1018.webp"
          }
        ]
      },
      {
        "alt": "Detalle de estanterías blancas con cajones y perfiles LED integrados en cada módulo.",
        "width": 1022,
        "height": 1460,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAACQBQCdASoYACIAPtlYpU2oJSOiNVv8AQAbCWcAzJQeDUwjroneeGOWw2NY9ukf1iPZefYEAAD+xX7zhJAx6mPrVuZ1qviTPyjDZC9xue+RC/uBZLgs5IlFaalDEb14zCZK1L5pmLJrKMtIOwAAAA==",
        "src": "/images/proyectos/tarico/estanteria-03-1022.webp",
        "srcset": "/images/proyectos/tarico/estanteria-03-640.webp 640w, /images/proyectos/tarico/estanteria-03-1022.webp 1022w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/tarico/estanteria-03-640.webp"
          },
          {
            "w": 1022,
            "src": "/images/proyectos/tarico/estanteria-03-1022.webp"
          }
        ]
      },
      {
        "alt": "Mostrador de atención con cruz farmacéutica retroiluminada en el frente y estantes laterales.",
        "width": 1204,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACQBACdASoYACAAPtVUoU2oJKMiN+gBABqJZwDM0CCW+rGeTSdyIFf1fhm88qAA/sTHll1/c/BHih/iPtLXIo55C/3N++738eOx2bC6xwGj5qxf+3gmmvpVL+gwAA==",
        "src": "/images/proyectos/tarico/mostrador-04-1204.webp",
        "srcset": "/images/proyectos/tarico/mostrador-04-640.webp 640w, /images/proyectos/tarico/mostrador-04-1204.webp 1204w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/tarico/mostrador-04-640.webp"
          },
          {
            "w": 1204,
            "src": "/images/proyectos/tarico/mostrador-04-1204.webp"
          }
        ]
      }
    ]
  },
  {
    "slug": "wayar",
    "farmacia": null,
    "localidad": null,
    "provincia": null,
    "anio": 2026,
    "fotos": [
      {
        "alt": "Salón con piso negro, mostradores blancos y perfil LED verde perimetral en el cielorraso.",
        "width": 1600,
        "height": 1204,
        "orientacion": "horizontal",
        "blur": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQBACdASoYABIAPt1WpU2opKOiN/qoARAbiWcAyRAba6AXYbzIEKn2n3Mu972KAADJsPzOVtQp0+B6rp/lI5knypU9xdH03KSI36rG4ZYhflx0j46/eAAA",
        "src": "/images/proyectos/wayar/salon-01-1600.webp",
        "srcset": "/images/proyectos/wayar/salon-01-640.webp 640w, /images/proyectos/wayar/salon-01-1280.webp 1280w, /images/proyectos/wayar/salon-01-1600.webp 1600w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/wayar/salon-01-640.webp"
          },
          {
            "w": 1280,
            "src": "/images/proyectos/wayar/salon-01-1280.webp"
          },
          {
            "w": 1600,
            "src": "/images/proyectos/wayar/salon-01-1600.webp"
          }
        ]
      },
      {
        "alt": "Estantería perimetral blanca de piso a techo con perfil LED verde en la esquina superior.",
        "width": 963,
        "height": 1280,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwBQCdASoYACAAPu1gq02ppaQiMBgMATAdiWcAxNhOiQ1JZI/C3oT74eEfh1EGr9BecACgDd75mOmqva2TlmSzAxWYpyx/S7EYdgtlITzezp+uX/YKocH9JQunE+/ji74AaGRu8B6L4nbAAAA=",
        "src": "/images/proyectos/wayar/estanteria-02-963.webp",
        "srcset": "/images/proyectos/wayar/estanteria-02-640.webp 640w, /images/proyectos/wayar/estanteria-02-963.webp 963w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/wayar/estanteria-02-640.webp"
          },
          {
            "w": 963,
            "src": "/images/proyectos/wayar/estanteria-02-963.webp"
          }
        ]
      },
      {
        "alt": "Torre de estanterías blancas reflejada en piso de mármol, junto a un pasillo de circulación.",
        "width": 963,
        "height": 1280,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwBQCdASoYACAAPt1gqU2opiQiMAwBEBuJZwAAWgsGe9rnbv2d4v7iN436KIUDrDGCAAD+f8v4FpZ2Xv+ihGQ2A3nmM8sKMmrd+/O4zTse7zf5Fo7oI3LSZ6DzQwCoVWuwpb8ogc0AAA==",
        "src": "/images/proyectos/wayar/salon-03-963.webp",
        "srcset": "/images/proyectos/wayar/salon-03-640.webp 640w, /images/proyectos/wayar/salon-03-963.webp 963w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/wayar/salon-03-640.webp"
          },
          {
            "w": 963,
            "src": "/images/proyectos/wayar/salon-03-963.webp"
          }
        ]
      },
      {
        "alt": "Vidriera de exhibición de gran formato con estantes iluminados y piso negro pulido.",
        "width": 963,
        "height": 1280,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAACQBQCdASoYACAAPu1krU2ppaSiKA1RMB2JZQC/OEVN7VPNyWNylUNK7PEwIkAwvIS0qVX9AAD7o8ONY1k1kX1FblwwZJAxRhFEJlwtkY9vHD3KzR6gyi5cUFfiLdO9on/UP06TeJ7eWdD6vT2Fo7B7OjlpZgmsc5HgoZgA",
        "src": "/images/proyectos/wayar/vidriera-04-963.webp",
        "srcset": "/images/proyectos/wayar/vidriera-04-640.webp 640w, /images/proyectos/wayar/vidriera-04-963.webp 963w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/wayar/vidriera-04-640.webp"
          },
          {
            "w": 963,
            "src": "/images/proyectos/wayar/vidriera-04-963.webp"
          }
        ]
      },
      {
        "alt": "Mostrador de atención con friso LED verde y acceso a sector interno del local.",
        "width": 1204,
        "height": 1600,
        "orientacion": "vertical",
        "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoYACAAPu1wrlIppiQiqAgBMB2JZwDMWFbPe7cC+9X6fG7klVcidR3w/9nUAAD+39EITwU9/DDaYP1SEOM4vSy1SIxALIR29YxlZISEHM4sCLGh29PmeBAd0O11BX4O0K4uUxt3k7b5II8bkfyUAA==",
        "src": "/images/proyectos/wayar/mostrador-05-1204.webp",
        "srcset": "/images/proyectos/wayar/mostrador-05-640.webp 640w, /images/proyectos/wayar/mostrador-05-1204.webp 1204w",
        "fuentes": [
          {
            "w": 640,
            "src": "/images/proyectos/wayar/mostrador-05-640.webp"
          },
          {
            "w": 1204,
            "src": "/images/proyectos/wayar/mostrador-05-1204.webp"
          }
        ]
      }
    ]
  }
];
