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

function getSelectedColor() {
    const selectColor = document.getElementById('select-color');
    let cell = grid.childNodes;
    cell.forEach(squareDivs => {
        squareDivs.addEventListener('mouseover', () => {
            squareDivs.style.backgroundColor = selectColor.value;
        })
    });
}

function getRandomColor() {
    let cell = grid.childNodes;
    cell.forEach(squareDivs => {
        squareDivs.addEventListener('mouseover', () => {
            squareDivs.style.backgroundColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);;
        })
    });
}

const selectColor = document.getElementById('select-color');
selectColor.onchange = () => {
    getSelectedColor();
} 

const randomColor= document.getElementById('random-color');
randomColor.addEventListener('click', () => {
    getRandomColor();
}) 

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('current-slider-value');
sliderValue.innerHTML = slider.value;
sliderValue.innerHTML = slider.value + 'x' + slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value + 'x' + this.value;
    grid.innerHTML = ''; 
    selectColor.selectedIndex = 0;
    createCells(this.value, this.value);
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    const squareCount = document.getElementsByClassName('cells');
    for (i = 0; i < squareCount.length; i++) {
        squareCount[i].style.backgroundColor = 'white';
    }
});

