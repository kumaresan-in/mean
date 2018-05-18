const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log('connected to database'+config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('Not connected to database'+err);
});

//express
const app = express();

//port 
const port = 3000;

//cors middleware
app.use(cors());

//body parser
app.use(bodyParser.json());

//Routes In App
const users = require('./routes/users');

app.use('/users',users);

app.use(express.static(path.join(__dirname, 'public')));

//index page
app.get('/', (req, res) =>{
    res.send('Mean Stack Kick Start');
});

app.listen(port,()=>{
    console.log('server started on'+port);
});