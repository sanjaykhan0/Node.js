

const express = require("express");

const route = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../multer/multer")

route.get("/",ctl.indexPage)
route.get("/formPage",ctl.formPage)
route.get("/tablePage",ctl.tablePage)
route.post("/addData",multer,ctl.addData)

module.exports=route