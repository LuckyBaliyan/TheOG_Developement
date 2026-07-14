//before the error handling we use try catch and next parameter to handle error from our controllers
//after using error handling we now can't need to use multiple try catch and even the error won't goes to
//the buisness loigc i.e controllers

//before
/**
 * export async function registerUser(req, res, next){
 *   try{
 *       thorw new Error("Encounter an error while regsitering new user!");
 *    }
 *    catch(err){
 *        next(err);
 *   }
 * }
*/

//after
export async function registerUser(req, res, next){
    //throw new Error("Encounter an error while registering new user!");
    //const error = new Error("password is too weak!");
    //error.statusCode = 400;

    const error = new Error("User is already exisist with the same userName!")
    error.statusCode = 409 //conflict
    next(error);

};



export async function  registerUser2(req, res, next){
    res.status(200).json({
        message:"User Registered Sucessfully!"
    })
};


