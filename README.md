# landing-page

Personal landing page for Herchel Davisjr (HDJR), with a GitHub profile link and a print-ready certificate.

## Setup

```bash
npm install
npm run build
npm start
```

The site is served at [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

## Scripts

- `npm run build` — webpack production build into `dist/`
- `npm start` — serve `dist/` on port 8080
- `npm run dev` — webpack-dev-server on port 8080

GitHub Actions runs `npm install` and `npx webpack` on Node 18, 20, and 22.
