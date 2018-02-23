const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/* serves main page */
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});


// odpalamy parsowanie requestow
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//pobranie wszystkich userów
//GET http://localhost:5000/users
app.get("/users", function(req, res) {
    console.log(req.body);
    setTimeout(function() {
        res.sendFile(__dirname + '/users.json')
    }, 1000);
});

//pobranie jednego usera
//GET http://localhost:5000/user
app.get("/user", function(req, res) {
    console.log(req.body);
    setTimeout(function() {
        res.sendFile(__dirname + '/user.json')
    }, 1000);
});

/* serves all the static files */
app.get(/^(.[css|js|png|gif|jpeg|jpg|bmp])$/, function(req, res){
    res.sendFile( __dirname + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`Listening on http://localhost: + ${port}`);
    console.log(`Wejdź na stronę http://localhost:${port} by wyświetlić plik index.html`);
});