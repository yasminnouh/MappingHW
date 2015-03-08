var map = L.map('leafletMap').setView([40.714269,-74.005973], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mappingDataArray = mappingData.rows;

for (var i=0; i<)
var marker = L.marker([40.798306,-73.962713]).addTo(map);

marker.bindPopup("<b>Home address</b><br>I live here.").openPopup();