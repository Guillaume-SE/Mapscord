// https://geojson.io/#map=2/0/20 for easy modification/add new point

const userLocation = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Iron-Man"
            },
            "geometry": {
                "coordinates": [2.3520384891548076,48.85654632550046],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Hulk"
            },
            "geometry": {
                "coordinates": [4.83488334120284, 45.767637597693636],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Batman"
            },
            "geometry": {
                "coordinates": [-0.5798142059766747, 44.83787295655023],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Captain America"
            },
            "geometry": {
                "coordinates": [-4.485028755278336, 48.39127105403833],
                "type": "Point"
            }
        }
    ]
};

export default userLocation;
