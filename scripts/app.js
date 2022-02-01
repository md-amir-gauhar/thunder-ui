const navIcon = document.querySelector(".cross")
const hamburger = document.getElementById("hamburger")
const navbar = document.querySelector(".navbar")
navIcon.addEventListener("click", (e) => {
  navbar.style.display = "none"
  hamburger.style.display = "block"
})

hamburger.addEventListener("click", () => {
  navbar.style.display = "block"
  hamburger.style.display = "none"
})