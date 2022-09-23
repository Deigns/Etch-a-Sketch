const board = document.createElement(`div`);
let subjectGrid = [];
let gridSize = 16;
board.classList.add(`board`);


for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add(`row`);

    for (let i = 0; i < gridSize; i++) {
        let subject = document.createElement(`div`);
        subject.classList.add(`subject`);
        subject.addEventListener(`mouseover`, shiftToblack);
        row.appendChild(subject);
        subjectGrid.push(subject);
    }

    board.appendChild(row);
}

document.body.appendChild(board);

function shiftToblack() {
    this.classList.add(`hover`);
}
