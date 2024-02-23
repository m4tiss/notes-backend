const Note = require('../database/models/note');

module.exports = async function(req, res) {
    const idNote = req.params.id;
    try {
        const note = await Note.findByIdAndDelete(idNote);
        if (!note) {
            return res.status(404).json({ message: "Note not found." });
        }
        res.sendStatus(204).json({message: "Note deleted."});
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Note not found." });
    }
}