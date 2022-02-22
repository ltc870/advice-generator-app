"use strict";

const mainAdviceId = document.querySelector("#main-advice-id");
const mainAdvice = document.querySelector("#main-advice");
const mainBtn = document.querySelector("#main-btn");

window.addEventListener("load", getAdvice)

mainBtn.addEventListener("click", getAdvice);

async function getAdvice() {
    try {
    const request = await fetch("https://api.adviceslip.com/advice");
    const response = await request.json();

    let adviceId = response.slip.id;
    let adviceBody = response.slip.advice;

    mainAdviceId.innerHTML = `<p>ADVICE #${adviceId}</p>`;
    mainAdvice.innerHTML = `<p>"${adviceBody}"</p>`;
    } catch(error) {
        console.log(`You've received an ${error}`);
    } 
}
