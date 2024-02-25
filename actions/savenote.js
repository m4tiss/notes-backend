const Note = require('../database/models/note');

module.exports = async function(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    const color = req.body.color
    
    try {
        const newNote = new Note({
            title: title,
            body: body,
            color: color
        });
        
        await newNote.save();
        res.status(200).json(newNote);
    } catch(error) {

        return res.status(422).json({ message: error.message });
    }
}