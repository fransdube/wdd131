// Trail Data
const trails = [
    {
        name: "Trail A",
        difficulty: "Easy",
        length: "5 km",
        highlights: "Waterfall, Wildlife",
        image: "images/trail2.webp"
    },
    {
        name: "Trail B",
        difficulty: "Moderate",
        length: "10 km",
        highlights: "Viewpoint, Forest",
        image: "images/trail1.webp"
    },
    {
        name: "Trail C",
        difficulty: "Hard",
        length: "15 km",
        highlights: "Mountain, River",
        image: "images/trail3.webp"
    }
];

// Store Trail Data in localStorage (if not already stored)
if (!localStorage.getItem("trails")) {
    localStorage.setItem("trails", JSON.stringify(trails));
}

// Retrieve Trail Data from localStorage
const storedTrails = JSON.parse(localStorage.getItem("trails"));

// Dynamically Generate Trail Cards
const trailContainer = document.getElementById("trail-container");

if (trailContainer) {
    storedTrails.forEach(trail => {
        const card = document.createElement("div");
        card.classList.add("trail-card");

        card.innerHTML = `
        <img src="${trail.image}" alt="${trail.name}" loading="lazy">
        <h3>${trail.name}</h3>
        <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
        <p><strong>Length:</strong> ${trail.length}</p>
        <p><strong>Highlights:</strong> ${trail.highlights}</p>
      `;

        trailContainer.appendChild(card);
    });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Footer Content
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;