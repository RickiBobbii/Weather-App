$(document).ready(function(){
    


//function to Render Weather
function renderWeather(weather) {
    console.log(weather);
    var heroCard = document.querySelector('#hero-card');
    var city = document.querySelector('#hero-city');
    city.innerHTML = weather.city.name;

    var date = document.querySelector('#hero-date');
    var timestamp = weather.list[0].dt;
    date.innerHTML = dayjs.unix(timestamp).format('MMMM D, YYYY');

    var icon = document.querySelector('#hero-icon')
    var iconcode = weather.list[0].weather[0].icon;
    var iconurl = " https://openweathermap.org/img/wn/" + iconcode + "@4x.png";
    $('#hero-icon').attr('src', iconurl);


    var temp = document.querySelector('#hero-temp');
    temp.innerHTML = "Temp: " + weather.list[0].main.temp + " F";

    var wind = document.querySelector('#hero-wind');
    wind.innerHTML = "Wind: " + weather.list[0].wind.speed + " MPH";

    var humidity = document.querySelector('#hero-humidity');
    humidity.innerHTML = "Humidity: " + weather.list[0].main.humidity + " %";
}


//function to get Weather , fetch api
function fetchWeather(query) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=Columbus,us&units=imperial&appid=20289076a9624ee927b2ed1686967655";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           renderWeather(data);
        });
}
fetchWeather();

    //add Dayjs to grab dates for cards if needed

    //grab weather ICON
    // var iconcode = a.weather[0].icon;
    // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // $('#wicon').attr('src', iconurl);


  });