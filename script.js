let countEl = document.querySelector("#count");
let counter = 0;

function inc() {
    counter ++;
    countEl.innerText = counter;
}

let saveEl = document.querySelector("#savings");

function save() {
    saveEl.textContent += " " + countEl.textContent + " -";
    countEl.textContent = 0;
    counter = 0;
}