var request = require('request');

request.post(
    'http://www.localhost:3000',
    { "lat": "30",
    	   "lon" : "40" },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);