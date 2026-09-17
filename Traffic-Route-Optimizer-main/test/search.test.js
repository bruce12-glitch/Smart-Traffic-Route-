import assert from 'node:assert/strict';
import { aStar, ucs } from '../src/algorithms/search.js';

// Small helper graph used in tests
const graph = {
  A: [{to: 'B', cost: 1}, {to: 'C', cost: 4}],
  B: [{to: 'C', cost: 2}, {to: 'D', cost: 5}],
  C: [{to: 'D', cost: 1}],
  D: []
};

// Heuristic that underestimates true distance (admissible) for the test graph
function heuristic(node){
  const h = {
    'A': 3,
    'B': 2,
    'C': 1,
    'D': 0
  };
  return (h[node] ?? 0) - 0; // ensure numeric
}

// Tests
await (async function(){
  const resUCS = ucs(graph, 'A', 'D');
  assert.deepEqual(resUCS.path, ['A','B','C','D'], 'UCS should find shortest path via B->C');
  assert.equal(resUCS.cost, 4, 'UCS cost should be 4');

  const resA = aStar(graph, 'A', 'D', heuristic);
  assert.deepEqual(resA.path, ['A','B','C','D'], 'A* should find shortest path with admissible heuristic');
  assert.equal(resA.cost, 4, 'A* cost should be 4');

  // No path case
  const resNo = ucs({X:[]}, 'X', 'Y');
  assert.deepEqual(resNo.path, [], 'No path should return empty array');
  assert.equal(resNo.cost, Infinity, 'No path cost should be Infinity');

  console.log('All algorithm tests passed');
})();
