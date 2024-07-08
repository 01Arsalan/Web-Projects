let open_btn=document.querySelector(".open")
let close_btn=document.querySelector(".close")
const modal=document.querySelector(".modal")
let icon=document.querySelector(".icon")

open_btn.addEventListener("click",function(){
    modal.style.display="flex"
    setTimeout(() => {
        icon.style.transform="rotate(720deg)"
    }, 50);

})
close_btn.addEventListener("click",function(){
    modal.style.display="none"
    icon.style.transform="rotate(0deg)"
})
