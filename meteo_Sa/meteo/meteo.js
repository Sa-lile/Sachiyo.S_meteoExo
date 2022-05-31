/*******Fonction de date ********************/
function setDate() {   
    const now = new Date(); 
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options = {
        weekday : "long",
        year : "numeric",
        month : "long",
        day:"numeric"
    }
    // const date = new Intl.DateTimeFormat("fr-FR");
    const time = new Intl.DateTimeFormat("fr-FR", options).format(now);
    const date = document.getElementById("date");
    date.textContent = time;
}
//  setDate();
setInterval(setDate, 1000);

/*******Fonction de heure ********************/

function setTime() {
    const now = new Date();
    // Formatage de l'heure : heures, minutes et secondes sur 2 chiffres
    options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const time = new Intl.DateTimeFormat("fr-FR", options).format(now);
    const heure = document.getElementById("heure");
    heure.textContent = time;
}
setInterval(setTime, 1000);

let epheCall = function(city){
    let url = "https://api.meteo-concept.com/api/ephemeride/0?token=1dd9b5b41e102d22d7b57604cef47a64a86763b59754758d3476d8143bb3b07b&insee=31555";

fetch(url).then((Response) => Response.json().then((data) => {
    console.log(data);
    document.querySelector("#heure_soleil").innerHTML = data.ephemeride.sunrise;
    document.querySelector("#heure_couche").innerHTML = data.ephemeride.sunset;
    document.querySelector("#date").innerHTML = data.ephemeride.datetime;  
})
)
.catch((err) => console.log ("Erreur : " + err));
};

/*fuction temperature*/
let temCall = function(tem){
    let url = "https://api.meteo-concept.com/api/forecast/daily/0?token=1dd9b5b41e102d22d7b57604cef47a64a86763b59754758d3476d8143bb3b07b&insee=31555";

fetch(url).then((Response) => Response.json().then((data) => {
    console.log(data);
    document.querySelector("#tmin").innerHTML = data.forecast.tmin;
    document.querySelector("#tmax").innerHTML = data.forecast.tmax;
    document.querySelector("#tmoy").innerHTML = data.forecast.weather;

})
);
};

epheCall();
temCall();










