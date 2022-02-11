const toggleBtn = document.querySelector(".btn-toggle")
const modalContainer = document.querySelector('.modal-container')

toggleBtn.addEventListener('click', () => {
  modalContainer.classList.remove("hidden")
})

document.addEventListener('click', e => {
  if(e.target.classList.contains("modal-container")) {
    modalContainer.classList.add("hidden")
  }
})