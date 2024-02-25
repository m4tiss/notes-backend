const express = require('express');
const router = express.Router();

const saveNote = require('../actions/saveNote.js');
const getNote = require('../actions/getNote.js');
const deleteNote = require('../actions/deleteNote.js');
const editNote = require('../actions/editNote.js');
const getAllNotes = require('../actions/getAllNotes.js');

router.post('/saveNote',saveNote);
router.get('/getNote/:id',getNote);
router.delete('/deleteNote/:id',deleteNote);
router.put('/editNote/:id',editNote);
router.get('/getAllNotes',getAllNotes);


module.exports = router;