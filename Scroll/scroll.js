let nav = document.querySelector(".links")
let nav_container = document.querySelector(".nav-container")
let button = document.querySelector(".to-top")
let icon = document.querySelector(".btn")
let header=document.querySelector(".hdr")

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
let isvisible = false
icon.addEventListener("click", () => {
    if (isvisible) {
        nav.classList.toggle("show")
        setTimeout(() => {
            nav_container.classList.toggle("show")
        }, 400);

    } else {
        nav_container.classList.toggle("show")
        setTimeout(() => {
            nav.classList.toggle("show")
        }, 50);
    }
    isvisible = !isvisible

})

let media_query=window.matchMedia('(min-width: 700px)').addListener(()=>{
    if(isvisible){
        nav.classList.toggle("show")
        nav_container.classList.toggle("show")
        isvisible=!isvisible
    }  
})


window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
  
    if (scrollY > 90) {
      header.style.backgroundColor = 'black';
      header.style.transition="all .3s linear"
      header.style.position="fixed"
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
  

  /* setting dynamic date */

const date=document.getElementById("date")
date.innerHTML=new Date().getFullYear();
