const jwt = require("jsonwebtoken")

const userauth=(req,res,next)=>{
    let token=req.header("Authorization");
    if(!token){
        return res.status(200).json({msg:"TOKEN NOT FOUND........!"})
    }
    let newToken=token.slice(7,token.length)
    let decode=jwt.verify(newToken,"karan")
    req.user=decode;
    next();
}
module.exports=userauth;