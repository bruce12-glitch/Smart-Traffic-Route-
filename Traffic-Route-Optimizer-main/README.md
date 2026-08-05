# Smart Traffic Route Optimizer — Live Demo & Overview

Live demo: https://trafficrouteoptimizer.vercel.app  
(or open Traffic-Route-Optimizer-main/public/index.html locally)

![Screenshot](https://github.com/user-attachments/assets/b177a158-6651-41f8-b681-c5e5fb414c8f)

## Quick links
- App entry: Traffic-Route-Optimizer-main/public/index.html
- Source: Traffic-Route-Optimizer-main/src/
- Algorithms: Traffic-Route-Optimizer-main/src/algorithms/
- Tests: Traffic-Route-Optimizer-main/test/

## How to run locally
1. Clone the repo and switch to branch: `git checkout bruce12-glitch-legendary-disco`
2. Install dev deps: `npm ci`
3. Run a static dev server: `npm run dev` and open the provided URL, or open the file `Traffic-Route-Optimizer-main/public/index.html` in your browser
4. Run tests: `npm test`
5. Lint: `npm run lint`

## Folder structure (feature-based)
- Traffic-Route-Optimizer-main/
  - public/ — static entry (index.html, canvas viewer)
  - src/
    - js/ — UI modules (route.js, visualize.js)
    - css/ — styles
    - algorithms/ — search.js (A*/UCS), grid.js (grid A*)
  - test/ — unit tests for algorithms
  - assets/ — images/screenshots (place any project images here)

> Images used in this README were provided by the project owner.

## Recent commits (top 8)
- f282630 2026-08-05 10:07:46 +0530 Bruce — Add grid visualizer and export demo grid; wire UI to render path on canvas
- 989948f 2026-08-05 10:05:59 +0530 Bruce — Add grid-based A* implementation, wire UI for grid mode and heuristics, and add grid unit test
- ea283fe 2026-08-05 10:04:04 +0530 Bruce — Add search algorithms, tests, package.json, lint config, CI workflow, and assets folder
- 06d20b7 2026-08-05 10:00:46 +0530 Bruce — Reorganize app into feature-based layout; add modular src and placeholder algorithm; update READMEs
- 1e48e4e 2026-08-05 09:51:35 +0530 Bruce — Add minimal assets and accessibility fallback for demo
- 7d79dd0 2026-07-13 11:36:51 +0530 Inbasekaran S — Revise README for 3D platform development
- d10b3a6 2026-07-13 11:36:26 +0530 Inbasekaran S — Create README.md for Mitriva application
- d1705d8 2026-04-10 12:37:21 +0530 bruce12-glitch — Updated 'index.html' with comprehensive comments explaining all lines of the code.
