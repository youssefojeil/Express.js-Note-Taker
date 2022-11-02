// setup router & import helper functions 
const notes = require("express").Router();
const fs = require("fs");
const { readFromFile, readAndAppend, writeToFile, uuid } = require("../helpers/fsUtils");


// Get route for retreiving notes
notes.get("/", (req, res) => {
    console.log(`Notes ${req.method} get requested`);
    // Must handle the response
    //res.send("Test API");

    // read from db.json file and send as response body
    // This will post any notes to the /notes page from the /api/notes
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
})


// POST route for submitting new notes
notes.post("/", (req, res) => {
   // log post request body
    console.log(req.body);
    console.log(`Notes ${req.method} method requested`)
    const {title, text} = req.body

    // check if text & title are valid
    if(title && text) {

        // create new note & add unique ID
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        // read note file & append new note to note file
        readAndAppend(newNote, "./db/db.json")
    
        // create success response with new note
        const response = {
            status: "success",
            body: newNote,
        };
        res.json(response);
    }
    else{
        res.json("Error in posting feedback");
    }

    // logging response
    console.log(response);
    
})


// DELETE route for deleting notes
notes.delete("/:id", (req, res) => {
    
    console.log(`Notes ${req.method} method requested`);

    // read notes file
    fs.readFile("./db/db.json", "utf8", (err, notes) => {
        if(err) {
            console.log(err);
        }
        else{
            // store notes in array
            const newData = JSON.parse(notes);
            console.log(newData);
            // filter array, keep all notes except for note selected to delete
            const newNotes = newData.filter(note => note.id !== req.params.id);
            // log new notes after filtering the deleted note
            console.log(newNotes);
            writeToFile("./db/db.json", newNotes);
         
            const response = {
                status: "success",
                body: newNotes,
            };
            res.json(response);
        }
    })
})

module.exports = notes;