const util = require('util');
const fs = require('fs');
const uuid = require('uuid').v1;

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('./db/db.json', 'utf8');
    }
    write(note) {
        return writeFileAsync('./db/db.json', JSON.stringify(note));
    }
    addNotes(note) {
        const notes = this.read();
                const newNote = {
                    title: note.title,
                    text: note.text,
                    id: uuid(),
                };
                notes.push(newNote);
                this.write(notes);
                return newNote;
            }
    removeNote(id) {
        const notes = this.read();
        const filteredNotes = notes.filter((note) => note.id !== id);
        this.write(filteredNotes);
    }
    getNotes() {
        const notes = this.read();
        return notes;
    }
}