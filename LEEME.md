# Calendario de adviento · Hugo para Paula 🎁

- `vales.js` → nombres, dedicatoria y los 24 vales. **Edita aquí.**
- `index.html` → el diseño del calendario.
- `cifrar.js` + `candado.html` → generan la versión protegida con contraseña (`publico/index.html`).

Probar en local con una fecha: abre `index.html?hoy=2026-12-10` (el modo prueba no existe en la versión publicada y no manda avisos).

## Publicar (Netlify, gratis)
1. Haz el repositorio **privado** en GitHub (Settings → General → Danger Zone → Change visibility).
2. En netlify.com: *Add new site → Import an existing project → GitHub* y elige este repositorio.
3. En *Site configuration → Environment variables* añade `CLAVE` = vuestra contraseña.
4. Despliega. Netlify usa `netlify.toml` (comando `node cifrar.js`, carpeta `publico`).
5. Opcional: cambia el nombre del sitio en *Site configuration → Change site name* (ahora: `micalendario-adviento`).

## Avisos al canjear
Cuando se canjea un vale, la página envía el formulario oculto `canjes` (formularios de Netlify)
y Netlify manda un correo a los dos. Los correos se configuran en Netlify:
*Site configuration → Forms → Form notifications*.
