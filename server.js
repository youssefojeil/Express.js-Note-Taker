const express = require("express");
const path = require("path");

// invoke express & set port to 3000
const app = express();
const PORT = 3000;

// Adding middleware for json parsing & static file
app.use(express.json());
app.use(express.static("public"));

// get homepage (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// listen on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})