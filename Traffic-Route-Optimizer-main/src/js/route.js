import { aStar } from '../algorithms/search.js';
import { findPathGrid } from '../algorithms/grid.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('route-form');
  const output = document.getElementById('route-output');
  const modeSelect = document.getElementById('mode');
  const heuristicSelect = document.getElementById('heuristic');
n  function showMessage(msg) {
    if (output) output.textContent = msg;
  }

  if (!form || !output) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const mode = modeSelect ? modeSelect.value : 'graph';
    const heuristic = heuristicSelect ? heuristicSelect.value : 'manhattan';

    if (!origin || !destination) {
      showMessage('Please enter both origin and destination.');
      return;
    }

    showMessage('Searching route (demo)...');
    try {
      if (mode === 'grid'){
        const res = findPathGrid(origin, destination, {heuristic});
        if (res.path.length === 0) showMessage('No path found in demo grid.');
        else showMessage(`Grid path: ${res.path.join(' → ')} (cost: ${res.cost})`);
      } else {
        // graph mode: attempt to use a small demo graph
        const demoGraph = {
          A: [{to: 'B', cost: 1}, {to: 'C', cost: 4}],
          B: [{to: 'C', cost: 2}, {to: 'D', cost: 5}],
          C: [{to: 'D', cost: 1}],
          D: []
        };
        const res = aStar(demoGraph, origin, destination, () => 0);
        if (!res.path || res.path.length === 0) showMessage('No path found in demo graph.');
        else showMessage(`Graph path: ${res.path.join(' → ')} (cost: ${res.cost})`);
      }
    } catch (err) {
      showMessage('Error computing route: ' + (err && err.message ? err.message : String(err)));
    }
  });
});
