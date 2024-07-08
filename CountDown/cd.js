const displays = document.querySelectorAll(".time")
const result= document.querySelector(".result")

const targetDate= new Date(2023,9,1,11,30,0)
const target=targetDate.getTime()

function display(){
    let presentDate=new Date().getTime()

    const day = 24*60*60*1000
    const hour = 60*60*1000
    const mintute = 60*1000

    let remainingTime= target-presentDate
    
    let rDays=Math.floor(remainingTime/day)
    let rHours=Math.floor((remainingTime%day)/hour)
    let rMinutes=Math.floor(((remainingTime%day)%hour)/mintute)
    let rSeconds=Math.floor((((remainingTime%day)%hour)%mintute)/1000)
    
    let data=[rDays,rHours,rMinutes,rSeconds]

    let total=rDays+rHours+rMinutes+rSeconds
    
    if(total>-1){
        displays.forEach((dis,index)=>{
            if(data[index]<10){
                data[index]=`0${data[index]}`
            }
            dis.textContent=data[index]
        })
    }
    else{
        clearInterval(clear)
        result.style.display="block";
    }
    
    
}

const clear=setInterval(display,1000)

display()



