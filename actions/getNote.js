const Note = require('../database/models/note');

module.exports = async function(req,res){
    const idNote = req.params.id;
    try {
        const note = await Note.findById(idNote);
        if (!note) {
            return res.status(404).json({ message: "Note not exist." });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Note not exist." });
    }
}