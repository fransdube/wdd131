// Temple Data Array
const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicationDate: "1893-04-06",
        area: 253000,
        imageUrl: "images/section1.webp"
    },
    {
        name: "Washington D.C. Temple",
        location: "Kensington, Maryland, USA",
        dedicationDate: "1974-11-19",
        area: 160000,
        imageUrl: "images/section1.webp",
    },
    {
        name: "São Paulo Brazil Temple",
        location: "São Paulo, Brazil",
        dedicationDate: "1978-10-30",
        area: 59000,
        imageUrl: "images/section1.webp",
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicationDate: "2019-03-10",
        area: 40000,
        imageUrl: "images/section1.webp",
    },
    {
        name: "Hong Kong China Temple",
        location: "Hong Kong, China",
        dedicationDate: "1996-05-26",
        area: 58000,
        imageUrl: "images/section1.webp",
    },
    // Add more temples here
];

// Function to display temples
function displayTemples(temples) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = ''; // Clear existing cards

    temples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        card.innerHTML = `
        <h3>${temple.name}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedication Date:</strong> ${temple.dedicationDate}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      `;

        templeContainer.appendChild(card);
    });
}

// Function to filter temples
function filterTemples(filter) {
    let filteredTemples = temples;

    switch (filter) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            // Show all temples
            break;
    }

    displayTemples(filteredTemples);
}

// Event listeners for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.getAttribute('data-filter');
        filterTemples(filter);
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Initial display of all temples
displayTemples(temples);

// Footer content
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;