const header = document.createElement('div');
header.classList.add(`header`);
header.textContent = `Etch-a-sketch`;
console.log(header);
const content = document.createElement(`div`);
content.classList.add(`content`);

const gridSizeQ = document.createElement(`p`);
gridSizeQ.classList.add('question');
gridSizeQ.textContent = `Please enter grid dimensions. Limit is 25`;
content.appendChild(gridSizeQ);

//create height input 
const heightInput = document.createElement('div');
content.appendChild(heightInput);

const heightLabel = document.createElement(`label`);
heightLabel.setAttribute(`for`, `height`)
heightLabel.textContent = `Height: `
heightInput.appendChild(heightLabel);

const heightField = document.createElement('input');
heightField.setAttribute(`type`, `text`);
heightField.setAttribute(`id`,`height`);
heightField.classList.add(`input`);
heightInput.appendChild(heightField);

//Create length input
const lengthInput = document.createElement('div');
content.appendChild(lengthInput);

const lengthLabel = document.createElement(`label`);
lengthLabel.setAttribute(`for`, `length`)
lengthLabel.textContent = `Length: `
lengthInput.appendChild(lengthLabel);

const lengthField = document.createElement('input');
lengthField.setAttribute(`type`, `text`);
lengthField.setAttribute(`id`,`length`);
lengthField.classList.add(`input`);
lengthInput.appendChild(lengthField);

const startButton = document.createElement('button');
startButton.textContent = `Begin`;
content.appendChild(startButton);

//Reveal Elements
document.body.appendChild(header);
document.body.appendChild(content);





