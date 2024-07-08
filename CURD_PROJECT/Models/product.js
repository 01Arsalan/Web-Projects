// Schema for DB is created here and exported into index.js file to use

const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Missed"]
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        lowercasse:true,
        enum:["fruit","vegetable","dairy"]
    }
})

const Product=mongoose.model('Product',productSchema)

module.exports=Product