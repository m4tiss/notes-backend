const Note = require('../database/models/note');

module.exports = async function(req,res){
    const doc =  await Note.find({});
    res.status(200).json(doc);
}