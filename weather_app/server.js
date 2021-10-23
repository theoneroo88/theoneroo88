
// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
const { timeStamp } = require('console');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log(`Running on Localhost: ${port}`);
};

//Get Route
app.get('/all', getData);
function getData(req, res) {
    res.send(projectData)
    console.log(projectData)
    projectData = [];
}

//Post Route
app.post('/add', addWeather);

function addWeather(req, res){
    let data = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    projectData = data;
    res.send(projectData);
}