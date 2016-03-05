//Sends and manage request from the eventbrite api
var token = "GYNJ7M4IY32S6ORX5TKL";
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.eventbriteapi.com/v3/users/me/owned_events/?token=GYNJ7M4IY32S6ORX5TKL", true);
xhr.send();

xhr.onreadystatechange = processRequest;


function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
    }
}

function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition(showPosition));

    } else {
        console.log( "Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log( position);
}
window.getLocation();
//window.showPosition();
