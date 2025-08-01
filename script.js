// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

document.addEventListener("click", (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove("show");
  }
});

// Tabs logic
const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.content');

tabButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing when clicking on tab

    const target = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

// Close tabs if clicked outside
document.addEventListener("click", (event) => {
  const tabArea = document.querySelector(".tabs");
  const tabContentArea = document.querySelector(".tab-content");

  if (!tabArea.contains(event.target) && !tabContentArea.contains(event.target)) {
    tabButtons.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  }
});


