window.addEventListener ('load', ()=> {
    let lon;
    let lat;

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
                }) 
        });

            
    } 

});