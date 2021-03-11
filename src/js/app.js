// TODO: write code here
const container = document.getElementsByClassName('container')[0];
const img = document.images[0];
img.parentElement.removeChild(img);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
}

function setActive() {
  if (document.images[0]) {
    const activeCell = document.images[0].parentElement;
    activeCell.removeChild(img);
  }
  function random() {
    return Math.floor(Math.random() * (16 - 0) + 0);
  }

  const cells = container.children;
  const index = random();
  cells[index].appendChild(img);
}

// eslint-disable-next-line no-unused-vars
const interval = setInterval(setActive, 1000);
