// Genera la versión protegida con contraseña en publico/index.html
// Uso:  node cifrar.js "la-contraseña"      (o con la variable de entorno CLAVE)
const fs = require("fs");
const path = require("path");
const { webcrypto: crypto } = require("crypto");

const clave = process.argv[2] || process.env.CLAVE;
if (!clave) {
  console.error('Falta la contraseña. Uso: node cifrar.js "contraseña"');
  process.exit(1);
}

const dir = __dirname;
let html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const vales = fs.readFileSync(path.join(dir, "vales.js"), "utf8");
// Mete los vales dentro de la página (así no queda ningún archivo suelto legible)
html = html.replace('<script src="vales.js"></script>', () => "<script>\n" + vales + "\n</script>");
// En la versión publicada no existe el modo prueba (?hoy=...)
html = html.replace('const hoyParam = qs.get("hoy");', "const hoyParam = null;");
if (html.includes('src="vales.js"') || html.includes('qs.get("hoy")')) throw new Error("No se pudo preparar la página");

(async () => {
  const enc = new TextEncoder();
  const sal = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await crypto.subtle.importKey("raw", enc.encode(clave.normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: sal, iterations: 250000, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
  const cifrado = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(html)));
  const b64 = u => Buffer.from(u).toString("base64");
  const datos = JSON.stringify({ s: b64(sal), i: b64(iv), c: b64(cifrado) });

  const plantilla = fs.readFileSync(path.join(dir, "candado.html"), "utf8");
  const salida = plantilla.replace("__DATOS__", () => datos);
  fs.mkdirSync(path.join(dir, "publico"), { recursive: true });
  fs.writeFileSync(path.join(dir, "publico", "index.html"), salida);
  console.log("✅ Listo: publico/index.html (" + Math.round(salida.length / 1024) + " KB)");
})();
