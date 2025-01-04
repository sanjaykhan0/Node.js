

const express = require('express')
const port = 2003

const app = express()
const db = require("./config/db")
const schema = require("./model/Schema")

// let Book = [

// ]
app.set('view engine','ejs')
app.use(express.urlencoded())

app.get('/',async(req,res)=>{
    await schema.find({}).then((data)=>{

        res.render("index",{data})
    })
    // res.render("index",{Book})
})
app.post("/addData",async(req,res)=>{
    // console.log(req.body)
    // req.body.id = String(Date.now()) 
    // Book.push(req.body)
    // res.redirect("/")
    await schema.create(req.body).then((data)=>{
        res.redirect("/")
    })

})
app.get("/deleteData",async(req,res)=>{
    // console.log(req.query.id)
    // Book = Book.filter((e)=>e.id !== req.query.id)
    // res.redirect("/")
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })

})
app.get("/editData",async(req,res)=>{
    // console.log(req.query.id)
    // singleBook = Book.find((e)=>e.id == req.query.id)
    // res.render("update",{singleBook});
    await schema.findById(req.query.id).then((data)=>{
        res.render("update",{data})
    })

})
app.post("/updateData",async(req,res)=>{
    // let tempData = Book.map((e)=>e.id == req.body.id?req.body: e)
    // Book = tempData
    // res.redirect("/")
    await schema.findByIdAndUpdate(req.body.id,req.body).then((data)=>{
        res.redirect("/")
    })

})

app.post("/searchData", (req, res) => {
    let findData = req.body.search;
    let SearchData = Book.filter((e) => 
        e.book.toLowerCase().includes(findData.toLowerCase())
    );
    
    res.render("index", { Book: SearchData });
});
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server started http://localhost:${port}/`)
})