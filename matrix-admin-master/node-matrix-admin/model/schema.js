
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    language:{
        type:Array,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
})

const AdminSchema = mongoose.model("Data", schema);

module.exports = AdminSchema;