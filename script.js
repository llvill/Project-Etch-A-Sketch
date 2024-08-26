

const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize-button');
const containerSize=960;

function createGrid(size) {

    container.innerHTML = '';

    const itemSize = containerSize / size;

    for(let i = 0; i< size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${itemSize}px`
        div.style.height = `${itemSize}px`
        container.appendChild(div);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = 'black';
}

function resetColor(event) {
    event.target.style.backgroundColor = '#fff';
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

createGrid(16);

resizeButton.addEventListener('click', resizeGrid);