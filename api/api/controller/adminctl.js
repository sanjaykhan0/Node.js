const aschema = require("../model/adminschema")
const mschema= require("../model/managerschema")
const eschema= require("../model/employeeschema")
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.allrecords=async(req,res)=>{
    let data = await aschema.find({})
    data && res.status(200).json({msg:"ALL ADMIN DETAIS.....!",data:data})
}

module.exports.addadmin=async(req,res)=>{
    let user= await aschema.findOne({email:req.body.email})
    if(user){
        return res.status(200).json({msg:"ADMIN ALREDY EXISTED.......!"})
    }
    req.body.password=await bcrypt.hash(req.body.password,10)
    let data = await aschema.create(req.body)
    console.log(data)
    data&&res.status(200).json({msg:"added....!"})
}

module.exports.loginadmin=async(req,res)=>{
    let user = await aschema.findOne({email:req.body.email})    
    if(user){
        if(await bcrypt.compare(req.body.password,user.password) ){
            let token = jwt.sign({userdata:user},"karan",{ expiresIn:"1h"});
            token&&
            res.status(200).json({msg:"ADMIN LOGIN SUCESSFULLY.......!",token:token})
            console.log(token);
        }else{
            res.status(400).json({msg:"PASSWORD WRONG......!"})
        }
    }else{
        res.status(400).json({msg:"ADMIN NOT FOUND........!"})
    }
}

module.exports.addmanager=async(req,res)=>{
    let user= await mschema.findOne({email:req.body.email})
    if(user){
        return res.status(200).json({msg:"MANAGER ALREDY EXISTED.......!"})
    }
    req.body.password=await bcrypt.hash(req.body.password,10)
    let data = await mschema.create(req.body)
    data&&res.status(200).json({msg:"added....!"})
}
module.exports.viewmanager=async(req,res)=>{
    let data = await mschema.find({})
    data && res.status(200).json({msg:"VIEW ALL MANAGER.........! ",data:data})
}

module.exports.viewallemployee=async(req,res)=>{
    let data = await eschema.find({})
    data && res.status(200).json({msg:"VIEW ALL EMPLOYEIES ........! ",data:data})
}

module.exports.deleteemployee=async(req,res)=>{
    await eschema.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.status(200).json({msg:"EMPLOYEE DELETED SUCESSFULLY ........!",data})
    })
}
module.exports.deletemanager=async(req,res)=>{
    await mschema.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.status(200).json({msg:"MANAGER DELETED SUCESSFULLY ........!",data})
    })
}

module.exports.changeadminpassword=async(req,res)=>{
    // console.log(req.query.id);
    let data = await aschema.findById(req.query.id)

if(await bcrypt.compare(req.body.oldpass,data.password)){
    if (req.body.newpass==req.body.confirmpass) {
        let pwd=await bcrypt.hash(req.body.newpass,10)
        await aschema.findByIdAndUpdate(data.id,{password:pwd})
    res.status(200).json({msg:"Password Change Sucessfully.........!"})   

    } else {
    res.status(200).json({msg:"Your New Password And Confirm Password Are Same.........!"})   
    }

}else{
    res.status(200).json({msg:"Your Old Password Is Incorrect.........!"})
}
   
    
    
}
