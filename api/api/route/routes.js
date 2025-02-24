const express= require('express')
const route = express.Router();
const ctl=require("../controller/adminctl")
const mctl= require("../controller/managerctl")
const ectl=require("../controller/employeectl")

// admin

route.get("/",ctl.allrecords)
route.post("/addadmin",ctl.addadmin)
route.post("/loginadmin",ctl.loginadmin)
route.post("/addmanager",ctl.addmanager)
route.get("/viewmanager",ctl.viewmanager)
route.delete("/deleteemployee/:id",ctl.deleteemployee)
route.delete("/deletemanager/:id",ctl.deletemanager)
route.put("/changeAdminPass",ctl.changeadminpassword)

// manager

route.post("/loginmanager",mctl.loginmanager)
route.post("/addemployee",mctl.addemployee)
route.get("/viewallemployee",mctl.viewallemployee)
route.put("/changeManagerPass",mctl.changeManagerPass)


// EMPLOYEE

route.post("/loginemployee",ectl.loginemployee)
route.put("/changeEmployeePass",ectl.changeEmployeePass)



module.exports=route