var open_btn = document.querySelector(".sidebar-toggle")
var close_btn = document.querySelector(".close-btn")
var side_bar = document.querySelector(".sidebar")
var close_icon = document.querySelector(".icon")

close_btn.addEventListener("click", function () {
    side_bar.style.animation = "slide-in .5s ease-in forwards"
    side_bar.style.transformOrigin = "center left"
    setTimeout(() => {
        side_bar.style.display = "none"
        close_icon.classList.toggle("icon-c")
        open_btn.style.display = "block"
    }, 500);
})
open_btn.addEventListener("click", function () {
    side_bar.style.animation = "slide-out .5s ease-in forwards"
    side_bar.style.transformOrigin = "left center"
    side_bar.style.display = "flex"
    open_btn.style.display = "none"
    close_icon.classList.toggle("icon-c")
})