var request = require('request');

request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=80%20chapin%20st%20binghamton&key=AIzaSyAy4vkQtxurJyc2_eNKubjcIvANLh3BZM0',
	json:true
},(error,response,body)=>{
	console.log(`Address:${body.results[0].formatted_address}`);
	console.log(`Latitude:${body.results[0].geometry.location.lat}`);
	console.log(`Longitude:${body.results[0].geometry.location.lng}`);
});