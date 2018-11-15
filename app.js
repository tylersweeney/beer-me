const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
const keys = require('./config/keys');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('your-key-here');




//set up view engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) =>{
    res.render('home'); 
 });

//serve static files from public folder
app.use(express.static('public'))
 
app.listen(PORT, () => {
    console.log('app now listening for requests on port: ' + PORT);
});
