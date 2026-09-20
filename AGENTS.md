# AGENTS.md

Instructions for coding agents working in this repository.

## Project

Personal landing page stub. README: “Personal landing page with GitHub profile link.” There is **no HTML, CSS, JS, or `package.json`** yet.

Tracked files:

```
README.md
WORKFLOW_AUDIT.md                 # CI trigger stub, not a real audit
.github/workflows/webpack.yml     # Node + webpack job (currently fails)
```

## Commands

There is no installable project. The GitHub Actions workflow on `main` (push and pull_request) runs this on Node 18 / 20 / 22:

```bash
npm install
npx webpack
```

Both fail today because `package.json` and webpack config are missing. Do not report those commands as working until a Node project exists.

No test, lint, or format scripts.

## How to work here

- `cd` into this repo before git commands. Do not borrow the Next.js / pnpm stack from sibling `magic-demo-monorepo` unless asked.
- If the task is only documentation or AGENTS.md, do **not** scaffold a full app just to make CI green.
- If you **are** asked to build the landing page:
  - Keep it a small personal page with a GitHub profile link.
  - Use **npm** (matches CI), not pnpm/yarn.
  - Add `package.json`, a webpack config (or switch CI to a simpler static setup), an entry file, and a `.gitignore` covering `node_modules/`, `dist/`, `build/`, and `.env*`.
  - After that, run the same commands CI runs (`npm install` then `npx webpack`) before finishing.
- `WORKFLOW_AUDIT.md` exists only to retrigger Actions. Do not treat it as findings or a changelog.

## CI

`.github/workflows/webpack.yml` checks out the repo, sets up Node, and runs `npm install` + `npx webpack` with `working-directory: ${{ github.workspace }}` (repo root). Historical runs have failed. Adding AGENTS.md alone will not make CI pass.

## Security

No secrets, env files, or deploy keys. The workflow uses only `actions/checkout` and `actions/setup-node`. If you add an app, gitignore env files and never commit tokens.
