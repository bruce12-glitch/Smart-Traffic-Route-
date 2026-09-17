# Smart Traffic Route Optimizer

[![CI](https://github.com/bruce12-glitch/Smart-Traffic-Route-/actions/workflows/ci.yml/badge.svg)](https://github.com/bruce12-glitch/Smart-Traffic-Route-/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/bruce12-glitch/Smart-Traffic-Route-/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/bruce12-glitch/Smart-Traffic-Route-/actions/workflows/pages-deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An interactive demo that visualizes AI search algorithms — **A\*** and **Uniform Cost Search (UCS)** — finding optimal routes across a traffic-style weighted grid.

**[View the live demo →](https://trafficrouteoptimizer.vercel.app)**

![Demo](assets/demo.svg)

## What it does

The demo renders a grid where each cell has a traversal cost representing traffic conditions. Two search algorithms then compete to find the lowest-cost path from a start node to a goal node:

- **A\*** — best-first search using a heuristic to guide exploration toward the goal
- **UCS** — uniform-cost search, which expands nodes purely by accumulated path cost

Watching them side by side shows the core trade-off: A\* typically explores far fewer nodes thanks to its heuristic, while UCS guarantees optimality without needing one.

## Quick start

```bash
git clone https://github.com/bruce12-glitch/Smart-Traffic-Route-.git
cd Smart-Traffic-Route-
npm ci
npm run dev
```

Then open `Traffic-Route-Optimizer-main/public/index.html` directly, or visit the dev server URL printed in your terminal.

## Project structure

```
├── Traffic-Route-Optimizer-main/
│   ├── public/          # Static demo (index.html, grid viewer, demo.svg)
│   ├── src/
│   │   └── algorithms/
│   │       └── search.js  # A* and UCS implementations
│   └── test/            # Unit tests for the search algorithms
├── .github/workflows/
│   ├── ci.yml           # Lint + test on push
│   └── pages-deploy.yml # Publishes public/ to GitHub Pages
├── .eslintrc.json
└── package.json
```

## Algorithms

Both implementations live in `Traffic-Route-Optimizer-main/src/algorithms/search.js`.

| Algorithm | Optimal | Heuristic | Typical node expansions |
| --- | --- | --- | --- |
| A\* | Yes (with admissible heuristic) | Required | Few |
| UCS | Yes | None | Many |

## Development

```bash
npm ci        # install dependencies
npm run dev   # start local dev server
npm test      # run the algorithm test suite
npm run lint  # check code style
```

## Deployment

The `public/` directory is published two ways:

- **GitHub Pages** — via the `pages-deploy.yml` workflow on every push to `main`
- **Vercel** — [trafficrouteoptimizer.vercel.app](https://trafficrouteoptimizer.vercel.app)

## License

MIT — see [LICENSE](LICENSE) for details.
