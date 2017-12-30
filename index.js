const express = require('express');
const routes = require('./routes/api.js');

// set up express app
const app = express();
app.use('/api', require('./routes/api.js'));

// listen for request
app.listen(process.env.port || 4000, function() {
   console.log('now listening for requests');  
});