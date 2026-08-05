# Smart Traffic Route Optimizer — Live Demo & Overview

Live demo: https://trafficrouteoptimizer.vercel.app  
(or open Traffic-Route-Optimizer-main/public/index.html locally)

![Screenshot](https://github.com/user-attachments/assets/b177a158-6651-41f8-b681-c5e5fb414c8f)

[![Live Demo](https://img.shields.io/badge/demo-github_pages-blue)](https://bruce12-glitch.github.io/Smart-Traffic-Route-/)

![Demo animation](./assets/demo.svg)

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

## Commit history
For a complete and up-to-date commit history, view the repository commits on GitHub:

https://github.com/bruce12-glitch/Smart-Traffic-Route-/commits/bruce12-glitch-legendary-disco
