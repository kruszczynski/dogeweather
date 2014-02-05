(function(){
    var customLocation = window.location.search.split('=')[1];
    var locationAPI = 'http://ip-api.com/json';
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lang=pl&';
    var getWeather = function(data) {
        var fullWeatherEndpoint = weatherAPI;
        if(customLocation) {
            fullWeatherEndpoint += 'q=' + customLocation;
        } else if(data.status == 'success') {
            fullWeatherEndpoint += 'lat=' + data.lat + '&lon=' + data.lon;
        } else {
            fullWeatherEndpoint += 'q=Warsaw';
        }
        $.getJSON(fullWeatherEndpoint,gotWeather)
    }
    var gotWeather = function(data) {
        //set weather id & icon
        if(data.cod == '404'){
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?lang=pl&q=Warsaw',gotWeather);
            return;
        }
        var id = data.weather[0].id;
        var icon = data.weather[0].icon;

        $('#weather-id').text(id);
        $('#weather-icon').text(icon);

        //TESTING
        //icon = "01n";
        //change such doge and sky based on much icon
        var doge_img = "url(./img/doge/" + icon + ".png)";
        $('.doge-image').css('background-image', doge_img);

        var sky_img = "url(./img/sky-img/" + icon + ".png)";
        $('.bg').css('background-image', sky_img);

    //    console.log(icon);

        //get weather description
        var tempCelcius = data.main.temp - 273.15;
        var tempFahrenheit = tempCelcius * 9 / 5 + 32;
        var description = data.weather[0].description;

        $('#weather-desc').text("wow " + description);
        $('#location').text("uszanowanko " + data.name);

        $('#degreesCelsius .number').text(Math.round(tempCelcius));
        $('#degreesCelsius .cel').text("°C ");
        $('#degreesFahrenheit').text(Math.round(tempFahrenheit) + "°F");

        $(".suchlikes").show();
        $(".ourinfo").show();

        //initialise such doge
        $($.doge);
    };
    $.getJSON(locationAPI,getWeather);
}())
