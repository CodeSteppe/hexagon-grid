const rowHeight = 110 - 32;
const colWidth = 100;

function createGrid() {
  const grid = document.querySelector('.hexagon-grid');
  const gridWidth = grid.clientWidth;
  const gridHeight = grid.clientHeight;
  const rowCount = Math.ceil(gridHeight / rowHeight);
  const colCount = Math.ceil(gridWidth / colWidth);

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