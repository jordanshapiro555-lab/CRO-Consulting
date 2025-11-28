document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
    toggle.setAttribute("aria-expanded", toggle.classList.contains("open"));
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        nav.classList.remove("open");
        toggle.classList.remove("open");
      }
    });
  });
});
