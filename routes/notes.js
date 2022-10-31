const notes = require("express").Router();

// Get route for retreiving notes
notes.get("/", (req, res) => {
    
})


// POST route for submitting new notes
notes.post("/", (req, res) => {
   // log post request body
    console.log(req.body);

    const {title, text} = req.body

    const note = {
        title,
        text,
    };

    const response = {
        status: "success",
        body: note,
    };

    res.json(response);
})

module.exports = notes;