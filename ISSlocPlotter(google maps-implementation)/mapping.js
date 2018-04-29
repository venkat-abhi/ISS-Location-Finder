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
    //console.log(latitude,longitude);
    initMap(latitude,longitude);
}

function initMap(lat_label,lng_label) {
    
    var location = {
        lat: +latitude,
        lng: +longitude
        
    };
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: location 
    });

    l1 = parseFloat(lat_label).toString()
    l2 = parseFloat(lng_label).toString()
    
    var marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    
    var infowindow = new google.maps.InfoWindow({
        content:"Latitude: " + l1 + '<br>Longitude: ' + l2
     });
    infowindow.open(map,marker);
   
}