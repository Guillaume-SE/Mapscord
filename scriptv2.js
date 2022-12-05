import config from './public/js/Config.js';

document.addEventListener("DOMContentLoaded", function () {

mapboxgl.accessToken = config.accessToken;

if (!mapboxgl.supported()) {
        alert("Votre navigateur (ou votre version de navigateur) ne supporte pas Mapbox GL");
    } else {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.52639, 46.48361], // starting position [lng, lat]
        zoom: 4
    });

    const zoomButton = new mapboxgl.NavigationControl();
    map.addControl(zoomButton, 'top-right');

    const fullscreen = new mapboxgl.FullscreenControl();
    map.addControl(fullscreen);

    const language = new MapboxLanguage();
    map.addControl(language);

    // marker
    map.on('load', () => {
        map.addSource('earthquakes', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
        });

        map.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
        'circle-radius': 4,
        'circle-color': '#1DA1F2'
        }
        });
        });
//     const geojson = {
//         'type': 'FeatureCollection',
//         'features': [
//         {
//         'type': 'Feature',
//         'properties': {
//         'message': 'Foo',
//         'iconSize': [30, 30]
//         },
//         'geometry': {
//         'type': 'Point',
//         'coordinates': [2.3524095467036545, 48.85649595954317]
//         }
//         },
//         {
//         'type': 'Feature',
//         'properties': {
//         'message': 'Bar',
//         'iconSize': [30, 30]
//         },
//         'geometry': {
//         'type': 'Point',
//         'coordinates': [7.443851322695044, 46.94659151804985]
//         }
//         },
//         {
//         'type': 'Feature',
//         'properties': {
//         'message': 'Baz',
//         'iconSize': [30, 30]
//         },
//         'geometry': {
//         'type': 'Point',
//         'coordinates': [4.8997614329140555, 52.36802402130961]
//         }
//         }
//     ]
// };
//         // Add markers to the map.
//     for (const marker of geojson.features) {
//     // Create a DOM element for each marker.
//     const el = document.createElement('div');
//     const width = marker.properties.iconSize[0];
//     const height = marker.properties.iconSize[1];
//     el.className = 'marker';
//     el.style.backgroundImage = `url(./public/img/icon/marker.svg)`;
//     el.style.width = `${width}px`;
//     el.style.height = `${height}px`;
//     el.style.backgroundSize = '100%';

//     el.addEventListener('click', () => {
//     window.alert(marker.properties.message);
//     });

//     // Add markers to the map.
//     new mapboxgl.Marker(el)
//     .setLngLat(marker.geometry.coordinates)
//     .addTo(map);
//     }
}






    
});