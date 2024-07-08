const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const methodOverride = require("method-override")

const route=require("./Models/routes")
const Product = require("./Models/product")

mongoose.connect('mongodb://127.0.0.1:27017/FarmStandDB')
    .then(() => {
        console.log("connected.")
    })
    .catch((err) => {
        console.log("Error : ", err)
    })



const app = express()
//joining  views path to views folder
app.set("views", path.join(__dirname, "/views"))

app.set("view engine", "ejs")

//It parses incoming requests with URL-encoded payloads.
app.use(express.urlencoded({ extended: true }))

// middle-ware to handle unconventional verbs(i.e patch,put,delete etc)
app.use(methodOverride('_method'))



//mounting route on express app.
app.use("/",route)


//error handling
app.use((err,req,res,next)=>{
    const {status=301,message="no message received."}=err
    //err.name will come from mongoDB
    res.status(status).send(`Message : ${message}!----------${err.name}`)
})


app.listen(3000, () => {
    console.log("App is Listening")
})







