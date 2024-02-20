const apiKey ="54b76ac564ded38e7ef98a2c4c9048f0"; // replace with your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2 style="color:grey">Weather in ${city}</h2>
                <p style="color:orange">Temperature: ${data.main.temp}&deg;C</p>
                <p style="color:yellow">Weather: ${data.weather[0].main}</p>
                <p style="color:white">Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});
