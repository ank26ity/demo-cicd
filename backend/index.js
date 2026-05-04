const express = require("express");
const fs = require("fs");

const app = express();

// Read version
const version = fs.readFileSync("./backend/version.txt", "utf8").trim();

app.use(express.static("frontend"));

app.get("/version", (req, res) => {
    res.send(version);
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", version });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});