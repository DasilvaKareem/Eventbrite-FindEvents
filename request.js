//Sends and manage request from the eventbrite api
var token = "?token=GYNJ7M4IY32S6ORX5TKL";
var lat;
var long;
window.showPosition();
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.eventbriteapi.com/v3/events/search/?q=money&location.within=10mi&location.latitude=35&location.longitude=29token=GYNJ7M4IY32S6ORX5TKL", true);
//xhr.setRequestHeader("Authorization", "GYNJ7M4IY32S6ORX5TKL");
xhr.send();
xhr.onreadystatechange = processRequest;


function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response['events'][0].id);
        alert(response['events'][0].id);
        ///response['events']
    }
}

function getLocation() {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        document.getElementById("poop").innerHTML = "geolocation" + navigator.geolocation;

    } else {
        console.log( "Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    alert( "Latitude: " + position.latitude +
    "<br>Longitude: " + position.longitude);
}
function getLat(position){
  if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition).coords.latitude;
  }
}
function getLong(position){
  return position.coords.longitude;
}

window.onload = function(){
  getLocation();

}

//window.showPosition();
