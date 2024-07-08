var body = document.body;
var insert = document.getElementById("inside")
let ishex = false

function backgroundcolor() {
    if (ishex) {
        insert.innerText = hex_generate()
        body.style.backgroundColor = insert.innerText
    }

}
let list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
function hex_generate() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        var j = Math.floor(Math.random() * 14) + 1
        color += list[j]
    }
    return color
}

function simple() {
    body.style.backgroundColor = "#dcdcdc"
    insert.textContent = "#dcdcdc"
    ishex = false
}
function hex() {
    ishex = true
}

document.getElementById("flip").addEventListener("upkey",function(event){
    if(event.key==="Enter"){
        backgroundcolor()
    }
})