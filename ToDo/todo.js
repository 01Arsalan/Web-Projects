const form = document.querySelector('.form')
const input = document.querySelector(".input")
const list_container = document.querySelector('.list')
const error_message = document.querySelector(".error")
const clear_btn = document.querySelector(".clear_list")

let edit_item
let edit = false

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (edit) {
        edit_item.textContent = input.value
        input.value = ""
        edit = false
    } else {
        let item = input.value
        input.value = ""

        if (item.length === 0) {
            console.log("dsfs")
            error_message.classList.add("show_error")
            setTimeout(() => {
                error_message.classList.remove("show_error")
            }, 1500);
        }
        else {
            //ading items
            list_container.innerHTML += `
            <article class="item">
                <p class="item_name">${item}</p>
                <div class="edit_delete">
                    <button class="ED edit"><img src="img/Edit_icon_(the_Noun_Project_30184).svg.png" alt="" width="14"></button>
                    <button class="ED delete"><img src="img/542724.png" alt="" width="14"></button>
                </div>
            </article> 
        `
        clear_btn.classList.add("showClearBtn")
        }
    }
    putListenerDelete()
    putListenerEdit()
})


clear_btn.addEventListener("click", () => {
    list_container.innerHTML = ""
    input.value = ""
    clear_btn.classList.remove("showClearBtn")
})


function putListenerDelete() {
    const delete_btns = document.querySelectorAll(`.delete`)
    delete_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let item = btn.closest(".edit_delete").closest(".item")
            item.remove()
            if(list_container.childElementCount==0){
                clear_btn.classList.remove("showClearBtn")
            }
        })
    })
}

function putListenerEdit() {
    const edit_btns = document.querySelectorAll(".edit")
    edit_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            input.focus()
            const item = btn.closest(".edit_delete").closest(".item")
            let itemName = item.querySelector(".item_name")
            input.value=itemName.textContent
            edit_item = itemName
            edit = true
        })
    })
}



/* <article class="item">
    <p class="item_name"></p>
    <div class="edit_delete">
        <button class="ED"><img src="img/Edit_icon_(the_Noun_Project_30184).svg.png" alt="" width="14"></button>
        <button class="ED"><img src="img/542724.png" alt="" width="14"></button>
    </div>
</article> */