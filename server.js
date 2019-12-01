const express = require("express");
const mysql = require("mysql");
var path = require("path");
const PORT = process.env.port || 3500;

const notes = [];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// index page
app.get("/", function(req, res) {
    res.sendFile(__dirname +  "/public/index.html");
});
// notes page
app.get("/notes", function(req, res) {
    res.sendFile(__dirname +  "/public/notes.html");
});
// get notes json api
app.get("/api/notes", function(req, res) {
    return res.json(notes);
});
// post notes json api
app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
});















// server listener
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});







