const darkBtn = document.querySelector(".dark-btn")
const lightDarkBtn = document.querySelector(".fa-moon")

console.log(lightDarkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
  if(lightDarkBtn.classList.contains("fa-moon")){
    lightDarkBtn.classList.remove("fa-moon")
    lightDarkBtn.classList.add("fa-sun")
  } else {
    lightDarkBtn.classList.remove("fa-sun")
    lightDarkBtn.classList.add("fa-moon")
  }
})
