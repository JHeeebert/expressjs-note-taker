// Declare router variable and store variable express.Router() and db store 
// Require express and router
const path = require("path");
const express = require("express");
const router = express.Router();
const fs = require("fs");
 
// Set up Path to the db file
const dbPath = path.join(__dirname, "../db/db.json");

// GET route for getting all notes
 router.get("/notes", (req, res) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// Save note to db.json
router.post("/notes", (req, res) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = notes.length.toString();
        notes.push(newNote);
        fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// Delete note from db.json
router.delete("/notes/:id", (req, res) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const noteID = req.params.id;
        notes.splice(noteID, 1);
        fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });
});

module.exports = router;