class WeatherApi {

    async getCityList(city){
        return fetch(`https://restcountries.eu/rest/v2/capital/${city}`)
        .then(response => response.json())
        .then(data => {
            const cities = [];
            data.forEach((element) => {
                console.log(element.name);
                cities.push(element.capital);
            });
            
            return cities;
        });
    }

    getHistory(){
        return ['Paris', 'London', 'Madrid', 'Boston'];
    }

    async getWeatherByCity (city) {
        return fetch(`http://api.apixu.com/v1/current.json?key=c84321785db3490c98c163258191805&q=${city}`)
        .then(response => response.json())
        .then(data => {
            console.log('getWeatherByCity :: ', data);
            const weather = {
                tempC: data.current.temp_c,
                condition: data.condition
            }
            return weather;
        });
    }
}

export default WeatherApi;