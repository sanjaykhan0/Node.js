const express = require("express");
const route = express.Router();
const passport = require("passport");
const ctl = require("../Controller/ctl");
const multer = require("../Middleware/Multer");

route.get("/", ctl.login);
route.get("/logout", ctl.logout);
route.post("/userlogin",passport.authenticate("local", { failureRedirect: "/" }),ctl.userlogin);
route.get("/dashboard", passport.checkAuth, ctl.index);
route.get("/addAdmin", ctl.addAdmin);
route.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin);
route.post("/addAdmin", multer, ctl.addAdminData);
route.get("/deleteAdmin", multer,ctl.deleteAdmin);
route.get("/editAdmin", ctl.editAdmin);
route.post("/updateAdmin", multer, ctl.updateAdmin);
route.get("/updatepass",passport.checkAuth,ctl.changepass)
route.post("/updatepassword",passport.checkAuth,ctl.updatepassword)


route.get("/otpchapass",passport.checkAuth,ctl.forgotpass)
route.post("/recoverPass",passport.checkAuth, ctl.recoverPass);
route.post("/verifyPass", passport.checkAuth,ctl.verifyPass);

module.exports = route;
