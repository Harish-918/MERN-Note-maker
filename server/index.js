const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Note = require('./model/Note')

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/addNotes', (req, res) => {
    Note.create(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.json(err));
})

app.get('/getNotes', (req, res) => {
    Note.find({})
    .then(notes => res.json(notes))
    .catch(err => res.json(err));
})

app.delete('/deleteNotes/:id', (req, res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


PORT = 9418;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});