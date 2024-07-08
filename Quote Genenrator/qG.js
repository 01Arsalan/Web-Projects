const quotes = [
    {
        quote: "Injustice anywhere is a threat to justice everywhere.",
        writer: "Martin Luther King Jr."
    },
    {
        quote: "The only way to deal with the British bully was to show that we were not afraid to die.",
        writer: "Mahatma Gandhi"
    },
    {
        quote: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.",
        writer: "Ella Baker"
    },
    {
        quote: "We shall not flag or fail. We shall go on to the end.",
        writer: "Winston Churchill"
    },
    {
        quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        writer: "Kobe Bryant"
    }
];

const quote=document.querySelector(".quote")
const writer=document.querySelector(".writer")

let i=0
document.querySelector(".button").addEventListener("click",()=>{
    quote.textContent='"'+quotes[i].quote+'"'
    writer.textContent=quotes[i].writer
    i++
    if(i==5){
        i=0
    }
})



