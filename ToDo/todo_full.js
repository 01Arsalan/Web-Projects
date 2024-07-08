//selectors

const form = document.querySelector('.form')
const input = document.querySelector(".input")
const list_container = document.querySelector('.list')
const message = document.querySelector(".message")
const clear_btn = document.querySelector(".clear_list")


//action selector  (Edit || New)
let edit = false
let editElement;
let Element;


//Action Listeners

//submit
form.addEventListener("submit", addItem)

//clear
clear_btn.addEventListener("click", clearList)

//Functions

//add item
function addItem(e) {
    e.preventDefault()
    let item = input.value
    input.value = ""
    let id = new Date().getTime().toString()
    if (item != "") {
        if (edit) {
            Element.children[0].textContent = item
            edit = false
            editIntoLocalHost(Element.dataset.id, item)
        } else {
            let element = document.createElement("article")
            element.classList.add("item")

            let attr = document.createAttribute("data-id")
            attr.value = id
            element.setAttributeNode(attr)

            element.innerHTML = `
        <p class="item_name">${item}</p>
        <div class="edit_delete">
            <button class="ED edit"><img src="img/Edit_icon_(the_Noun_Project_30184).svg.png" alt="" width="14"></button>
            <button class="ED delete"><img src="img/542724.png" alt="" width="14"></button>
        </div>
        `
            list_container.appendChild(element)

            //adding listeners
            element.querySelector(".delete").addEventListener("click", removeItem)
            element.querySelector(".edit").addEventListener("click", editItem)

            addToLocalStorage(id, item)
        }
        clear_btn.classList.add("showClearBtn")
        showMessage(true)
    }
    else {
        showMessage(false)
    }
}

//remove item
function removeItem(e) {
    let element = e.currentTarget.parentElement.parentElement
    let id = element.dataset.id

    list_container.removeChild(element)

    if (list_container.childElementCount == 0) {
        clear_btn.classList.remove("showClearBtn")
    }
    showMessage(true)
    removeFromLocalStorage(id)
}

//edit item
function editItem(e) {
    let element = e.currentTarget.parentElement.parentElement
    let id = element.dataset.id
    editElement = e.currentTarget.parentElement.previousElementSibling
    /* editElement=element.children[0] */ // same as previous line
    Element = element

    input.focus()
    input.value = editElement.textContent

    edit = true

}

//clear list
function clearList() {
    list_container.innerHTML = ""
    clear_btn.classList.remove("showClearBtn")
    showMessage(true)
    localStorage.removeItem("key")
}

//messages
function showMessage(success) {
    if (success == true) {
        message.style.background = "rgb(14, 187, 17)"
        message.style.color = "rgb(7, 56, 2)"
        message.textContent = "Operation Performed."
    }
    else {
        message.style.background = "rgb(241, 86, 86)"
        message.style.color = "rgb(87, 7, 3)"
        message.textContent = "you must enter item name!"
    }
    message.classList.add("show_message")
    setTimeout(() => {
        message.classList.remove("show_message")
    }, 1200);
}



//************* Local Storage *************/

function addToLocalStorage(id, value) {
    const item = { id, value }
    let itemList = getLocalStorage()
    itemList.push(item)
    localStorage.setItem("key", JSON.stringify(itemList))
}

function getLocalStorage() {
    return localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : []
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage()

    items = items.filter((i) => {
        if (i.id !== id) {
            return i
        }
    })
    localStorage.setItem("key", JSON.stringify(items))
}

function editIntoLocalHost(id, value) {
    items = getLocalStorage()

    items = items.map((i) => {
        if (i.id == id) {
            i.value = value
            console.log("k")
        }
        return i
    })
    localStorage.setItem("key", JSON.stringify(items))
}

function clearLocalStorage() {
    items = getLocalStorage()

}

//setting refresh values

window.addEventListener("DOMContentLoaded", () => {
    items = getLocalStorage()

    items.map((i) => {
        let element = document.createElement("article")
        element.classList.add("item")

        let attr = document.createAttribute("data-id")
        attr.value = i.id
        element.setAttributeNode(attr)

        element.innerHTML = `
        <p class="item_name">${i.value}</p>
        <div class="edit_delete">
            <button class="ED edit"><img src="img/Edit_icon_(the_Noun_Project_30184).svg.png" alt="" width="14"></button>
            <button class="ED delete"><img src="img/542724.png" alt="" width="14"></button>
        </div>
        `
        list_container.appendChild(element)

        //adding listeners
        element.querySelector(".delete").addEventListener("click", removeItem)
        element.querySelector(".edit").addEventListener("click", editItem)
    })
    if(items.length>0){
        clear_btn.classList.add("showClearBtn")
    }

})




// localStorage API

// setItem
// getitem
// removeltem
// To save as strings // localStorage.setItem("key", JSON.stringify( ["item","item 2"));
// const item = JSON. parse (localStorage.getItem("key")) ;
// console. log (item) ;
// localStorage. removeItem("key");


//html injection

/* <article class="item">
    <p class="item_name"></p>
    <div class="edit_delete">
        <button class="ED edit"><img src="img/Edit_icon_(the_Noun_Project_30184).svg.png" alt="" width="14"></button>
        <button class="ED delete"><img src="img/542724.png" alt="" width="14"></button>
    </div>
</article> */