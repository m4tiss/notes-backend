const express = require('express');
const router = express.Router();

const saveNote = require('../actions/savenote');

router.get('/saveNote',saveNote);

module.exports = router;