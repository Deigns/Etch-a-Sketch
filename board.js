let height;
let length;

startButton.addEventListener(`click`, setup);
function setup () {
    height = heightField.value;
    length = lengthField.value;

    newGrid();
}

function newGrid(){
    board.remove();
    board = document.createElement(`div`);
    board.classList.add(`board`);
    
    let tileGrid = [];

    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.add(`row`);

        for (let i = 0; i < length; i++) {
            let tile = document.createElement(`div`);
            tile.classList.add(`subject`);
            tile.addEventListener(`mouseover`, shiftToblack);
            tile.addEventListener('click', resetTile);
            row.appendChild(tile);
            tileGrid.push(tile);
        }

        board.appendChild(row);
    }

    document.body.appendChild(board);


    function shiftToblack() {
        this.classList.add(`hover`);
    }

    function resetTile() {
        this.classList.remove(`hover`);
    }
}
