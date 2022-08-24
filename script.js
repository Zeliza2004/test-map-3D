	mapboxgl.accessToken = 'pk.eyJ1IjoiY2FudWVsIiwiYSI6ImNsNXc1cWV0aDA4MTkza3BpOXBrZTB1bnEifQ.xVXOiIFqSZOy0tvJG7fd7w';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/canuel/cl5w3sbua001d15mturibkafg', // style URL
        zoom: 10, // starting zoom
        center: [0.58478, 49.24318] // starting position
    });

    map.on('load', () => {
        // Load an image from an external URL.
        map.loadImage(
            'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
            (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                map.addImage('cat', image);

                // Add a data source containing one point feature.
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [0.58478, 49.24318]
                                }
                            }
                        ]
                    }
                });

                // Add a layer to use the image to represent the data.
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point', // reference the data source
                    'layout': {
                        'icon-image': 'cat', // reference the image
                        'icon-size': 0.25
                    }
                });
            }
        );
    });
