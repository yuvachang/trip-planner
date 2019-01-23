const mapboxgl = require("mapbox-gl");

function marker(container, coordinates, pix) {

	const markerDomEl = document.createElement("div"); // Create a new, detached DIV

	markerDomEl.style.width = "32px";
	markerDomEl.style.height = "39px";
	markerDomEl.style.backgroundImage = pix;

	new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(container); 
}

module.exports = marker;