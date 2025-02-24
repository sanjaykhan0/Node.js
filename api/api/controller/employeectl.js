const eschema=require("../model/employeeschema")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.loginemployee=async(req,res)=>{
    let user = await eschema.findOne({email:req.body.email})    
    if(user){
        if(await bcrypt.compare(req.body.password,user.password) ){
            let token = jwt.sign({userdata:user},"karan",{ expiresIn:"1h"});
            token&&
            res.status(200).json({msg:"EMPLOYEE LOGIN SUCESSFULLY.......!",token:token})
            console.log(token);
        }else{
            res.status(400).json({msg:"PASSWORD WRONG......!"})
        }
    }else{
        res.status(400).json({msg:"EMPLOYEE NOT FOUND........!"})
    }
}

module.exports.viewallemployee=async(req,res)=>{
    let data = await eschema.find({})
    data && res.status(200).json({msg:"VIEW ALL EMPLOYEIES ........! ",data:data})
}

module.exports.changeEmployeePass=async(req,res)=>{
    let data = await eschema.findById(req.query.id)

    if(await bcrypt.compare(req.body.oldpass,data.password)){
        if (req.body.newpass==req.body.confirmpass) {
            let pwd=await bcrypt.hash(req.body.newpass,10)
            await eschema.findByIdAndUpdate(data.id,{password:pwd})
        res.status(200).json({msg:"Password Change Sucessfully.........!"})   
    
        } else {
        res.status(200).json({msg:"Your New Password And Confirm Password Are Same.........!"})   
        }
    
    }else{
        res.status(200).json({msg:"Your Old Password Is Incorrect.........!"})
    }
}