const mapboxgl = require("mapbox-gl");
function marker() {

const markerDomEl = document.createElement("div"); // Create a new, detached DIV

markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map); 

}

module.exports=marker;