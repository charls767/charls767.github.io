function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 6.230276257311738, lng: -75.6038952232153};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Medellin,colombia' // Title Location
    });
}
