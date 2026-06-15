const apiKey = "23669a5062c183fd31c0a96cd52fb996";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
            `<p>${error.message}</p>`;
    }
}