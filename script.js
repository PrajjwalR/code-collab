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

// Appu

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call to set the time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// Atul's script.js

// script.js

let scrollPosition = 0;
let intervalId;

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

// function autoScroll() {
//     const container = document.querySelector('.feedback-container');
//     const itemWidth = container.querySelector('.feedback-item').clientWidth;
//     const maxScroll = container.scrollWidth - container.clientWidth;

//     scrollPosition = (scrollPosition + itemWidth) % (maxScroll + itemWidth);
//     container.style.transform = `translateX(-${scrollPosition}px)`;
//     updateOpacity();
// }

function autoScroll() {
  const container = document.querySelector(".feedback-container");
  const itemWidth = container.querySelector(".feedback-item").clientWidth;
  const maxScroll = container.scrollWidth - container.clientWidth;

  // Calculate the next scroll position
  scrollPosition = (scrollPosition + itemWidth) % (maxScroll + itemWidth);

  // Apply the scroll position
  container.style.transform = `translateX(-${scrollPosition}px)`;

  // If we have reached the end, reset scroll position to start again
  if (scrollPosition === 0) {
    container.style.transition = "none"; // Disable transition for instant reset
    setTimeout(() => {
      container.style.transition = ""; // Re-enable transition after resetting
    }, 50); // Small delay to ensure transition reset takes effect smoothly
  }

  updateOpacity();
}

function startAutoScroll() {
  intervalId = setInterval(autoScroll, 3000); // Scrolls every 3 seconds
}

function stopAutoScroll() {
  clearInterval(intervalId);
}

document.addEventListener("DOMContentLoaded", () => {
  updateOpacity();
  startAutoScroll();

  const items = document.querySelectorAll(".feedback-item img");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      stopAutoScroll();
      item.parentElement.style.transform = "scale(1.2)";
      item.parentElement.style.zIndex = "10";
    });

    item.addEventListener("mouseleave", () => {
      startAutoScroll();
      item.parentElement.style.transform = "scale(1)";
      item.parentElement.style.zIndex = "1";
    });
  });
});

// ----------------------section 6 -------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".toggle-icon");

      faqQuestions.forEach((q) => {
        if (q !== question) {
          q.classList.remove("active");
          q.nextElementSibling.classList.remove("active");
          q.querySelector(".toggle-icon").textContent = "+";
        }
      });

      question.classList.toggle("active");
      answer.classList.toggle("active");
      icon.textContent = icon.textContent === "+" ? "x" : "+";
      icon.style.transform = "rotate(360deg)";
      faqItem.classList.toggle("active");
    });
  });
});
