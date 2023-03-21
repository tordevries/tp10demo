/* javascript for TP10 */

// add some code to wait for the DOM
document.addEventListener("DOMContentLoaded", function() {

    // code to load API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99163', options)
        .then(response => response.json())
        .then(function(response){
            document.querySelector("#tempF span").innerHTML = response.current.temp_f;
            document.querySelector("#tempC span").innerHTML = response.current.temp_c;
            return response;
        })
        .catch(err => console.error(err));

});