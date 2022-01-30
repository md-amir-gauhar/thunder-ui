const floatingBtn = document.querySelector('.floating')
const floatingPreview = document.querySelector('.floating-preview')

floatingPreview.addEventListener('click', () => {
  floatingBtn.style.display = "block"
})

floatingBtn.addEventListener('click', e => {
  e.target.style.display = "none"
})