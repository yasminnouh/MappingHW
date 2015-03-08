var map = L.map('leafletMap').setView([40.714269,-74.005973], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([40.798306,-73.962713]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();