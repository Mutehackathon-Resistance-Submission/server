var request = require('request');
request.post({
     url: "http://localhost:3000/sightings",
     headers: {
        "Content-Type": "application/json"
     },
     body: {
       'lat': '50',
       'lon': '-90.1848',
       'timestamp': '1491625719505',
       'picture': 'picture',
       'extrainfo': {}
     },
     json:true
}, function(error, response, body){
   console.log(error);
   console.log(JSON.stringify(response));
   console.log(body);
});
