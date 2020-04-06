window.addEventListener ('load', ()=> {
    let lon;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');
    let locationTimezone = document.querySelector('.location-timezone')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;



            // const proxy = 'http://cors-anywhere.herokuapp.com/'
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=a05bc7d3dd3a3be43342c46843837be0`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // const temperature = data['current']['temp'];
                    const summary = data ['current']['weather'][0]['description'];
                    // const location = data['timezone'];
                    temperatureDegree.textContent = data.current.temp;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                }) 
        });

            
    } 

});