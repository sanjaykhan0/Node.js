const express = require("express");
const port = 2003;
const path = require("path")
const db = require("./config/db")
const app = express();



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use("/",require("./router/route"))


app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log(`Server running at http://localhost:${port}/`);
    }
});
