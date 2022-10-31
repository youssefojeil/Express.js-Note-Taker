const notes = require("express").Router();
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");

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

module.exports = notes;