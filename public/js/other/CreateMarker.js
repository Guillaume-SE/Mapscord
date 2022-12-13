import { developerJavascript } from '../datas/DevJS.js';
import { developerPHP }        from '../datas/DevPHP.js';
import { developerWordpress }  from '../datas/DevWordpress.js';
import { memberMarker }        from './MarkerStyle.js';

const markerJavascript = L.geoJSON(developerJavascript, {
    pointToLayer: function(feature, latlng) { // create marker
        return L.marker(latlng, { icon: memberMarker });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.name, { // add info around the marker
            permanent: true,
            direction: "top"
        });
        // layer.bindPopup(feature.properties.techno);
    }
});

const markerPHP = L.geoJSON(developerPHP, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: memberMarker });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.name, {
            permanent: true,
            direction: "top"
        });
        // layer.bindPopup(feature.properties.techno);
    }
});

const markerWordpress = L.geoJSON(developerWordpress, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: memberMarker });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.name, {
            permanent: true,
            direction: "top"
        });
        // layer.bindPopup(feature.properties.techno);
    }
});

export { markerJavascript, markerPHP, markerWordpress };