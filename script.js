// Appu

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);

// Atul's script.js

let scrollPosition = 0;
let intervalId;

function updateOpacity() {
  const container = document.querySelector(".feedback-container");
  const items = container.querySelectorAll(".feedback-item");
}

function autoScroll() {
  const container = document.querySelector(".feedback-container");
  const itemWidth = container.querySelector(".feedback-item").clientWidth;
  const maxScroll = container.scrollWidth - container.clientWidth;

  scrollPosition = (scrollPosition + itemWidth) % (maxScroll + itemWidth);

  container.style.transform = `translateX(-${scrollPosition}px)`;

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
      item.parentElement.style.transform = "scale(1.3)";
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
