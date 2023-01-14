'use strict';

const container = document.querySelector('.container');
const initialColor = document.querySelector('#initial');
const newColor = document.querySelector('#new');

const grid = {
  rows: 16,
  columns: 16,
};

const totalCells = grid.rows * grid.columns;

createGrid(totalCells, container, grid.columns);

const checkPowerOf3 = (i) => 1162261467 % (i + 1) === 0 && i !== 0;

const convertToRGB = (color) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const cells = document.querySelectorAll('.cell');

cells.forEach((cell, i) => {
  cell.addEventListener('click', (event) => {
    if (checkPowerOf3(i)) {
      if (event.target.style.backgroundColor
        === convertToRGB(initialColor.value)) {
        event.target.style.backgroundColor = newColor.value;
      } else {
        event.target.style.backgroundColor = initialColor.value;
      }
    } else {
      event.target.style.backgroundColor
      = '#' + (Math.random().toString(16).slice(-6));
    }
  });
});

initialColor.addEventListener('change', (event) => {
  cells.forEach((cell, i) => {
    if (checkPowerOf3(i)) {
      cell.style.backgroundColor = event.target.value;
    }
  });
});

function randomizeColors(num, color) {
  if (1162261467 % num === 0 && num !== 1) {
    return color;
  }

  return '#' + (Math.random().toString(16).slice(-6));
}

function createCell(i, parent) {
  const cell = document.createElement('div');

  cell.textContent = `${i + 1}`;
  cell.classList.add('cell');
  cell.style.backgroundColor = randomizeColors(i + 1, initialColor.value);

  return parent.appendChild(cell);
}

function createGrid(cellsAmount, parent, columns) {
  for (let i = 0; i < cellsAmount; i++) {
    createCell(i, parent);
  }

  parent.style
    .setProperty(`grid-template-columns`, `repeat(${columns}, 1fr)`);
}
