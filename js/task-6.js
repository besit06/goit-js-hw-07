function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');
  
function createBoxes(amount) {
   destroyBoxes();

    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      size += 10;
      elements.push(div);
    }
    boxesContainer.append(...elements);
}
  
function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
  
 createBtn.addEventListener('click', () => {
   const amount = parseInt(input.value, 10);
   
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
   
     input.value = '';
  });

  
  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });
