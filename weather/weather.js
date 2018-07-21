const request = require('request');

// 58aae91610a2528046b7df9d73eea2f7

var getWeather = (lat,lng,callback)=>{
	request({
		url:`https://api.darksky.net/forecast/58aae91610a2528046b7df9d73eea2f7/${lat},${lng}`,
		json:true
	},(error,response,body)=>{
		if(error){
			callback("Unable to connect to forecast.io");
		}else if(response.statusCode === 400){
			// (body.code === 400) this also works
			callback("Unable to fetch weather");
		}else if(response.statusCode === 200){
			callback(undefined,{
				summary: body.currently.summary,
				temperature:body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature,
				humidity:body.currently.humidity,
				pressure:body.currently.pressure,
				windSpeed:body.currently.windSpeed
			});
		}	
	});
}

module.exports = {
	getWeather
}