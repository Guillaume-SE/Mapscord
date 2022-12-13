// https://geojson.io/#map=2/0/20 for easy modification/add new point
// for GeoJSON data, longitude before latitute

const developerWordpress = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Spiderman",
                "Ville": "Route du Rupt du Bâmont",
                "techno": "Wordpress"
            },
            "geometry": {
                "coordinates": [6.789640325761923, 47.97553358760692],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Batman",
                "Ville": "Labastide-Paumès",
                "techno": "Wordpress"
            },
            "geometry": {
                "coordinates": [0.9462048227928506, 43.343575437825734],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Nick Fury",
                "Ville": "Les Marquiers",
                "techno": "Wordpress"
            },
            "geometry": {
                "coordinates": [-0.07377372903155788, 49.013253747423306],
                "type": "Point"
            }
        }
    ]
}

export { developerWordpress };