
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Seo_Dash_2");
const db = mongoose.connection;
db.once("open",(err)=>{
    err?console.log(err):console.log("MongoDb Connected");
})
module.exports = mongoose;