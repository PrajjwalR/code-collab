// Prajjwal's script

document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 10) {
    header.style.backgroundColor = "black";
    header.style.opacity = "0.3";
  } else {
    header.style.backgroundColor = " rgb(16, 2, 67)";
    header.style.opacity = "1";
  }
});

const navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Atul's script.js

let scrollPosition = 0;

function updateOpacity() {
  const container = document.querySelector(".feedback-container");
  const items = container.querySelectorAll(".feedback-item");
  const containerWidth = container.clientWidth;
  items.forEach((item) => {
    const itemLeft = item.offsetLeft - scrollPosition;
    const itemRight = itemLeft + item.clientWidth;
    if (itemRight <= 0 || itemLeft >= containerWidth) {
      item.style.opacity = "0";
    } else {
      item.style.opacity = "1";
    }
  });
}

function autoScroll() {
  const container = document.querySelector(".feedback-container");
  const itemWidth = container.querySelector(".feedback-item").clientWidth;
  const maxScroll = container.scrollWidth - container.clientWidth;

  scrollPosition = (scrollPosition + itemWidth) % (maxScroll + itemWidth);
  container.style.transform = `translateX(-${scrollPosition}px)`;
  updateOpacity();
}

document.addEventListener("DOMContentLoaded", () => {
  updateOpacity();
  setInterval(autoScroll, 3000); // Scrolls every 3 seconds
});
