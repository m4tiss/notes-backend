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
        note.title = title,
        note.body = body
      
        await note.save().then(()=>{
            console.log("edited!")
        });
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Note not exist." });
    }
}