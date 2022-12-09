import config from './Config.js';

const accessToken = config.accessToken;

// main layer
const street = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
	minZoom: 2,
    maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | <a href="https://www.mapbox.com/contribute/#/?utm_source=https%3A%2F%2Fdocs.mapbox.com%2F&utm_medium=attribution_link&utm_campaign=referrer&l=10%2F40%2F-74.5&q=">Improve this map</a>'
});
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

export {street, satellite, topographie, pisteCycl};