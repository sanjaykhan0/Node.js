const mschema=require("../model/managerschema")
const eschema= require("../model/employeeschema")
const bcrypt=require('bcryptjs')
const jwt = require("jsonwebtoken")

module.exports.viewmanager=async(req,res)=>{
    let data = await mschema.find({})
    data && res.status(200).json({msg:"VIEW ALL MANAGER.........! ",data:data})
}

module.exports.loginmanager=async(req,res)=>{
    let user = await mschema.findOne({email:req.body.email})    
    if(user){
        if(await bcrypt.compare(req.body.password,user.password) ){
            let token = jwt.sign({userdata:user},"karan",{ expiresIn:"1h"});
            token&&
            res.status(200).json({msg:"MANAGER LOGIN SUCESSFULLY.......!",token:token})
            console.log(token);
        }else{
            res.status(400).json({msg:"PASSWORD WRONG......!"})
        }
    }else{
        res.status(400).json({msg:"MANAGER NOT FOUND........!"})
    }
}

module.exports.addemployee=async(req,res)=>{
    let user= await eschema.findOne({email:req.body.email})
    if(user){
        return res.status(200).json({msg:"EMPLOYEE ALREDY EXISTED.......!"})
    }
    req.body.password=await bcrypt.hash(req.body.password,10)
    let data = await eschema.create(req.body)
    data&&res.status(200).json({msg:"EMPLOPYEE ADDED SUCESSFULLY....!"})
}
module.exports.viewallemployee=async(req,res)=>{
    let data = await eschema.find({})
    data && res.status(200).json({msg:"VIEW ALL EMPLOYEIES ........! ",data:data})
}
module.exports.changeManagerPass=async(req,res)=>{
    console.log(req.query.id);
    let data = await mschema.findById(req.query.id)

    if(await bcrypt.compare(req.body.oldpass,data.password)){
        if (req.body.newpass==req.body.confirmpass) {
            let pwd=await bcrypt.hash(req.body.newpass,10)
            await mschema.findByIdAndUpdate(data.id,{password:pwd})
        res.status(200).json({msg:"Password Change Sucessfully.........!"})   
    
        } else {
        res.status(200).json({msg:"Your New Password And Confirm Password Are Same.........!"})   
        }
    
    }else{
        res.status(200).json({msg:"Your Old Password Is Incorrect.........!"})
    }
    
}