

const express = require('express')
const port = 2003

const app = express()

let Book = [
    // {image:"https://m.media-amazon.com/images/I/81CJ-UOykQL.jpg",
    // book:"Jujutsu Kaisen, Vol. 4",
    // author:"Gege Akutami",
    // price:"699",
    // date:"2019-3-4",
    // },
    // {image:"https://m.media-amazon.com/images/I/81vWIAeBijL.jpg",
    // book:"Dragonball Z 01",
    // author:" Akira Toriyama",
    // price:"499",
    // date:"2003-5-6",
    // },
    // {image:"https://m.media-amazon.com/images/I/91FPoNmEUsL._UF1000,1000_QL80_.jpg",
    // book:"Naruto, Vol. 1",
    // author:" Masashi Kishimoto",
    // price:"549",
    // date:"2002-4-1",
    // },
]
app.set('view engine','ejs')
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.render("index",{Book})
})
app.post("/addData",(req,res)=>{
    // console.log(req.body)
    req.body.id = String(Date.now()) 
    Book.push(req.body)
    res.redirect("/")


})
app.get("/deleteData",(req,res)=>{
    // console.log(req.query.id)
    Book = Book.filter((e)=>e.id !== req.query.id)
    res.redirect("/")
})
app.get("/editData",(req,res)=>{
    // console.log(req.query.id)
    singleBook = Book.find((e)=>e.id == req.query.id)
    res.render("update",{singleBook});
})
app.post("/updateData",(req,res)=>{
    let tempData = Book.map((e)=>e.id == req.body.id?req.body: e)
    Book = tempData
    res.redirect("/")
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