const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const Admin = mongoose.model("Data", schema);

module.exports = Admin;