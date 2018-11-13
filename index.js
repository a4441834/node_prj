const express = require('express');
const bodyparser = require('body-parser');

const { mongoose } = require('./data/db');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.json());

var port = 8080;
app.listen(port, ()=> console.log('Server Started at port:' +port));

app.use('/employees', employeeController);
