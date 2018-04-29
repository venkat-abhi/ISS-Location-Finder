var request = new XMLHttpRequest();
request.open('GET', 'http://api.open-notify.org/iss-now.json');
request.onload = function() {
        var data = JSON.parse(request.responseText);
        LocationData(data);
};
request.send();
var latitude, longitude;
function LocationData(data) {
    latitude = parseFloat(data.iss_position.latitude);
    longitude = parseFloat(data.iss_position.longitude);
    console.log(latitude,longitude);
    initMap();
}

function initMap() {
    var location = {
        lat: +latitude,
        lng: +longitude
        
    };
    console.log(location);
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: location
    });
    
    var marker = new google.maps.Marker( {
        position: location,
        map: map,
    });
    console.log(marker.position);
}