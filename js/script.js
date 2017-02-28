function initMap() {
        var summerPlace = {lat: 57.6959833, lng: 11.9743703};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: summerPlace
        });
        var marker = new google.maps.Marker({
          position: summerPlace,
          map: map
        });
}
