import {street, satellite, topographie, pisteCycl} from './public/js/TileLayer.js';
import userLocation     from './public/js/MemberDatas.js';
import { memberMarker } from './public/js/MarkerStyle.js';
import memberJavascript     from './public/js/DevJS.js';

document.addEventListener("DOMContentLoaded", function () {
// MAP et LAYER
const map = L.map('map', {
    center: [46.48361, 2.52639],
    zoom: 5,
    layers: [street]
});

const membres = userLocation.features;

const initClusterGroup = L.markerClusterGroup.layerSupport({
    showCoverageOnHover: false
});
initClusterGroup.addTo(map);

    let markerJavascript = L.layerGroup();
    let markerPHP = L.layerGroup();
    let markerWordpress = L.layerGroup();

    for( let i = 0; i < membres.length; i++ ) {
    const membresInfos = membres[i];
    const membreName = membresInfos.properties.name;
    const membreTechno = membresInfos.properties.techno;
    const membreLatitude = membresInfos.geometry.coordinates[1];
    const membreLongitude = membresInfos.geometry.coordinates[0];

    const marker = L.marker([membreLatitude, membreLongitude], { icon: memberMarker });
    marker.bindTooltip(membreName, {
        permanent: true,
        direction: "top"
    });
    if( membreTechno === "Javascript") {
        marker.addTo(markerJavascript);
    }
    if( membreTechno === "PHP" ) {
        marker.addTo(markerPHP);
    }
    if( membreTechno === "Wordpress" ) {
        marker.addTo(markerWordpress);
    }
}

// CONTROL PANEL
const baseMaps = {
    "Classique": street,
    "Satellite": satellite,
    "Topographie": topographie,
    "Cyclable": pisteCycl
}
const markers = {
    "Javascript": markerJavascript,
    "PHP": markerPHP,
    "Wordpress": markerWordpress
}
    const control = L.control.layers(baseMaps, markers, { collapsed: false });
    control.addTo(map);

    initClusterGroup.checkIn([markerJavascript, markerPHP, markerWordpress]);

    markerJavascript.addTo(map);
    markerPHP.addTo(map);
    markerWordpress.addTo(map);

});