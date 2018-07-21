const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(JSON.stringify(results,undefined,2));
		weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults)=>{
			if(errorMessage){
				console.log(errorMessage);
			}else{
				console.log(JSON.stringify(weatherResults,undefined,2));
			}
		});
	}
});


