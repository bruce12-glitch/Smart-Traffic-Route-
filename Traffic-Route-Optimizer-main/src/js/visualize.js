export function renderGrid(canvasId, grid, path=[]) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cols = grid[0].length, rows = grid.length;
  const maxSize = Math.min(600, window.innerWidth - 40);
  const cell = Math.floor(maxSize / Math.max(cols, rows));
  canvas.width = cell * cols;
  canvas.height = cell * rows;

  // draw cells
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let y=0;y<rows;y++){
    for (let x=0;x<cols;x++){
      const val = grid[y][x];
      if (val === 1) ctx.fillStyle = '#333';
      else ctx.fillStyle = '#fff';
      ctx.fillRect(x*cell, y*cell, cell, cell);
      ctx.strokeStyle = '#e0e0e0';
      ctx.strokeRect(x*cell, y*cell, cell, cell);
    }
  }

  // draw path
  for (const key of path){
    const [x,y] = key.split(',').map(Number);
    ctx.fillStyle = 'rgba(76,175,80,0.85)';
    ctx.fillRect(x*cell, y*cell, cell, cell);
  }

  // start/end markers
  if (path.length>=1){
    const [sx,sy] = path[0].split(',').map(Number);
    const [gx,gy] = path[path.length-1].split(',').map(Number);
    ctx.fillStyle = 'rgba(33,150,243,0.95)';
    ctx.fillRect(sx*cell, sy*cell, cell, cell);
    ctx.fillStyle = 'rgba(244,67,54,0.95)';
    ctx.fillRect(gx*cell, gy*cell, cell, cell);
  }
}
