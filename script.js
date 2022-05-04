const sideLength = 100;
const hexagonWidth = Math.sqrt(3) * sideLength;
const hexagonHeight = 2 * sideLength;
const gap = 0.02 * hexagonWidth;
const colWidth = hexagonWidth + gap;
const rowHeight = 1.5 * sideLength + Math.sqrt(0.75) * gap;

const root = document.documentElement;

root.style.setProperty('--width', hexagonWidth + 'px');
root.style.setProperty('--height', hexagonHeight + 'px');
root.style.setProperty('--gap', gap + 'px');

function createGrid() {
  const grid = document.querySelector('.grid');
  const gridWidth = grid.clientWidth;
  const gridHeight = grid.clientHeight;
  let rowCount = Math.ceil(gridHeight / rowHeight) + 1;
  let colCount = Math.ceil(gridWidth / colWidth) + 1;

  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < colCount; j++) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      row.append(hexagon);
    }
    rows.push(row);
  }
  grid.replaceChildren(...rows);
}

createGrid();

window.addEventListener('resize', e => {
  createGrid();
});