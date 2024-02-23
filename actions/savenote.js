const Note = require('../database/models/note');

module.exports = async function(req,res){
    const title = req.body.title;
    const body = req.body.body;
    const newNote = await new Note({
        title:title,
        body:body
    });
    newNote.save().then(()=>{
        console.log("saved!")
    });
    res.status(200).json(newNote);
}