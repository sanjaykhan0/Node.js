const express= require("express");
const port = 2112;

const app=express();
const db = require("./config/db");
const path=require("path");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use("/",require("./router/Route"))
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/public",express.static(path.join(__dirname,"public")));



app.listen(port,(err)=>{
    err?console.log(err) : console.log(`listning on http://localhost:${port}`)
})