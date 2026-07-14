//here we can exprot the array of validations to routes 
import {body, validationResult} from "express-validator";

export const registerValidator = [
    body("userName").isString().withMessage("Must be in String Fromat!"),
    body("email").isEmail().withMessage("must be in email format"),
    //we can also use custome method here to customise password requirnments more like using 
    //regex
    body("password").isLength({min:4, max:12}).withMessage("must be of 4 or upto 12 length"),

    //validation result func
    (req, res, next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            //that means we have to pass an error to our handler
            const err = new Error("Unexpected Error Detected while registering!");
            err.statusCode = 500,
            err.dets = errors.array();

            //pass to errorHandler
            next(err);
        }

        //else simply
        next();
    }
]