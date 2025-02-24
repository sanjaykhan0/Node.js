const express = require('express')
const app = express()
const port = 4000
const db = require("./config/db")

app.use(express.urlencoded({extended:true}))

app.use("/",require('./route/routes'))

app.listen(port,(err)=>{
    err?console.log(err):console.log(`Server Started On http://localhost:${port}`);
})