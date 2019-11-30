const express = require("express");
const mysql = require("mysql");
var path = require("path");
const PORT = process.env.port || 3500;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res) {
    res.sendFile(__dirname +  "/public/index.html");
});

app.get("/notes", function(req, res) {
    res.sendFile(__dirname +  "/public/notes.html");
});














// server listener
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});







