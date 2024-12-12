const { log } = require("console");
const express = require("express");
const port = 2003;
const app = express();

let student = [];


app.use(express.urlencoded());
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index", { student });
});

app.post("/addData", (req, res) => {
    req.body.id = String(Date.now());
    // console.log(req.body);
    student.push(req.body);
    res.redirect("/");
});
app.get("/EditData/:id",(req,res)=>{
    // console.log(req.params.id);
    let singleData = student.find((e)=>e.id == req.params.id)
    res.render("UpdateData",{singleData})
    res.end()
})
app.post("/UpdateData", (req, res) => {
    student = student.map((e) => {
        if (e.id === req.body.id) {
           
           return e = req.body
        }
        else{
           return e
        }
        // return e; 
    });
    res.redirect("/");
});

app.get("/deleteData",(req,res)=>{
//  console.log(req.query.id);
 let singleData = student.filter((e)=> e.id !== req.query.id)
 student = singleData
 res.redirect("/");

 
})

// Start Server
app.listen(port, (err) => {
    err ? console.error(err) : console.log(`Server started: http://localhost:${port}`);
});
