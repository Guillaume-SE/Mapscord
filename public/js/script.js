import { map } from './config/InitMap.js';
import { markerCluster }  from './other/CreateMarkerCluster.js';
import { markerJavascript, markerPHP, markerWordpress } from './other/CreateMarker.js';
import { controlPanel }  from './other/ControlPanel.js';

document.addEventListener("DOMContentLoaded", function () {

markerCluster.addTo(map);

markerJavascript.addTo(markerCluster);
markerPHP.addTo(markerCluster);
markerWordpress.addTo(markerCluster);

controlPanel.addTo(map);

});