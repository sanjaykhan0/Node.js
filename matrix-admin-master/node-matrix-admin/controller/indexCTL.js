const AdminSchema = require("../model/schema");


module.exports.loginPage = async (req,res)=>{
    res.render("login")
}

module.exports.indexPage= async (req, res) => {
        res.render("index");
    }
module.exports.FormBasic= async (req, res) => {
        res.render("FormBasic");
    }
module.exports.tablesPage= async (req, res) => {
        res.render("TablePage");
    }
module.exports.AddData= async (req, res) => {
    req.body.image = req.file.path
    let data = await AdminSchema.create(req.body);
    res.redirect("/FormBasic"); 
    console.log(data)
       
    }

