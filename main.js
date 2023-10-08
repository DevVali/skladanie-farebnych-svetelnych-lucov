"use strict";

const colors = [
    document.querySelector("#slider-red"),
    document.querySelector("#slider-green"),
    document.querySelector("#slider-blue"),
];

colors.forEach((elem) => {
    elem.addEventListener("input", () => {
        document.querySelector("#eye-iris").style.fill = `rgb(${colors[0].value}, ${colors[1].value}, ${colors[2].value})`;
    });
});
