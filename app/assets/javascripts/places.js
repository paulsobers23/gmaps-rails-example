let map;

function initMap(lat, lng){
  let myCoords = new google.maps.LatLng(lat, lng);
  let mapOpt = {
    center: myCoords,
    zoom: 8,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOpt);
}
