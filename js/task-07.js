const text = document.querySelector("#text");
const control = document.querySelector("#font-size-control");

fontSizeChange();

control.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    text.style.fontSize = `${Number.parseInt(control.value)}px`;
}