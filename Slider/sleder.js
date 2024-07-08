const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let position = 0

window.addEventListener("DOMContentLoaded", () => {
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`
    })
})


prevBtn.addEventListener("click", () => {
    if (position == 0) {
        position = 3
    }
    else {
        position--
    }
    slider()

})
nextBtn.addEventListener("click", () => {
    if (position == 3) {
        position = 0
    }
    else {
        position++
    }
    slider()
})

function slider() {
    slides.forEach((slide,) => {
        slide.style.transform = `translateX(-${position * 100}%)`
    })
}