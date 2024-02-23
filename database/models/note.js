const mongoose = require('mongoose');

const Note = mongoose.model('Note',{
    title:String,
    body:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = Note;