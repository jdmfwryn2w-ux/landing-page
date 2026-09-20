# landing-page

Personal landing page with a GitHub profile link. The repo is a starter: there is no application source yet, only docs and CI.

## Current layout

- `README.md` — project description
- `WORKFLOW_AUDIT.md` — notes used to retrigger CI
- `.github/workflows/webpack.yml` — GitHub Actions job named "NodeJS with Webpack"

There is no `package.json`, webpack config, HTML/CSS/JS source, or `.gitignore`.

## CI

On push and pull request to `main`, `.github/workflows/webpack.yml` runs on Node 18, 20, and 22:

```bash
npm install
npx webpack
```

That job will fail until a Node project exists (`package.json`, installable dependencies, and a webpack build that exits 0). Keep the workflow green when adding an app: either add a working webpack build or change the workflow to match the real toolchain.

## When you add the site

- Put the public page at the repo root or under `src/` / `public/` and document the choice here.
- Add `.gitignore` for `node_modules/`, build output (`dist/`, `build/`), and `.env*` files.
- Prefer a small static page unless the ticket asks for a framework. If you keep webpack, pin it in `package.json` and add `webpack.config.js` so `npx webpack` has an entry and output.
- Do not commit secrets, generated `node_modules/`, or build artifacts.
- Keep copy and links consistent with `README.md` (this is a personal landing page, not a product marketing site unless a ticket says otherwise).

## Conventions

- Change only what the ticket needs. Do not invent a large app around the empty tree.
- If you introduce a package manager, pick one and stick to it (`npm` matches the existing workflow).
- After adding a build, run the same commands CI runs before considering the change done.
