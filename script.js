const container = document.getElementById('container');

function createCells(cols, rows) {
    for (i = 0; i < (cols * rows); i++) {
        let cells = document.createElement('div');
        container.appendChild(cells).classList.add('cells');
    }
    container.style.setProperty('--cols-repeat', cols);
    container.style.setProperty('--rows-repeat', rows);
}

createCells(16, 16);



