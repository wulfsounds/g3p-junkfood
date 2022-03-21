// Display Date
let date = moment().format('L');
$('time').text(date)
console.log(moment().format('L'))

// Display weather using OpenWeather API and geolocation
// Weather Variables
let userLocation;
let weather;
let apiKey = "1f56ef55a0f3d4c3bb739f2d664d73f9";

getLocation();

// Gather Location data based on user's IP
function getLocation(){
    if (navigator.geolocation){
        userLocation = navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        $('span').html('HOWS THE WEATHER?');
    }
}


async function getWeather(position) {
    let [lat, lon] = [position.coords.latitude, position.coords.longitude]
    console.log(lat, lon);
    let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    await fetch(queryURL)
        .then(function(response) {
            console.log(response.statusText);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            weather = data;
            return weather;
        })
    postWeather();
}

// Displays weather on page with icons
async function postWeather() {
    console.log(weather);
    let icon = weather.current.weather[0].icon;
    let temp = weather.current.temp;
    console.log(icon, temp);
    // Displays weather icon
    const weatherText = document.querySelector(".weather");
    let img = document.createElement("img");
	img.setAttribute(`src`, `http://openweathermap.org/img/wn/${icon}@2x.png`);
	img.setAttribute("alt", "weather-icon");
    weatherText.appendChild(img);


    // Displays temp (in Fº)
    $('.temp').text(`${Math.floor(temp)}º`)
}
