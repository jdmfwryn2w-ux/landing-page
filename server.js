const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || "0.0.0.0";
const root = __dirname;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

const securityHeaders = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'self' https://superconductor.com https://*.superconductor.com",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
};

function send(res, status, headers, body) {
  res.writeHead(status, { ...securityHeaders, ...headers });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  let filePath = decodeURIComponent(url.pathname);
  if (filePath.endsWith("/")) filePath += "index.html";
  if (filePath === "") filePath = "/index.html";

  const abs = path.normalize(path.join(root, filePath));
  if (!abs.startsWith(root)) {
    send(res, 403, { "Content-Type": "text/plain; charset=utf-8" }, "Forbidden");
    return;
  }

  fs.stat(abs, (err, stat) => {
    if (err || !stat.isFile()) {
      send(res, 404, { "Content-Type": "text/html; charset=utf-8" }, "<!doctype html><title>Not found</title><p>Not found</p>");
      return;
    }

    const type = mime[path.extname(abs).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      ...securityHeaders,
      "Content-Type": type,
      "Cache-Control": "no-store",
    });
    fs.createReadStream(abs).pipe(res);
  });
});

server.listen(port, host, () => {
  process.stdout.write(`landing-page listening on http://${host}:${port}/\n`);
});
