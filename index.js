const express = require('express');
const app = express();
const port = 3000
const routes = require('./routes/routes');

require('./database/database')


app.use('/',routes)


app.listen(port,function(){
    console.log('is working...');
});