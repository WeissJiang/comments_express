const boxes = document.querySelectorAll('.box')

showBoxes()

window.addEventListener('scroll', showBoxes)

function showBoxes () {
  const triggleHeight = window.innerHeight * (4 / 5)

  boxes.forEach(function (box) {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggleHeight) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
