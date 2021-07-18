const btnDown = document.querySelector('#btn-down');
const btnReset = document.querySelector('#btn-reset');
const btnUp = document.querySelector('#btn-up');
let counter = document.getElementById('counter');


const addColorBlue = () => {
    if (counter.textContent == 0) {
        return counter.style.color = "#1d1c1c";
    }
    if (counter.textContent > 0) {
        return counter.style.color = "blue";
    }
}

const addColorRed = () => {
    if (counter.textContent == 0) {
        return counter.style.color = "#1d1c1c";
    }
    if (counter.textContent < 0) {
        return counter.style.color = "red";
    }
}
const add = () => {
    let addition = counter.textContent = parseInt(counter.textContent) + 1;
    addColorBlue();
    return addition;
}

const reset = () => {
    counter.textContent = 0;
    counter.style.color = '#1d1c1c';
}

const subtract = () => {
    let substraction = counter.textContent = parseInt(counter.textContent) - 1;
    addColorRed();
    return substraction;
}

// btnDown.addEventListener('click', subtract);
btnReset.addEventListener('click', reset);
// btnUp.addEventListener('click', add);
btnUp.addEventListener('mousedown', add);
btnDown.addEventListener('mousedown', subtract)