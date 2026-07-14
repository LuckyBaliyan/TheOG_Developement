//This middleWare is used to handle the structure of response from html to json caused by error
// so that the app won't crashed

//the status code will be passed via next(err) from the controller
function errorHandler(err, req, res, next){
    res.status(err.statusCode).json({
      message:err.message,
      details:err.dets,
      stack:err.stack
      //tells exactly where the error came not used for production
      //but we can tweak this is to send or not by usign a env variable if it is development then
      //send stack else i.e deployed don't send 
    })
}

export default errorHandler;