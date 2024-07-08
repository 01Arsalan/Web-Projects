let video=document.querySelector(".video-container")
let button=document.querySelector(".btn")

function play_pause(){
    if(button.classList.contains("view-start")){
        button.classList.toggle("view-stop")
        button.classList.toggle("view-start")
        video.pause();
    }
    else{
        button.classList.toggle("view-stop")
        button.classList.toggle("view-start")
        video.play()
    }
} 


let preloader=document.querySelector(".preloader")
//The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
window.addEventListener("load",()=>{
    preloader.classList.remove("pre-view")
})