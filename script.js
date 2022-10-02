const grid = document.getElementById('grid');
function createCells(cols, rows) {
    for (i = 0; i < (cols * rows); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).classList.add('cells');
    }
    grid.style.setProperty('--cols-repeat', cols);
    grid.style.setProperty('--rows-repeat', rows);
}

createCells(16, 16);

let cell = grid.childNodes;
cell.forEach(squareDivs => {
    squareDivs.addEventListener('mouseover', () => {
        squareDivs.style.backgroundColor = 'red';
    })
});

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('current-slider-value');
sliderValue.innerHTML = slider.value;
sliderValue.innerHTML = slider.value + 'x' + slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value + 'x' + this.value;
    grid.innerHTML = '';
    createCells(this.value, this.value);
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    const squareCount = document.getElementsByClassName('cells');
    for (i = 0; i < squareCount.length; i++) {
        squareCount[i].style.backgroundColor = 'white';
    }
});

