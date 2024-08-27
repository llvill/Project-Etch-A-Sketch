

const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize-button');
const containerWidth = 800;
const containerHeight = 600;

function createGrid(size) {
    // clear existing grid items
    container.innerHTML = '';

    // calculate size of each grid item
    const itemWidth = containerWidth / size;
    const itemHeight = containerHeight / size;

    // esnure that the container is filled exactly with grid items
    const numItems = size * size;

    // create new grid items
    for(let i = 0; i< size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${itemWidth}px`
        div.style.height = `${itemHeight}px`
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }

    // set container size
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(event) {
   const element = event.target;

   // get current opacity, default 1 if not set
   let opacity = parseFloat(window.getComputedStyle(element).opacity) || 1;

    // check if opacity is already 1 , if yes, reset to full color and randomize
   if(opacity === 1){
    element.style.backgroundColor = getRandomColor();
   }

   // reduce opacity by 10% each time
   opacity = Math.max(opacity - 0.1, 0);
   element.style.opacity = opacity;
}

function resizeGrid(){
    let size = prompt("Enter the number of squares per side (max 100): ");

    size = parseInt(size,10);
    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(size);
}

// default size of grid
createGrid(16);

resizeButton.addEventListener('click', resizeGrid);