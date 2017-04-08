var request = require('request');
request.get({
     url: "http://localhost:3000/sightings?lat=50&lon=30",
     headers: {
        "Content-Type": "application/json"
     },
     json:true
}, function(error, response, body){
   console.log(error);
   console.log(JSON.stringify(response));
   console.log(body);
});
