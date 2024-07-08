const score1 = document.querySelector(".player-1")
const score2 = document.querySelector(".player-2")

const limit = document.querySelector("#limit")

const btns = document.querySelectorAll(".btn")
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.id == "btn1") {
            score1.textContent = parseInt(score1.textContent) + 1
        }
        else if (e.target.id == "btn2") {
            score2.textContent = parseInt(score2.textContent) + 1
        }
        else {
            resetData()
        }
        if (parseInt(score1.textContent) == limit.value || parseInt(score2.textContent) == limit.value) {
            if (parseInt(score1.textContent) == limit.value) {
                changeColor(score1, "green")
                changeColor(score2, "red")
            }
            else if (parseInt(score2.textContent) == limit.value) {
                changeColor(score1, "red")
                changeColor(score2, "green")
            }
            btns[0].classList.add("disabled")
            btns[1].classList.add("disabled")
        }
    })
})


function changeColor(player, color) {
    player.style.color = color
}
function resetData() {
    score1.textContent = "0"
    score2.textContent = "0"
    score1.style.color = "black"
    score2.style.color = "black"
    btns[0].classList.remove("disabled")
    btns[1].classList.remove("disabled")
}