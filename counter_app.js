let countEl = document.getElementById("count-num");
let saveEl = document.getElementById("counter");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let sv = count + " , ";
    saveEl.textContent += sv;
    countEl.textContent = 0;
    count = 0;
}