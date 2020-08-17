// Require Express to run server and routes
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware to use url encoded values with JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('/'));

// Setup Server Port
const port = 3000;

// Spin up the server
const server = app.listen(port, listening);

// Function for the Server to run
function listening(){
    console.log(`Server runs on localhost: ${port}`);
}

// // designates what port the app will listen to for incoming requests
// app.listen(8090, function () {
//     console.log('Example app listening on port 8090!')
// })

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

