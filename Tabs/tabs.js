
let data=[
    "Throughout history, humanity has experienced remarkable events and transformations, shaping civilizations and cultures. Studying history provides valuable insights into our past, helping us learn from it.",
    "A compelling vision serves as a guiding light for individuals and organizations. It inspires innovation and drives progress, offering a clear picture of the desired future state and the path to achieve it.",
    "Setting and pursuing meaningful goals is fundamental to personal and professional growth. Goals provide direction, motivation, and a sense of purpose, empowering individuals and teams to achieve greatness."
]

const buttons= document.querySelectorAll(".buttons")
const info=document.querySelector(".info")
const title=document.querySelector(".title")


buttons.forEach((btn)=>{
btn.addEventListener("click",()=>{
    btn.classList.add("clicked")
    buttons.forEach((unclicked)=>{
        if(unclicked!=btn){
            unclicked.classList.remove("clicked")
        }
    })
    if(btn.textContent=="History"){
        info.textContent=data[0]
        title.textContent="History"
    }
    if(btn.textContent=="Vision"){
        info.textContent=data[1]
        title.textContent="Vision"
    }
    if(btn.textContent=="Goals"){
        info.textContent=data[2]
        title.textContent="Goals"
    }

})
})