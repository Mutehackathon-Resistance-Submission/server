var express = require('express');
var app = express();
var request = require('request');
var http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

app.use(bodyParser.json());
app.post('/sightings', function(req, res) {
	console.log("POST /");
	var data = req.body;
	//res.send(jsonObject); // Prints on the clients side

	db.serialize(function () {
	  db.run('CREATE TABLE IF NOT EXISTS persons (latitude REAL, longitude REAL, timestamp REAL, picture BLOB, extrainfo TEXT)');
	  var stmt = db.prepare("INSERT INTO persons VALUES (?, ?, ?, ?, ?)");
		stmt.run(data.lat, data.lon, data.timestamp, data.picture, data.extrainfo);
	  stmt.finalize();
	});
	//db.close()
});

app.get('/sightings?', function(req, res) {
	console.log("GET /");
	var query = req._parsedUrl.query;
	console.log(query);

	var arr = query.split('&');
	console.log(arr);

	//console.log(req.params);
	/*db.each('SELECT * FROM persons', function (err, row) {
		console.log(row);
	});
	*/
});

app.listen(3000, function() {
	console.log("Server is listening...");
});
