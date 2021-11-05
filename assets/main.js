let weather = {
    apiKey:"f28ab87fa51ee21f374337b42e22187f",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response)=> response.json())
        .then((data)=> this.displayeWeather(data));

    },
    displayeWeather: function (data) {
        const { name } = data;
        const { icon } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerHTML = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon +"@2x.png";
        document.querySelector(".temp").innerHTML = temp + "°C"; 
        document.querySelector(".humidity").innerHTML = humidity + " %";
        document.querySelector(".wind").innerHTML = speed + " km/h";
        
    },

    search : function () {
        var cname = document.querySelector(".search-bar").value;
        this.fetchWeather(cname);
        
    }

};
document.querySelector(".search-bar").addEventListener("keyup",(event)=>{

        weather.search();
    
});


weather.fetchWeather("Urmia");