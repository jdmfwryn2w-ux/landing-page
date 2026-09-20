# landing-page

Personal landing page for Herchel Davisjr (HDJR), with a GitHub profile link
and a printable identity certificate.

## Run locally

```sh
npm install
npm start
# open http://127.0.0.1:8080/
```

The static server listens on port **8080** (override with `PORT`).

## Build

GitHub Actions runs:

```sh
npm install
npx webpack
```

Webpack bundles `src/index.js` to `dist/bundle.js`. The live page is static
HTML/CSS/JS under the repo root and does not require the webpack output.

## Layout notes

- Root element `#certificate-print` is the printable certificate.
- Citation lines are `<p>` tags inside that element and wrap long URLs.
- Layout uses `max-width: 100%`, `min-width: 0`, and `overflow-wrap` so the
  page does not overflow the viewport horizontally.
