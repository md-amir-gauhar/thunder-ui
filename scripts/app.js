const btnDown = document.getElementById("down-btn")
const btnUp = document.getElementById("up-btn")
const nav = document.querySelector(".list")

btnDown.addEventListener('click', () => {
  nav.style.display = "block"
  btnDown.style.display = "none"
  btnUp.style.display = "block"
})

btnUp.addEventListener('click', () => {
  nav.style.display = "none"
  btnDown.style.display = "block"
  btnUp.style.display = "none"
})