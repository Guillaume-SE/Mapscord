import { map } from './config/InitMap.js';
import { markerJavascript, markerPHP, markerWordpress } from './other/CreateMarker.js';
import { controlPanel }  from './other/ControlPanel.js';

document.addEventListener("DOMContentLoaded", function () {

const markerCluster = L.markerClusterGroup.layerSupport({
    showCoverageOnHover: false
});

markerCluster.addTo(map);

markerJavascript.addTo(markerCluster);
markerPHP.addTo(markerCluster);
markerWordpress.addTo(markerCluster);

controlPanel.addTo(map);

});