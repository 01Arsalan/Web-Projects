// thiws file should only be executed once to populate the data-base

const mongoose=require("mongoose")
const Product=require("./product")

mongoose.connect('mongodb://127.0.0.1:27017/FarmStandDB')
    .then(() => {
        console.log("connected.")
    })
    .catch((err) => {
        console.log("Error : ", err)
    })

Product.insertMany([
    { name: "Apple", price: 2.49, category: "fruit" },
    { name: "Broccoli", price: 1.29, category: "vegetable" },
    { name: "Orange", price: 1.99, category: "fruit" },
    { name: "Carrot", price: 0.99, category: "vegetable" },
    { name: "Banana", price: 0.79, category: "fruit" },
    { name: "Spinach", price: 2.99, category: "vegetable" },
    { name: "Milk", price: 3.49, category: "dairy" },
    { name: "Strawberry", price: 3.99, category: "fruit" },
    { name: "Cucumber", price: 1.49, category: "vegetable" },
    { name: "Cheese", price: 4.99, category: "dairy" }
  ])
.then(data=>console.log("Data Saved Successfully.",data))
.catch(err=>console.log("Data save failed, error: ",err))