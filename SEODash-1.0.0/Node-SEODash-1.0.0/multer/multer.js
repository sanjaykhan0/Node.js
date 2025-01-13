const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+""+Date.now())
    }
})
const uploads = multer({storage:storage}).single("image")

module.exports=uploads