const navIcon = document.querySelector(".cross")
const hamburger = document.getElementById("hamburger")
const navbar = document.querySelector(".navbar")
navIcon.addEventListener("click", (e) => {
  navbar.style.display = "none"
  hamburger.style.display = "block"
  enableScroll()
})

hamburger.addEventListener("click", () => {
  navbar.style.display = "block"
  hamburger.style.display = "none"
  disableScroll()
})

function disableScroll() {
  scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function () { };
}