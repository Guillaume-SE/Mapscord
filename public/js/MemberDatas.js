// https://geojson.io/#map=2/0/20 for easy modification/add new point
// for GeoJSON data, longitude before latitute

const userLocation = {
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
                "techno": "PHP"
            },
            "geometry": {
                "coordinates": [-4.464783857752906, 48.44950002078059],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Thor",
                "techno": "Wordpress"
            },
            "geometry": {
                "coordinates": [3.0344632192197594, 50.6308349017645],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Hulk",
                "techno": "Javascript"
            },
            "geometry": {
                "coordinates": [5.040430614551354, 47.3338449573981],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Antman",
                "techno": "PHP"
            },
            "geometry": {
                "coordinates": [0.22078877217430204, 43.836638602704994],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Captain America",
                "techno": "Wordpress"
            },
            "geometry": {
                "coordinates": [-1.2866677017644008, 46.87228915765078],
                "type": "Point"
            }
        }
    ]
};

export default userLocation;
