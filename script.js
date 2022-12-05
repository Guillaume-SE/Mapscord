import config               from './public/js/Config.js';
import userLocation         from './public/js/MemberDatas.js';
import airportLocation      from './public/js/AirportDatas.js';
import trainStationLocation from './public/js/TrainStationsDatas.js';

document.addEventListener("DOMContentLoaded", function () {

const accessToken = config.accessToken;

// MAP et LAYER
const map = L.map('map').setView([46.48361, 2.52639], 5);
// main layer
const street = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
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

// MARKERS
const memberIcon = L.icon({
    iconUrl: 'public/img/icon/marker.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 28],
    className: 'marker'
});
const airportIcon = L.icon({
    iconUrl: 'public/img/icon/airport.svg',
    iconSize: [25, 25],
    iconAnchor: [10, 20],
    className: 'airport-marker'
});
const trainStationIcon = L.icon({
    iconUrl: 'public/img/icon/train-station.svg',
    iconSize: [20, 25],
    iconAnchor: [5, 20],
    className: 'train-marker'
});

// POPUP

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}
const memberDatas = userLocation;
const memberMarker = L.geoJSON(memberDatas, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {

        return L.marker(latlng, {icon: memberIcon});
    },
});
memberMarker.addTo(map);

const airportDatas = airportLocation;
const airportMarker = L.geoJSON(airportDatas, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {

    return L.marker(latlng, {icon: airportIcon});
    },
});

const trainStationDatas = trainStationLocation;
const trainStationMarker = L.geoJSON(trainStationDatas, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {

    return L.marker(latlng, {icon: trainStationIcon});
    },
});

// CONTROL PANEL
const baseMaps = {
    "Classique": street,
    "Satellite": satellite,
    "Topographie": topographie,
    "Cyclable": pisteCycl
}
const markers = {
    "Membres": memberMarker,
    "Aéroports": airportMarker,
    "Gares": trainStationMarker
}

const controlPanel = L.control.layers(baseMaps, markers, {collapsed: false});
controlPanel.addTo(map);
});