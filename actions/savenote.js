const Note = require('../database/models/note');

module.exports = function(req,res){
    const newNote = new Note({
        title:'titleNewNote',
        body:'bodyNewNote'
    });
    newNote.save().then(()=>{
        console.log("saved!")
    });
    res.send('Server is working!');
}