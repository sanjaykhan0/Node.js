const express = require("express");
const port = 2003;

const app = express();

const db = require("./config/db")

const path = require("path")

app.set("view engine", "ejs");

app.use("/", require("./router/Route"));
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"public")))

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log(`Server running at http://localhost:${port}/`);
    }
});
