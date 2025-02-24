const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // email:{
    //     type:String,
    //     required:true
    // },
    // phone:{
    //     type:String,
    //     required:true
    // },
    // password:{
    //     type:String,
    //     required:true
    // }
})

const admin = mongoose.model("ADMIN ",schema)

module.exports=admin