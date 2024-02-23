const Note = require('../database/models/note');

module.exports = async function(req,res){
    const newNote = await new Note({
        title:'titleNewNote',
        body:'bodyNewNote'
    });
    newNote.save().then(()=>{
        console.log("saved!")
    });
    res.status(200).json(newNote);
}