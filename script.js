// Fun fact button
document.getElementById("factBtn").addEventListener("click", () => {
    document.getElementById("factText").textContent =
        "The Liberty Bell has been an iconic symbol of American independence since 1776!";
});

// Change background color
document.getElementById("colorBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffe6e6"; // soft patriotic red
});

// Show/hide fireworks img
document.getElementById("toggleFireworks").addEventListener("click", () => {
    const img = document.getElementById("fireworksImg");
    img.style.display = (img.style.display === "none") ? "block" : "none";
});

