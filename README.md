# Gabi Raíz — Press Kit

Press kit oficial de **Gabi Raíz**, DJ y productor de Mendoza, Argentina. Sitio
estático de una sola página: portada, bio, música (*Rituals* y SoundCloud),
escenarios, rider y booking, en español y en inglés.

La estética sale de sus fotos de estudio: el azul petróleo del fondo, el rojo de
la foto del pañuelo (que aparece una sola vez, en *Rituals*) y las rayas de su
logo, que siguen de largo y dibujan la cordillera detrás de él en la portada. Al
final de la página la misma cordillera aparece dada vuelta, como raíz.

## Cómo está armado

Sin framework ni build: HTML, CSS y JavaScript a mano.

| Archivo | Qué hace |
|---------|----------|
| `index.html` | Todo el contenido en español. Es lo que ven Google y WhatsApp, y lo que se muestra si falla el JavaScript. |
| `style.css` | Estilos del sitio, incluida la versión para imprimir (rider y contacto en papel). |
| `boot.js` | Marca que hay JavaScript antes del primer pintado, para que las entradas de las secciones no escondan el contenido si el JS no corre. |
| `script.js` | Barra, entradas de las secciones, cambio de idioma y botón para copiar el mail. Tiene los textos en inglés. |
| `fonts/` | Alegreya y Alegreya Sans (Huerta Tipográfica), servidas desde el sitio. Licencia OFL incluida. |
| `img/` | Fotos en WebP en varios tamaños, logo en SVG, emblema y equipo del rider. |
| `press/` | Pack para promotores: fotos en alta y logos (SVG y PNG), en un ZIP. |
| `og.jpg` | Imagen que aparece al compartir el link por WhatsApp o redes. |
| `vercel.json` | Cabeceras de seguridad (CSP) y caché. |
| `404.html` | Página para links que no existen. |

### Textos en dos idiomas

El español está escrito en `index.html`. El inglés vive en `script.js`, en el
objeto `EN`, con la misma clave que el atributo `data-i18n` del elemento. El
sitio elige el idioma del navegador la primera vez y después recuerda el que se
eligió con los botones ES / EN.

Si se cambia un texto, hay que cambiarlo en los dos lados.

### El reproductor

Es el embed de SoundCloud de *The sound of Earth*. Para cambiar el tema, se
reemplaza el `src` del `iframe` en la sección `#musica` (y el link de abajo). La
CSP sólo deja cargar frames de `w.soundcloud.com`.

### Caché

`style.css`, `script.js` y `boot.js` se guardan un año en el navegador. Si se
modifican, hay que subir el número de `?v=` donde se cargan en `index.html` (y
`style.css` también en `404.html`). Las imágenes se guardan 30 días: si se
reemplaza una foto, conviene cambiarle el nombre.

## Deploy

Sitio estático. Se importa el repo en Vercel y no hace falta configurar build ni
variables de entorno. El dominio está escrito en `index.html` (canonical, `og:`),
`sitemap.xml` y `robots.txt`: si cambia, hay que actualizarlo en esos tres lados.

## Desarrollo local

```bash
python -m http.server 8125
```

---

Sitio por [Enzo Diaz Zingaretti](https://portfolio-kexxy.vercel.app).
