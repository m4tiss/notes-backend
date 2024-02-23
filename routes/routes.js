const express = require('express');
const router = express.Router();

const saveNote = require('../actions/saveNote');
const getNote = require('../actions/getNote');
const deleteNote = require('../actions/deleteNote');
const getAllNotes = require('../actions/getAllNotes');

router.post('/saveNote',saveNote);
router.get('/getNote/:id',getNote);
router.delete('/deleteNote/:id',deleteNote);
router.get('/getAllNotes',getAllNotes);


module.exports = router;