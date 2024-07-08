var num1=5,num2=5

document.getElementById("s1").innerText=num1
document.getElementById("s2").innerText=num2

function add(){
    document.getElementById("result").innerText=num1+num2
}
function sub(){
    document.getElementById("result").innerText=num1-num2
}
function div(){
    document.getElementById("result").innerText=num1/num2
}
function mul(){
    document.getElementById("result").innerText=num1*num2
}