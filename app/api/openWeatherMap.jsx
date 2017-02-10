var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?appid=2587bcbec8a9df4a3fe192c2b74410f1&units=metric';

//2587bcbec8a9df4a3fe192c2b74410f1

module.exports = {   
  getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
			
		return axios.get(requestURL).then(function (res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			}
			else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		})
	}
};