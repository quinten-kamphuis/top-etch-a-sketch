const button = document.querySelector('#button');
const gridContainer = document.querySelector('#container');

let gridSquares = 16;

const addDrawingEffect = () => {
    document.querySelectorAll('.square').forEach(elem => elem.addEventListener('mouseover', () => {
        elem.classList.add('colored')
    }))
};

const makeGrid = () => {
    const squareSize = gridContainer.clientWidth / gridSquares;
    gridContainer.innerHTML = '';
    for(i = 1; i <= gridSquares * gridSquares; i++){
        gridContainer.innerHTML += `<div class="square" style="width: ${squareSize}px; height: ${squareSize}px;"></div>`;
    }
    addDrawingEffect();
}

document.addEventListener('DOMContentLoaded', () => {
    makeGrid();
})
button.addEventListener('click', () => {
    input = parseInt(prompt("How big? Enter a number between 16 and 40"));
    if (input >= 16 && input <= 40){
        gridSquares = input;
        makeGrid();
    } else {
        alert('Error; wrong input.');
    }
})
