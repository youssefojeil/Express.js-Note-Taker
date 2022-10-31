const notes = require("express").Router();

// Get route for retreiving notes
notes.get("/", (req, res) => {
    console.log(`Notes ${req.method} get requested`);
    // Must handle the response
    res.send("Test API");
})


// POST route for submitting new notes
notes.post("/", (req, res) => {
   // log post request body
    console.log(req.body);
    console.log(`Notes ${req.method} method requested`)
    const {title, text} = req.body

    const note = {
        title,
        text,
    };

    const response = {
        status: "success",
        body: note,
    };

    // loggin response
    console.log(response);
    //res.send("test");
    res.json(response);
})

module.exports = notes;