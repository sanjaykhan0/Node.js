const Schema = require("../model/schema");
const fs = require("fs")

module.exports.loginPage = (req, res) => {
    res.render('login')

    // req.cookies.user?res.redirect("dashboard"):res.render("login")
}

module.exports.loginData = async (req, res) => {
    const user = await Schema.findOne({ email: req.body.email })
    if (user) {
        if (user.password === req.body.password) {
            res.cookie("userData", user)
            res.render('index')

        }
        else {
            res.redirect("/")
        }
    }
    else {
        res.redirect("/")
    }
    console.log(req.body)
}

module.exports.indexPage = (req, res) => {
    // res.render('index')
    req.cookies.userData ? res.render("index") : res.redirect("/")
}
module.exports.formPage = (req, res) => {
    // res.render('form')
    req.cookies.userData ? res.render("form") : res.redirect("/")

}
module.exports.tablePage = async (req, res) => {
    if (req.cookies.user) {

        await Schema.find({}).then((data) => {
            res.render('table', { data })

        })
    }
    else {
        res.redirect("/")
    }
}
module.exports.addData = async (req, res) => {
    req.body.image = req.file.path
    await Schema.create(req.body).then((data) => {
        console.log(data)
        res.redirect('/formPage')
    })

}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id).then((data) => {
        res.redirect('/tablePage')
    })
}

module.exports.editData = async (req, res) => {
    console.log(req.query.id)
    await Schema.findById(req.query.id).then((data) => {
        // console.log(data.id+"edit")
        res.render("EditForm", { data })
    })
}
module.exports.updateData = async (req, res) => {
    let img = ""
    // console.log("edit",req.body.id)
    let singleData = await Schema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    await Schema.findByIdAndUpdate(req.body.id, req.body).then((data) => {
        res.redirect('/tablePage')
    })
}
