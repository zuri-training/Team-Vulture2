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


/*const dropdownBtn = document.getElementById("btnn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });

*/
