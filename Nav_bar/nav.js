let button = document.querySelector(".nav_button")
let list = document.querySelector(".list")
let header = document.querySelector(".head")

let listOpen = false
button.addEventListener("click", function () {
    if (listOpen) {
        button.style.transform = "rotate(180deg)"
        list.style.animation = "nav-up .5s ease-in forwards"
        list.style.transformOrigin = "center top"
        /*list.classList.add("nav-up"); */
        /* can be used to triger animation, classList can be used to check which classes does an element(contains) have and (add) classes or (remove) them  */
        /* links.classList.toggle ("link-name"); *///if link is present, it will remove it. if not, it will add to the element
        setTimeout(() => {
            list.style.display = "none"
        }, 500);
    } else {
        button.style.transform = "rotate(90deg)"
        list.style.animation = "nav-down .5s ease-in"
        list.style.transformOrigin = "top center"
        list.style.display = "block"
    }
    listOpen = !listOpen
})


const mediaQuery = window.matchMedia("(min-width: 900px)");
function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        list.style.display = 'flex';
        list.style.animation = "none"
        if (listOpen) {
            button.style.transform = "rotate(180deg)"
            listOpen = !listOpen
        }
    } else {
        list.style.display = 'none';
    }
}

handleMediaQueryChange(mediaQuery); 
mediaQuery.addListener(handleMediaQueryChange);


