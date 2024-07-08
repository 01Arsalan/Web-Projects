let questions=document.querySelectorAll(".question")

questions.forEach(function(question){
    let btn=question.querySelector(".btn")
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(question!==item){
                item.classList.remove("show_el")
            }
        })
        question.classList.toggle("show_el")
        btn.classList.toggle("btn_hide")
        vis(btn)
    })
})

function vis(hi_btn){
    let buttons=document.querySelectorAll(".btn")
    buttons.forEach(function(btn){
        if(btn!==hi_btn){
            btn.classList.remove("btn_hide")
        }
    })
}

//closure????