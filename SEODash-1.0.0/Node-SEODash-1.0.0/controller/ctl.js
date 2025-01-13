const { Schema } = require("mongoose")

module.exports.indexPage = (req,res)=>{
    res.render('index')
}
module.exports.formPage=(req,res)=>{
    res.render('form')
}
module.exports.tablePage=(req,res)=>{
    res.render('table')
}
module.exports.addData= async(req,res)=>{
    req.body.image = req.file.path
    await Schema.create(req.body).then((data)=>{
        console.log(data)
        res.redirect('/formPage')
    })

}