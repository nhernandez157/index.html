// Fun fact button
document.getElementById("factBtn").addEventListener("click", () => {
    document.getElementById("factText").textContent =
        "The Liberty Bell has been an iconic symbol of American independence since 1776!";
});

document.getElementById("colorBtn").addEventListener("click", () => {
    const body = document.body;
    const heading = document.querySelector("h1");

    // If background is red, switch back to blue
    if (body.style.backgroundColor === "rgb(255, 230, 230)") {
        body.style.backgroundColor = "#f0f8ff";   // original light blue
        heading.style.color = "#b30000";          // original red
    } 
    else {
        // Switch to red background + blue heading
        body.style.backgroundColor = "#ffe6e6";   // soft red
        heading.style.color = "#0044cc";          // deep blue
    }
});

// Show/hide fireworks img
document.getElementById("toggleFireworks").addEventListener("click", () => {
    const img = document.getElementById("fireworksImg");
    img.style.display = (img.style.display === "none") ? "block" : "none";
});

