function initMap() {
  new google.maps.Map(document.getElementById('map'), {
    mapId: 'a25ede39525eec8e',
    center: { lat: 45, lng: 7 },
    zoom: 7,
  });
}

export { initMap };
