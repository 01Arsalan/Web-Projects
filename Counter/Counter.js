let count = document.querySelector(".count")
let button = document.querySelectorAll(".btn")
let value = 0

button.forEach(function (NodeList) {
/*     console.log(NodeList.textContent); *///to check the nodelist
    NodeList.addEventListener("click", function (event) {
/*         console.log(event.currentTarget.classList) *///to check the NodeList
        const styles = event.currentTarget.classList
        if (styles.contains("de")) {
            value--
        }
        else if (styles.contains("in")) {
            value++
        }
        else {
            value = 0
        }
        if (value < 0) {
            count.style.color = "red"
        }
        else if (value > 0) {
            count.style.color = "green"
        }
        else {
            count.style.color = "black"
        }
        count.textContent = value
    })
})
