let data=[
    {
        img:"img/fake-people-and-fake-friends-quotes-featured-1140x760.jpg.webp",
        Name:"Arsalan",
        title:"Web Dev.",
        content:"Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites."
    },
    {
        img:"img/05-12-21-happy-people.jpg",
        Name:"Adil",
        title:"Designer",
        content:"Graphic design combines art and technology and graphic designers use a variety of design elements and techniques to create distinctive visuals for clients and companies. A graphic designer can work with print or digital media, and designs can be accomplished by hand or using computer software."
    },
    {
        img:"img/Chris-Pratt.jpg.avif",
        Name:"Asif",
        title:"Developer",
        content:"A software developer is a person or company engaged in a software development process, including research, design, programming, testing, and other facets of creating computer software. Other job titles for people with similar meanings include programmer, software analyst, or software engineer. "
        
        
    },
    {
        img:"img/Africa-2.png",
        Name:"Tej",
        title:"Manager",
        content:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed tour dollar toast everyday ca"
    }
]
let img=document.getElementById("img")
let Name=document.getElementById("name")
let title=document.getElementById("position")
let content=document.getElementById("detail")

let button=document.querySelectorAll(".btn")

//cahnges the data
let item=0
function change(){
    img.src=data[item].img
    Name.innerText=data[item].Name
    title.innerText=data[item].title
    content.textContent=data[item].content
}

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    change()
  });
  

button.forEach(function(Nodelist){
    Nodelist.addEventListener("click",function(event){
        const style=event.currentTarget.classList
        if(style.contains("prev")){
            item++
            if(item==4){
                item=0
            }
            change()
        }
        else{
            item--
            if(item<0){
                item=3
            }
            change()
        }
    })
})

function suprise(){
    var random=Math.floor(Math.random()*4)
    img.src=data[random].img
    Name.innerText=data[random].Name
    title.innerText=data[random].title
    content.textContent=data[random].content
}