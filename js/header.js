//script to toggle the navbar
let navbar = document.querySelector(".nav-wrapper");
let bars = document.getElementById("bars");
let navLinks = document.querySelectorAll(".nav-link");

bars.addEventListener("click", () => {
  navbar.classList.toggle("active");
  bars.classList.toggle("active");
});

navLinks.forEach(n => n.addEventListener('click', () => {
  navbar.classList.toggle('active');
  bars.classList.toggle('active');
}))