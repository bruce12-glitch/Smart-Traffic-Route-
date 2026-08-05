import { findPath } from '../algorithms/astar.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('route-form');
  const output = document.getElementById('route-output');
n  function showMessage(msg) {
    if (output) output.textContent = msg;
  }

  if (!form || !output) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    if (!origin || !destination) {
      showMessage('Please enter both origin and destination.');
      return;
    }

    showMessage('Searching route (demo)...');
    try {
      const path = await findPath(origin, destination);
      showMessage(`Demo result: ${path.join(' → ')}`);
    } catch (err) {
      showMessage('Error computing route: ' + (err && err.message ? err.message : String(err)));
    }
  });
});
