const express = require('express');
const routes = require('./routes/api.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

// listen for request
app.use(bodyParser.json())
   .use('/api', require('./routes/api.js'))
   .use(function(err, req, res, next) {
        console.log("ERROR:\n"+err);
        res.status(422).send({error: err.message});
    })
   .listen(process.env.port || 4000, function() {
        console.log('now listening for requests');  
    });
