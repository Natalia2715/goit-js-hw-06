const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");
input.addEventListener("blur", () => {
    if (input.value.length === Number.parseInt(dataLength)) {
        input.setAttribute("class", "valid");
    } else { input.setAttribute("class", "invalid") }
});
