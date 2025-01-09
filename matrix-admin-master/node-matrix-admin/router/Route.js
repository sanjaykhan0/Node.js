const express = require("express")
const route = express.Router()
const ctl = require("../controller/indexCTL")


route.get("/",ctl.loginPage)
route.get("/dashboard", ctl.indexPage)
route.get("/FormPage", ctl.FormBasic)
route.get("/tables", ctl.tablesPage)
route.post("/addData",ctl.AddData)




module.exports = route