const subcategorySchema = require('../model/subcategorySchema')
const categorySchema = require('../model/categorySchema')
const fs = require('fs')

module.exports.addsubcat = async (req, res) => {
    await categorySchema.find({}).then((data) => {
      
        res.render('addsubcategory', { data })
    })
}
module.exports.addsubcategory = async (req,res)=>{
    await subcategorySchema.create(req.body).then(()=>{
       
        res.redirect('/subcategory/addsubcat')
    })
}

module.exports.viewsubcatgory = async (req,res) => {

  await subcategorySchema.find({}).populate("categoryid").then((data)=>{
    console.log(data)
    res.render('viewsubcatgory',{data})
  })   
}

module.exports.editsubcat = async (req,res)=>{
 await subcategorySchema.findById(req.query.id).then((data)=>{
 console.log(data)
res.render('editsubcat',{data})
 })
}

module.exports.deletesubcat = async (req,res)=>{
  console.log(req.query , "id is here")
  await subcategorySchema.findByIdAndDelete(req.query.id).then((data)=>{
    console.log(data)
 res.redirect('/subcategory/viewsubcatgory')
  })
 }