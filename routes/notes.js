// setup router & import helper functions 
const notes = require("express").Router();
const { readFromFile, readAndAppend, uuid } = require("../helpers/fsUtils");

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

        // create new note
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, "./db/db.json")
    
        const response = {
            status: "success",
            body: note,
        };
        res.json(response);
    }
    else{
        res.json("Error in posting feedback");
    }

    // logging response
    console.log(response);
    
})
/*
// GET route for deleting 
notes.get("/:id", (req, res) => {
    res.js
}) */

// DELETE route for deleting notes

notes.delete("/:id", (req, res) => {
    console.log(`Notes ${req.method} method requested`);
    res.send("test");
    console.log(`${req.params.id}`);

    //const note = 
})

module.exports = notes;