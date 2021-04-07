// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

let map;
function initMap(lat, lng){
  let myCoords = new google.maps.LatLng(lat, lng);
  let mapOpt = {
    center: myCoords,
    zoom: 8,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOpt);
  const marker = new google.maps.Marker({
    position: myCoords,
    map: map});
}

function initMap2() {
  const lat = document.getElementById('place_latitude').value;
  const lng = document.getElementById('place_longitude').value;
    // if not defined create default position
    if (!lat || !lng){
        lat=51.5;
        lng=-0.125;
        document.getElementById('place_latitude').value = lat;
        document.getElementById('place_longitude').value = lng;
    }
  const myCoords = new google.maps.LatLng(lat, lng);
  const mapOptions = {
    center: myCoords,
    zoom: 14
  };
  const map = new google.maps.Map(document.getElementById('map2'), mapOptions);
  const marker = new google.maps.Marker({
        position: myCoords,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
  });

  // when input values change call refreshMarker
  document.getElementById('place_latitude').onchange = refreshMarker;
  document.getElementById('place_longitude').onchange = refreshMarker;
  // when marker is dragged update input values
    marker.addListener('drag', function() {
        latlng = marker.getPosition();
        newlat=(Math.round(latlng.lat()*1000000))/1000000;
        newlng=(Math.round(latlng.lng()*1000000))/1000000;
        document.getElementById('place_latitude').value = newlat;
        document.getElementById('place_longitude').value = newlng;
    });

  // When drag ends, center (pan) the map on the marker position
    marker.addListener('dragend', function() {
        map.panTo(marker.getPosition());
    });}

// refresh marker position and recenter map on marker
function refreshMarker(){
  const lat = document.getElementById('place_latitude').value;
  const lng = document.getElementById('place_longitude').value;
  const myCoords = new google.maps.LatLng(lat, lng);
  marker.setPosition(myCoords);
  map.setCenter(marker.getPosition());
}

window.initMap = initMap;
document.getElementById('place_latitude').onchange = refreshMarker;
document.getElementById('place_longitude').onchange = refreshMarker;
