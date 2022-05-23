const toggleableElement = document.getElementById("toggle-element");
const toggleButton = document.getElementById("toggle-button");
let toggle = true;

toggleButton.addEventListener("click", () => {
    toggle = !toggle;
    toggleableElement.style.display = toggle ? "none" : "block";

});