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

    if (selectColor.selectedIndex == 0) {
        selectColor.style.border = 'none';
        randomColor.style.border = '3px blue solid';
    }
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
    randomColor.style.border = 'none';
    selectColor.style.border = '3px blue solid';
    getSelectedColor();
} 

const randomColor= document.getElementById('random-color');
randomColor.addEventListener('click', () => {
    selectColor.style.border = 'none';
    randomColor.style.border = '3px blue solid';
    selectColor.selectedIndex = 0;
    getRandomColor();
}) 

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('current-slider-value');
sliderValue.textContent = slider.value;
sliderValue.textContent = slider.value + 'x' + slider.value;
slider.oninput = function() {
    sliderValue.textContent = this.value + 'x' + this.value;
    sliderValue.setAttribute('style', 'font-size: 1.2rem; margin-top: 5px; color: blue');
    grid.innerHTML = ''; 
    randomColor.style.border = 'none';
    selectColor.style.border = '1px black solid';
    selectColor.selectedIndex = 0;
    createCells(this.value, this.value);
}

slider.addEventListener('mouseup', () => {
    sliderValue.setAttribute('style', 'margin-top: 0px; color: black');
}) 

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    const squareCount = document.getElementsByClassName('cells');
    for (i = 0; i < squareCount.length; i++) {
        squareCount[i].style.backgroundColor = 'white';
    }
});

