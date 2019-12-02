const express = require("express");
const mysql = require("mysql");
var path = require("path");
const fs = require("fs");
const PORT = process.env.port || 3500;
let notes;

const dataSaved =  fs.readFileSync("./db/db.json","UTF-8");
if(dataSaved){
    const oldNotes = JSON.parse(dataSaved);
    notes = oldNotes;
}
else{
    notes = [];
}
creatID();
console.log(notes);
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
    creatID();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), function(err){if(err) throw err});
});
// delete notes from api
app.delete("/api/notes/:id", function(req, res) {
    console.log(req.param.id);
});



function creatID (){
    for(i = 0; i < notes.length; i++){
        notes[i].id = i;
    }
}











// server listener
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});







