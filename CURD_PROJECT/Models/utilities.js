class appError extends Error{
    constructor(status,message){
        super()
        this.status=status
        this.message=message
        console.log("error obj created.")
    }
}
//this is a (async error handling utility), it takes a async fun() as argunent
// and retuens a function that executes the function passed to it, with a 
//"catch" attached to it.
function wrapAsync(fn){
    return function (req,res,next){
        fn(req,res,next).catch(e=>next(e))
    }
}


module.exports={appError:appError,wrapAsync:wrapAsync}