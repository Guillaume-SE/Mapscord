// https://geojson.io/#map=2/0/20 for easy modification/add new point
// for GeoJSON data, longitude before latitute

const developerPHP = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Thor",
                "techno": "PHP"
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
                "techno": "PHP"
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
        }
    ]
}

export { developerPHP };