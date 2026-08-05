# Changelog

## 2026-08-05 — Feature work and reorganization (summary)
This changelog captures the curated, human-readable summary of today's work so reviewers and maintainers can quickly see what changed without scanning raw commits.

### Highlights
- Reorganized the app into a clear feature layout: Traffic-Route-Optimizer-main/{public, src, assets, test}
- Implemented search algorithms:
  - A* and Uniform Cost Search (UCS) in src/algorithms/search.js
  - Grid-based A* with Manhattan/Euclidean heuristics in src/algorithms/grid.js
- Added a canvas-based visualizer (src/js/visualize.js) and wired the UI (src/js/route.js)
- Added unit tests for algorithms (Traffic-Route-Optimizer-main/test/)
- Added developer tooling: package.json, ESLint config, testing and lint scripts
- Added CI workflows: lint+tests and GitHub Pages deploy (.github/workflows/)
- Added a lightweight demo SVG and referenced it in the app README
- Cleaned up temporary/duplicate files for a concise project layout

### Pull request
- Feature PR: https://github.com/bruce12-glitch/Smart-Traffic-Route-/pull/2 (merged)

### How to review quickly
1. Open the public entry: Traffic-Route-Optimizer-main/public/index.html
2. Inspect source: Traffic-Route-Optimizer-main/src/
   - algorithms/ — algorithm implementations
   - js/ — UI and visualizer
   - css/ — styles
3. Run tests: `npm ci && npm test`
4. Run dev preview: `npm run dev` and open the local server or open the public/index.html

If you want the GitHub Contributions graph to show these commits, add the commit author email (iambruce0012@gmail.com) to your GitHub account (Settings → Emails) and verify it. Alternatively, ask me to rewrite commit history to an email you already own (this will force-push and rewrite history).
