

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
        div.addEventListener('mouseover', previewColor);
        div.addEventListener('mouseout', resetColor);
        div.addEventListener('click', lockColor); 
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

function previewColor(event) {
    const element = event.target;

    //check if element is not locked
    if(!element.classList.contains('locked')) {
        // get random color for when you hover over specific grid-item
        const previewColor = getRandomColor();
        element.style.backgroundColor = previewColor;
    }
}

function resetColor(event){
    const element = event.target;

    //check if element is not locked
    if(!element.classList.contains('locked')) {
        // reset to default color
        element.style.backgroundColor = '#fff';
    }
}
function lockColor(event) {
    const element = event.target;

    if(!element.classList.contains('locked')) {
    element.classList.add('locked');
    element.style.opacity = 1;
    }
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