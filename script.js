const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const photoContainer = document.getElementById("photo-container");

// Move the NO button
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Action when YES is clicked
yesBtn.addEventListener("click", () => {
    message.style.display = "none";
    photoContainer.style.display = "block";
});
