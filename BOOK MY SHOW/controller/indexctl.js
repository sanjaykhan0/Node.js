const AdminSchema = require("../model/schema");
const fs = require("fs")

module.exports.HomePage = async(req,res) =>{
    let data = await AdminSchema.find({});
    res.render("home",{data});
}

module.exports.AddPage = async(req,res)=>{
    let data = AdminSchema.find({});
    res.render("addmovie");
}

module.exports.AddData = async(req,res)=>{
    req.body.image = req.file.path
    let data = await AdminSchema.create(req.body);
    data && res.redirect("/"); 
}
module.exports.DeleteData = async(req,res)=>{
    let singleData = await AdminSchema.findById(req.query.id)
   fs.unlinkSync(singleData.image)
    let data = await AdminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");  
}
module.exports.EditPage = async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id)
    data && res.render("editmovie",{data});
}
module.exports.UpdateData = async(req,res)=>{
    let img = ""
    let singleData = await AdminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/");     
}
