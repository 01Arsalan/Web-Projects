
let count = 0

function inc(){
    count=count+1
    document.getElementById("holder").innerText = count
}
console.log(count)//only visible in dev tools console

let holderEl= document.getElementById("holder")
function  reset(){
    console.log("Reset function called"); /* to check if function. is being called */
    count=0
    holderEl.innerText=count
}

p1=document.getElementById("s1")
p2=document.getElementById("s2")

function save(){
    if(count<p2.innerText || p1.innerText==0){
        p1.innerText=count
        p2.innerText=0
    }
    if(count>p1.innerText){
        p2.innerText=count
    }
    
    
}