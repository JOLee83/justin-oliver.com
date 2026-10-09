This is my second version of my portfolio page. It is built with React 19, TypeScript, Vite, and Tailwind CSS. Hand rolled it myself, no template needed.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build to `dist/`
- `npm test` — run tests
- `npm run lint` — lint
- `npm run test:run` — run tests once (what CI runs)

## Deployment

Every PR into `master` must pass lint, tests, and the type-checked build (see `.github/workflows/ci.yml`) before it can merge. Merging to `master` reruns those checks and, if they pass, deploys the site to GitHub Pages.
