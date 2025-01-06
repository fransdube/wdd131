// Product Array
const products = [
    { id: "p1", name: "Product A" },
    { id: "p2", name: "Product B" },
    { id: "p3", name: "Product C" },
    { id: "p4", name: "Product D" },
    { id: "p5", name: "Product E" },
];

// Populate Product Name Dropdown
const productSelect = document.getElementById("product-name");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Footer Content
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;