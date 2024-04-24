const apiKey = '166bdcddc1444f6ba21220317242404';

function getWeatherData(location) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching data: ', error));
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather-result');
    const tempC = data.current.temp_c;
    const tempF = data.current.temp_f;
    const conditionText = data.current.condition.text;
    weatherDiv.innerHTML = `
        <p>Temperature: ${tempC} °C / ${tempF} °F</p>
        <p>Condition: ${conditionText}</p>
    `;
}

document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const locationInput = document.getElementById('location-input');
    getWeatherData(locationInput.value);
    locationInput.value = '';
});