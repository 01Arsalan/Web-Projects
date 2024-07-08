const model=document.querySelector('.model')
const button=document.querySelector(".button")
button.addEventListener('click',()=>{
    model.style.display="flex"
})
document.querySelector('.icon').addEventListener("click",()=>{
    model.style.display="none"
})
window.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target!==button){
        model.style.display="none"
    
    }
    
})