const express = require("express");
const path = require("path");

const app = express();

app.listen(3001, () => {
    console.log("Listening on port 3001");
})