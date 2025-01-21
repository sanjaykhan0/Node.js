

const express = require("express");

const route = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../multer/multer")
const passport =  require("../multer/passport")

route.get("/",ctl.loginPage)
route.post("/loginData", passport.authenticate('local', { failureRedirect: '/' }),ctl.loginData)
route.get("/dashboard",passport.checkAuth,ctl.indexPage)
route.get("/formPage",passport.checkAuth,ctl.formPage)
route.get("/tablePage",passport.checkAuth,ctl.tablePage)
route.post("/addData",multer,ctl.addData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",ctl.editData)
route.post("/updateData",multer,ctl.updateData)
route.get("/logout",ctl.logout)




module.exports=route