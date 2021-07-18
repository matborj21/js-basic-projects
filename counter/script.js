let count = 0;

const btnDown = document.querySelector('#btn-down');
const btnReset = document.querySelector('#btn-reset');
const btnUp = document.querySelector('#btn-up');
let counter = document.getElementById('counter');


const addColorBlue = () => {
    if (count == 0) {
        return counter.style.color = "#1d1c1c";
    }
    if (count > 0) {
        return counter.style.color = "blue";
    }
}

const addColorRed = () => {
    if (count == 0) {
        return counter.style.color = "#1d1c1c";
    }
    if (count < 0) {
        return counter.style.color = "red";
    }
}
const add = () => {
    count++;
    counter.textContent = count;
    addColorBlue();

}

const reset = () => {
    counter.textContent = 0;
    counter.style.color = '#1d1c1c';
}

const subtract = () => {
    count--;
    counter.textContent = count;
    addColorRed();

}

btnDown.addEventListener('click', subtract);
btnReset.addEventListener('click', reset);
btnUp.addEventListener('click', add);