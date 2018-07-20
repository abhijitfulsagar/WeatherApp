const request = require('request');
const yargs = require('yargs');
const argv = yargs
	.options({
		a:{
			demand:true,
			alias:'address',
			describe:'Get the weathe for the given address',
			string:true
		}
	})
	.help()
	.alias('help','h')
	.argv;

console.log("argv:",argv);
var encodedAddress = encodeURIComponent(argv.address);
console.log('Encoded Address:',encodedAddress);
// &key=AIzaSyAy4vkQtxurJyc2_eNKubjcIvANLh3BZM0

request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json:true
},(error,response,body)=>{
	console.log(`Address:${body.results[0].formatted_address}`);
	console.log(`Latitude:${body.results[0].geometry.location.lat}`);
	console.log(`Longitude:${body.results[0].geometry.location.lng}`);
});