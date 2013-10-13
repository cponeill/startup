var express = require("express");
var fs = require("fs");
var path = require("path");
var htmlfile = "soundhome.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
