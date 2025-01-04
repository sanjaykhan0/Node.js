const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const model = mongoose.model("student_schema",schema)

module.exports = model