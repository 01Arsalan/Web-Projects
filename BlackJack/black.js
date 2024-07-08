
let text=["Would u like new cards?","WooHoo! You Won","Sorry! You Lost"]
let c1=0,c2=0
let bt1=document.getElementById("b1")
let bt2=document.getElementById("b2")

let mesage=document.getElementById("message")
let cards=document.getElementById("card")
let score=document.getElementById("total")

//objects
let player={
    name1 :"Arsalan",
    points :"120$",

    print: function(){
        document.getElementById("player-score").innerText= player.name1+" - "+player.points
    }
}

function start(){
    mesage.innerText=text[0]
    c1=0
    c2=0
    cards.innerText="Cards : "+c1+" - "+c2
    score.innerText="Total : 0"
    bt2.onclick=render   //activates new cards

    document.getElementById("player-score").innerText=""
}
function rand(){
    c1= Math.floor(Math.random()*13)+1
    c2= Math.floor(Math.random()*13)+1
}
function render(){
    rand()
    document.getElementById("card").innerText="Cards : "+c1+" - "+c2
    evaluate()
}
function evaluate(){
    score.innerText="Total : "+(c1+c2)
    if((c1+c2)==21){
        mesage.innerText=text[1]

        player.print() //uses object

        bt2.onclick=function(){}//disables button
    }
    else if((c1+c2)>21){
        mesage.innerText=text[2]
        bt2.onclick=function(){}//disables button
    }
}


//css manipulatiion

bt1.addEventListener("mouseover",function(){
    bt1.style.background="red"
})
bt1.addEventListener("mouseout",function(){
    bt1.style.background="black"
})
bt2.addEventListener("mouseover",function(){
    bt2.style.background="red"
})
bt2.addEventListener("mouseout",function(){
    bt2.style.background="black"
})