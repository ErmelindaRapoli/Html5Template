/* 
 Created on : feb 2016
 Author     : Rapoli Ermelinda - www.ermelindarapoli.it
 */

// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng = new google.maps.LatLng(41.3890066, 2.1539148);
    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: false,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });

}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //