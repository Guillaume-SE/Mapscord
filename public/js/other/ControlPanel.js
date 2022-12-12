import { street, satellite, topographie, cyclingRoutes } from './MapStyle.js';
import { markerJavascript, markerPHP, markerWordpress } from './CreateMarker.js';

// CONTROL PANEL
const mapStyle = {
    "Classique": street,
    "Satellite": satellite,
    "Topographie": topographie,
    "Cyclable": cyclingRoutes
};

const markers = {
    "Javascript": markerJavascript,
    "PHP": markerPHP,
    "Wordpress": markerWordpress
};

const controlPanel = L.control.layers(mapStyle, markers, {
    collapsed: false
});

export { controlPanel };