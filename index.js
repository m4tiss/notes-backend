const express = require('express');
const app = express();
const port = 3000
const routes = require('./routes/routes');
const parser = require('body-parser')
const cors = require('cors');

require('./database/database')

app.use(parser.json());

app.use(cors())

app.use('/',routes)


app.listen(port,function(){
    console.log('is working...');
});