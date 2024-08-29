const express = require("express")
const app = express()
const fs = require("fs")
const mongo = require("mongodb")

app.listen(3000)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})


app.get("/about", (req, res)=> {
    res.render("about")
})