const Note = require('../database/models/note');

module.exports = async function(req,res){

    const idNote = req.params.id;
    try {
        const note = await Note.findById(idNote);

        if (!note) {
            return res.status(404).json({ message: "Note not exist." });
        }
        const title = req.body.title;
        const body = req.body.body;

        try{
            note.title = title;
            note.body = body;
            await note.save();
            res.status(200).json(note);
        }
        catch(err){
            return res.status(422).json({ message: err.message });
        }
    } catch (error) {
        res.status(404).json({ message: "Note not exist." });
    }
}