// https://geojson.io/#map=2/0/20 for easy modification/add new point
// for GeoJSON data, longitude before latitute

const developerJavascript = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Iron-Man",
                "techno": "Javascript"
            },
            "geometry": {
                "coordinates": [7.408543158259448, 43.73996704294689],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Black Widow",
                "techno": "Javascript"
            },
            "geometry": {
                "coordinates": [-4.464783857752906, 48.44950002078059],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Falcon",
                "techno": "PHP"
            },
            "geometry": {
                "coordinates": [-1.2866677017644008, 46.87228915765078],
                "type": "Point"
            }
        }
    ]
}

export { developerJavascript };