let height;
let length;

startButton.addEventListener(`click`, setup);
function setup () {
    height = heightField.textContent;
    length = lengthField.textContent;
}

function start(){
    content.remove();
    let content = document.createElement(`div`);
    let subjectGrid = [];

    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.add(`row`);

        for (let i = 0; i < length; i++) {
            let subject = document.createElement(`div`);
            subject.classList.add(`subject`);
            subject.addEventListener(`mouseover`, shiftToblack);
            subject.addEventListener('click', resetTile);
            row.appendChild(subject);
            subjectGrid.push(subject);
        }

        board.appendChild(row);
    }

    content.appendChild(board);


    function shiftToblack() {
        this.classList.add(`hover`);
    }

    function resetTile() {
        this.classList.remove(`hover`);
    }
}
