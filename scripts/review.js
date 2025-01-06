// Update Review Counter
let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display Review Count
document.getElementById("review-count").textContent = reviewCount;

// Footer Content
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;