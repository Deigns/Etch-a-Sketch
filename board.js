const board = document.createElement(`div`);
let gridSize = 4;
board.classList.add(`.board`);


for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add(`.row`);

    for (let i = 0; i < gridSize; i++) {
        let subject = document.createElement(`div`);
        subject.classList.add(`.subject`);
        row.appendChild(subject);
    }

    board.appendChild(row);
}

document.body.appendChild(board);
