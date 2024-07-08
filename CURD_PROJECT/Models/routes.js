// defining routes with error handling

const express = require('express');
const router = express.Router();

const Product = require("./product")
const {appError,wrapAsync}= require("./utilities")


router.get("/products", wrapAsync(async (req, res) => {
    const { category } = req.query;
    let products = category === undefined ? await Product.find({}) : await Product.find({ category: category })
    res.render("Products/index", { products })
}))

//keep this get req. after id, otherwise id route will be selected
router.get("/products/new", (req, res) => {
    //throwing(simulating) a error -- non async
    // throw new appError(303,"custom error thrown.")
    res.render("Products/new")
})


// saving data into DB (eror handling with try, catch)
//with async ()'s, we need to pass the error into "next()"
router.post("/products", async (req, res,next) => {
    try{
    const newP = new Product(req.body)
    await newP.save()
    res.redirect(`/products/${newP.id}`)
    }catch(err){
        next(err)
    }
})


//retrieving data from DB 
// another way with utility function
router.get("/products/:id", wrapAsync(async (req, res,next) => {
    const { id } = req.params
        const product = await Product.findById(id)
            if(!product){
                console.log(product)
                throw new appError(404,"Product not found.")
            }   
    res.render("Products/show", { product })
}))


//retrieving an element and putting it into edit form data
router.get("/products/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render("Products/edit", { product })
}))

//receieving data from edit form and saving it to DB as updated version and redirtecting to show page
router.put("/products/:id", wrapAsync(async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${id}`)
}))

//deleting elements form database
router.delete("/products/:id", wrapAsync(async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect(`/products`)
}))

module.exports=router