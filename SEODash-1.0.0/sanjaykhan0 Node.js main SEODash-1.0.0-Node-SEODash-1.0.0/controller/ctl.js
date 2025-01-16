const Schema  = require("../model/schema");
const fs = require("fs")

module.exports.indexPage = (req,res)=>{
    res.render('index')
}
module.exports.formPage=(req,res)=>{
    res.render('form')
}
module.exports.tablePage=async(req,res)=>{
    await Schema.find({}).then((data)=>{
        res.render('table',{data})

    })
}
module.exports.addData= async(req,res)=>{
    req.body.image = req.file.path
    await Schema.create(req.body).then((data)=>{
        console.log(data)
        res.redirect('/formPage')
    })

}

module.exports.deleteData=async(req,res)=>{
    await Schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.redirect('/tablePage')
    })
}

module.exports.editData=async(req,res)=>{
    console.log(req.query.id)
    await Schema.findById(req.query.id).then((data)=>{
        // console.log(data.id+"edit")
        res.render("EditForm",{data})
    })
}
module.exports.updateData=async(req,res)=>{
    let img = ""
    // console.log("edit",req.body.id)
    let singleData =  await Schema.findById(req.body.id)
    req.file?img=req.file.path:img = singleData
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    await Schema.findByIdAndUpdate(req.body.id,req.body).then((data)=>{
        res.redirect('/tablePage')
    })
}