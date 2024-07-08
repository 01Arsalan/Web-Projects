document.getElementById("sub").addEventListener("click",function(){
    var error=document.getElementById("message")
    error.innerText="Sorry! Purchase can not be made."
})
document.getElementById("close").addEventListener("click",function(){
    var error=document.getElementById("message")
    error.innerText=""
})