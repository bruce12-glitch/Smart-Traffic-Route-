// Grid-based A* implementation for demo purposes
// Grid is a 2D array where 0 = free cell, 1 = obstacle
// Coordinates are [x, y] with (0,0) top-left

function parseCoord(s) {
  const [a,b] = s.split(',').map(p => parseInt(p.trim(),10));
  if (Number.isNaN(a) || Number.isNaN(b)) throw new Error('Invalid coordinate: ' + s);
  return [a, b];
}

function manhattan([x1,y1],[x2,y2]){ return Math.abs(x1-x2)+Math.abs(y1-y2); }
function euclidean([x1,y1],[x2,y2]){ return Math.hypot(x1-x2,y1-y2); }

class MinHeap {
  constructor(){ this.h = []; }
  push(item, pr){ this.h.push({item,pr}); let i=this.h.length-1; while(i>0){ const p=Math.floor((i-1)/2); if(this.h[p].pr<=this.h[i].pr) break; [this.h[p],this.h[i]]=[this.h[i],this.h[p]]; i=p;} }
  pop(){ if(this.h.length===0) return undefined; if(this.h.length===1) return this.h.pop(); const top=this.h[0]; this.h[0]=this.h.pop(); let i=0; while(true){ const l=2*i+1, r=2*i+2; let s=i; if(l<this.h.length && this.h[l].pr < this.h[s].pr) s=l; if(r<this.h.length && this.h[r].pr < this.h[s].pr) s=r; if(s===i) break; [this.h[i],this.h[s]]=[this.h[s],this.h[i]]; i=s; } return top; }
  isEmpty(){ return this.h.length===0; }
}

export function findPathGrid(startCoordStr, goalCoordStr, options={heuristic:'manhattan'}){
  const start = parseCoord(startCoordStr);
  const goal = parseCoord(goalCoordStr);
  const heuristicName = options.heuristic || 'manhattan';
  const heuristic = heuristicName === 'euclidean' ? euclidean : manhattan;

  // Demo grid: 7x7 with some obstacles
  const grid = [
    [0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0]
  ];
  const width = grid[0].length, height = grid.length;

  function inBounds([x,y]){ return x>=0 && x<width && y>=0 && y<height; }
  function isWalkable([x,y]){ return inBounds([x,y]) && grid[y][x] === 0; }

  const startKey = start.join(',');
  const goalKey = goal.join(',');

  if (!isWalkable(start) || !isWalkable(goal)) return { path: [], cost: Infinity };
  if (startKey === goalKey) return { path: [startKey], cost: 0 };

  const open = new MinHeap();
  open.push(start, heuristic(start, goal));
  const g = new Map(); g.set(startKey, 0);
  const came = new Map();
  const closed = new Set();

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]]; // 4-way

  while(!open.isEmpty()){
    const current = open.pop().item;
    const curKey = current.join(',');
    if (curKey === goalKey){
      // reconstruct
      const path = [];
      let node = curKey;
      while(node!==undefined){ path.push(node); node = came.get(node); }
      path.reverse();
      return { path, cost: g.get(goalKey) };
    }
    closed.add(curKey);

    for(const d of dirs){
      const nb = [current[0]+d[0], current[1]+d[1]];
      const nbKey = nb.join(',');
      if (!isWalkable(nb)) continue;
      if (closed.has(nbKey)) continue;
      const tentative = g.get(curKey) + 1; // uniform cost per step
      if (!g.has(nbKey) || tentative < g.get(nbKey)){
        g.set(nbKey, tentative);
        came.set(nbKey, curKey);
        const priority = tentative + heuristic(nb, goal);
        open.push(nb, priority);
      }
    }
  }

  return { path: [], cost: Infinity };
}
