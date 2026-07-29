// Fun fact button
const factBtn = document.getElementById("factBtn");
if (factBtn) {
  factBtn.addEventListener("click", () => {
    const factText = document.getElementById("factText");
    if (factText) {
      factText.textContent =
        "The Liberty Bell has been an iconic symbol of American independence since 1776!";
    } else {
      console.warn("#factText not found");
    }
  });
} else {
  console.warn("#factBtn not found");
}

// Cache elements
const body = document.body;
const heading = document.querySelector("h1");
// Prefer an explicit id for the years span, fallback to the first span inside the heading
const yearsSpan = document.getElementById("yearsSpan") || (heading && heading.querySelector("span"));

const colorBtn = document.getElementById("colorBtn");
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    // Toggle a class on the body for a stable state indicator
    body.classList.toggle("alt-colors");

    if (body.classList.contains("alt-colors")) {
      // Switch to red background + blue heading
      body.style.backgroundColor = "#ffe6e6"; // soft red
      if (heading) heading.style.color = "#000080"; // deep blue
      if (yearsSpan) yearsSpan.style.color = "#000080"; // deep blue
    } else {
      // Switch back to original light blue + red heading
      body.style.backgroundColor = "#f0f8ff"; // original light blue
      if (heading) heading.style.color = "#b30000"; // original red
      if (yearsSpan) yearsSpan.style.color = "#b30000"; // original red
    }
  });
} else {
  console.warn("#colorBtn not found");
}

// Show/hide fireworks img
const toggleFireworks = document.getElementById("toggleFireworks");
if (toggleFireworks) {
  toggleFireworks.addEventListener("click", () => {
    const img = document.getElementById("fireworksImg");
    if (!img) {
      console.warn("#fireworksImg not found");
      return;
    }

    // If display is empty, compute the actual computed style
    const currentDisplay = img.style.display || window.getComputedStyle(img).display;
    img.style.display = (currentDisplay === "none") ? "block" : "none";
  });
} else {
  console.warn("#toggleFireworks not found");
}
