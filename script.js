const apiKey = "bfbe433ab970a3abdde2d60dfb3d937a";

function getWeather(){

let city = document.getElementById("cityInput").value;

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)

.then(response => response.json())

.then(data => {

document.getElementById("city").innerText = "City: " + data.name;

document.getElementById("temp").innerText =
"Temperature: " + data.main.temp + " °C";

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

document.getElementById("weather").innerText =
"Weather: " + data.weather[0].description;

})

.catch(error => {

alert("City not found");

});

}