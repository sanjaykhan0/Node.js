const passport = require("passport")
const passportST = require("passport-local").Strategy //passport-Strategy
const Schema = require("../model/schema")

passport.use("local",new passportST({usernameField:"email"},async (email,password,done)=>{
    const admin = await Schema.findOne({email:email})
    if (admin) {
        admin.password === password ? done(null, admin) : done(null, false)
    } else {
        done(null, false)
    }
}))
passport.serializeUser((admin, done) => {
    done(null, admin.id)
})
passport.deserializeUser(async (adminId, done) => {
    const admin = await Schema.findById(adminId)
    done(null, admin)
})

passport.checkAuth = (req, res, next) => {
    req.isAuthenticated() ? next() : res.redirect('/')
}

module.exports = passport
//step 1 middleware create 
//step 2 index.js require passport and use session
// step 3 ctl me session destroy