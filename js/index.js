"use strict";

const mainAdviceId = document.querySelector("#main-advice-id");
const mainAdvice = document.querySelector("#main-advice");
const mainBtn = document.querySelector("#main-btn");

mainBtn.addEventListener("click", () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((adviceData) => {
            const adviceObj = adviceData.slip;
            mainAdviceId.innerHTML = `<p>ADVICE # ${adviceObj.id}</p>`;
            mainAdvice.innerHTML = `<p>"${adviceObj.advice}"</p>`;
        })
        .catch((error) => {
            console.log(error);
        });
}
