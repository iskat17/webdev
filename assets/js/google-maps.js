function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -6.207690, lng: 106.985270};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bulan , Sorsogon ' // Title Location
    });
}
<a href="https://embedgooglemap.2yu.co/">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style>
