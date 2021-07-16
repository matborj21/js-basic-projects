const simpleColor = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnColor = document.getElementById("btn-color");
const btnHex = document.getElementById("btn-hex");
const colorSpan = document.querySelector('.color');


/** checked if the page is active */
const navLink = document.querySelectorAll('.nav-links a');
const navLinkLengt = navLink.length;
const currentLocation = location.href;
for (let i = 0; i < navLinkLengt; i++) {
    if (navLink[i].href === currentLocation) {
        navLink[i].className = 'active';
    }
}

//funton to get random number for colors & hex array
const randNumberColor = (color) => Math.floor(Math.random() * color.length);


/* button for index page simple background generator */
if (btnColor) { //if the element is existing on the page
    btnColor.addEventListener('click', () => {
        let randomNumber = randNumberColor(simpleColor);

        document.body.style.backgroundColor = simpleColor[randomNumber];
        colorSpan.textContent = simpleColor[randomNumber];
    });
}
/* button for index page hex background generator */
if (btnHex) { //if the element is existing on the page
    btnHex.addEventListener('click', () => {
        let newHexColor = '#';
        for (let i = 0; i < 6; i++) {
            newHexColor += hex[randNumberColor(hex)];
        }

        document.body.style.backgroundColor = newHexColor;
        colorSpan.textContent = newHexColor;
    });
}