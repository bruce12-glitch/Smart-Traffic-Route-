// A* and Uniform Cost Search (UCS) implementations
// Graph format: { node: [{to: neighbor, cost: number}, ...], ... }

class MinHeap {
  constructor() { this.heap = []; }
  _swap(i,j){ [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
  _parent(i){ return Math.floor((i-1)/2); }
  _left(i){ return i*2+1; }
  _right(i){ return i*2+2; }
  push(item, priority){
    const node = {item, priority};
    this.heap.push(node);
    let i = this.heap.length-1;
    while(i>0){
      const p = this._parent(i);
      if(this.heap[p].priority <= this.heap[i].priority) break;
      this._swap(p,i); i = p;
    }
  }
  pop(){
    if(this.heap.length===0) return undefined;
    if(this.heap.length===1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i=0;
    for(;;){
      const l=this._left(i), r=this._right(i);
      let smallest=i;
      if(l < this.heap.length && this.heap[l].priority < this.heap[smallest].priority) smallest = l;
      if(r < this.heap.length && this.heap[r].priority < this.heap[smallest].priority) smallest = r;
      if(smallest===i) break;
      this._swap(i, smallest);
      i = smallest;
    }
    return top;
  }
  isEmpty(){ return this.heap.length===0; }
}

export function aStar(graph, start, goal, heuristic = () => 0) {
  if (start === goal) return { path: [start], cost: 0 };

  const openSet = new MinHeap();
  openSet.push(start, 0);

  const cameFrom = new Map();
  const gScore = new Map();
  gScore.set(start, 0);

  const fScore = new Map();
  fScore.set(start, heuristic(start, goal));

  const closed = new Set();

  while(!openSet.isEmpty()){
    const current = openSet.pop().item;
    if (current === goal) {
      // reconstruct path
      const path = [];
      let node = current;
      while(node !== undefined){ path.push(node); node = cameFrom.get(node); }
      path.reverse();
      return { path, cost: gScore.get(current) };
    }

    closed.add(current);

    const neighbors = graph[current] || [];
    for(const edge of neighbors){
      const neighbor = edge.to;
      const tentative_g = gScore.get(current) + (edge.cost ?? 1);
      if (closed.has(neighbor)) {
        if (gScore.has(neighbor) && tentative_g >= gScore.get(neighbor)) continue;
      }
      if (!gScore.has(neighbor) || tentative_g < gScore.get(neighbor)){
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentative_g);
        const f = tentative_g + heuristic(neighbor, goal);
        fScore.set(neighbor, f);
        openSet.push(neighbor, f);
      }
    }
  }

  // no path
  return { path: [], cost: Infinity };
}

export function ucs(graph, start, goal) {
  // UCS is A* with zero heuristic
  return aStar(graph, start, goal, () => 0);
}
