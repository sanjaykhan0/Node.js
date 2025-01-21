const express = require("express");
const port = 2003;
const path = require("path")
const db = require("./config/db")
const app = express();
const cookie = require("cookie-parser")
const passport = require ("./multer/passport")
const session = require('express-session')


app.set("view engine", "ejs");
app.use(session({
    name: 'local',
    secret: 'hi',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: (100 * 100 * 60) }
}))

app.use(passport.session())


app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use(cookie())


app.use("/",require("./router/route"))

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log(`Server running at http://localhost:${port}/`);
    }
});
