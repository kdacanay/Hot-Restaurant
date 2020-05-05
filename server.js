//create a basic serve using express.js
var express = require('express')
var bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("Hello World");
})

app.use(express.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

// require("./app/routing/api-route.js")(app);
// require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});