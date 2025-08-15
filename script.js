const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
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

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
  img.addEventListener('load', () => img.classList.add('loaded'));
});





// Tap/click animation
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.add("highlight");
    setTimeout(() => {
      card.classList.remove("highlight");
    }, 300);
  });
});
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove highlight from all
    projectCards.forEach(c => c.classList.remove('highlight'));
    // Add highlight to clicked one
    card.classList.add('highlight');
  });
});

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Form default submit stop chesamu

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset(); // Empty form fields
        document.getElementById("successMsg").style.display = "block"; // Show success msg
    } else {
        alert("❌ Message not sent. Please try again.");
    }
});




