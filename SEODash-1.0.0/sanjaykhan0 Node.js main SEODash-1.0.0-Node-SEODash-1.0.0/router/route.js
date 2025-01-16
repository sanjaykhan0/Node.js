

const express = require("express");

const route = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../multer/multer")

route.get("/",ctl.indexPage)
route.get("/formPage",ctl.formPage)
route.get("/tablePage",ctl.tablePage)
route.post("/addData",multer,ctl.addData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",ctl.editData)
route.post("/updateData",ctl.updateData)




module.exports=route