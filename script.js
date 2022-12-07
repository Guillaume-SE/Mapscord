import config               from './public/js/Config.js';
import userLocation         from './public/js/MemberDatas.js';
import devJS from './public/js/DevJavascript.js';

document.addEventListener("DOMContentLoaded", function () {

const accessToken = config.accessToken;

// MAP et LAYER
const map = L.map('map').setView([46.48361, 2.52639], 5);
// main layer
const street = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
	minZoom: 2,
    maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | <a href="https://www.mapbox.com/contribute/#/?utm_source=https%3A%2F%2Fdocs.mapbox.com%2F&utm_medium=attribution_link&utm_campaign=referrer&l=10%2F40%2F-74.5&q=">Improve this map</a>'
});
street.addTo(map);
// optionnal layer
const satellite = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | <a href="https://www.mapbox.com/contribute/#/?utm_source=https%3A%2F%2Fdocs.mapbox.com%2F&utm_medium=attribution_link&utm_campaign=referrer&l=10%2F40%2F-74.5&q=">Improve this map</a>'
});
const topographie = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
const pisteCycl = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// MARKERS STYLE
const memberIcon = L.icon({
    iconUrl: 'public/img/icon/marker.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 28],
    className: 'marker'
});

// POPUP and MARKERS

const initMarkerCluster = L.markerClusterGroup.layerSupport({showCoverageOnHover: false});

const memberDatas = userLocation;
const memberMarker = L.geoJSON(memberDatas, {
    pointToLayer: function (feature, latlng) {
        return initMarkerCluster.addLayer(L.marker(latlng, {icon: memberIcon})
            .bindTooltip(`${feature.properties.name}`,
        {
            permanent: true,
            direction: 'top',
        }));
    }
});
memberMarker.addTo(map);

// CONTROL PANEL
const baseMaps = {
    "Classique": street,
    "Satellite": satellite,
    "Topographie": topographie,
    "Cyclable": pisteCycl
}
const markers = {
    "Membres": memberMarker
    // "Javascript": devJS
}

const controlPanel = L.control.layers(baseMaps, markers, {collapsed: false});
controlPanel.addTo(map);

// const membres = userLocation.features;
//     for( let i = 0; i < membres.length; i++ ) {
//     const membresInfos = membres[i];
//     const membreName = membresInfos.properties.name;
//     const membreTechno = membresInfos.properties.techno;
//     const membreLongitude = membresInfos.geometry.coordinates[0];
//     const membreLatitude = membresInfos.geometry.coordinates[1];
//     const marker = L.marker([membreLongitude, membreLatitude], { icon: memberIcon });
//     marker.bindTooltip(membreName, {permanent: true, direction: "top"});
//     marker.addTo(map);
    // console.log(marker);
    // }
});