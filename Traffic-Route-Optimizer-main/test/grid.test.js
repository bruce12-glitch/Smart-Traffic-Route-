import assert from 'node:assert/strict';
import { findPathGrid } from '../src/algorithms/grid.js';

// Grid test: use coordinates inside the demo grid
await (async function(){
  const res = findPathGrid('0,0', '6,6', {heuristic:'manhattan'});
  assert.ok(res.path.length > 0, 'Expected a path from 0,0 to 6,6');
  assert.equal(res.path[0], '0,0');
  assert.equal(res.path[res.path.length-1], '6,6');
  console.log('Grid test passed');
})();
