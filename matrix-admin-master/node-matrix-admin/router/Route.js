const express = require("express")
const route = express.Router()
const ctl = require("../controller/indexCTL")



route.get("/",ctl.indexPage)
route.get("/views/Form-basic.ejs",ctl.FormBasic)
route.get("/views/form-wizard.ejs",ctl.formWizard)




module.exports = route