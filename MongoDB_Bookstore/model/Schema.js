const mongoose = require("mongoose")
const schema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    book:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    }
    
})

const model = mongoose.model("bookstore_schema",schema)

module.exports = model