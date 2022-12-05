const trainStationLocation = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { name: "Gare SNCF de Montparnasse" },
            geometry: {
                coordinates: [2.317613070737252, 48.83887430177822],
                type: "Point",
            },
        },
        {
            type: "Feature",
            properties: { name: "Gare SNCF de Rennes" },
            geometry: {
                coordinates: [-1.6727429189624843, 48.10300286845728],
                type: "Point",
            },
        },
        {
            type: "Feature",
            properties: { name: "Gare SNCF de Bordeaux-St-Jean" },
            geometry: {
                coordinates: [-0.5560368928854302, 44.825637849211944],
                type: "Point",
            },
        },
    ],
};

export default trainStationLocation;
