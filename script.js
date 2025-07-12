function getWeather(event) {
    event.preventDefault();

    let cityname = document.weather.city.value.trim();
    let api_key = "c1ea15041c62187fe209a7e6a9e112cb";
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}&units=metric`;

    fetch(api_url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(function (data) {
            // display result in table
            let result = `
    <table class = "result-table">
        <tr><th colspan="2">Weather Result</th></tr>
        <tr><td><b>City</b></td><td>${data.name}</td></tr>
        <tr><td><b>Temperature</b></td><td>${data.main.temp} °C</td></tr>
        <tr><td><b>Weather</b></td><td>${data.weather[0].description}</td></tr>
        <tr><td><b>Humidity</b></td><td>${data.main.humidity}%</td></tr>
    </table>
`;

            document.getElementById("weatherResult").innerHTML = result;
        })
        .catch(function (error) {
            document.getElementById("weatherResult").innerHTML = "<p style='color:red; font-family:Montserrat; font-weight:bold; font-size:20px;'>❌ City not found!</p>";
        });
}
