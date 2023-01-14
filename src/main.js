'use strict';

const container = document.querySelector('.container');
const initialColor = document.querySelector('#initial');
const newColor = document.querySelector('#new');

const grid = {
  rows: 16,
  columns: 16,
};

const totalCells = grid.rows * grid.columns;

const randomColor = () => '#' + (Math.random().toString(16).slice(-6));

const isPowerOf3 = (i) => 1162261467 % (i + 1) === 0 && i !== 0;

const colorNotInitial = (initColor) => {
  let cellColor = randomColor();

  while (cellColor === initColor) {
    cellColor = randomColor();
  }

  return cellColor;
};

const convertToRGB = (color) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const randomizeCellColor = (i, initColor) => {
  if (isPowerOf3(i)) {
    return initColor;
  }

  return colorNotInitial(initColor);
};

createGrid(totalCells, container, grid.columns);

function createGrid(cellsAmount, parent, columns) {
  for (let i = 0; i < cellsAmount; i++) {
    createCell(i, parent);
  }

  parent.style
    .setProperty(`grid-template-columns`, `repeat(${columns}, 1fr)`);
}

function createCell(i, parent) {
  const cell = document.createElement('div');

  cell.textContent = `${i + 1}`;
  cell.classList.add('cell');
  cell.style.backgroundColor = randomizeCellColor(i, initialColor.value);

  return parent.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');

function changeCellColor(event, i, initColor, changedColor) {
  if (isPowerOf3(i)) {
    if (event.target.style.backgroundColor === convertToRGB(initColor)) {
      event.target.style.backgroundColor = changedColor;
    } else {
      event.target.style.backgroundColor = initColor;
    }
  } else {
    event.target.style.backgroundColor = colorNotInitial(initColor);
  }
}

cells.forEach((cell, i) => {
  cell.addEventListener('click', (event) => {
    changeCellColor(event, i, initialColor.value, newColor.value);
  });
});

initialColor.addEventListener('change', (event) => {
  cells.forEach((cell, i) => {
    if (isPowerOf3(i)) {
      cell.style.backgroundColor = event.target.value;
    }
  });
});
