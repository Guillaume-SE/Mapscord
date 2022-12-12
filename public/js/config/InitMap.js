import { street, satellite, topographie, cyclingRoutes } from '../other/MapStyle.js';

    // Init map
const map = L.map('map', {
    center: [46.48361, 2.52639],
    zoom: 5,
    layers: [street]
});

export { map };