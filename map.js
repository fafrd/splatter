// STYLES

var roadkillStyles = {
	'Amphibian':
	[new ol.style.Style({
		image: new ol.style.Circle({
			radius: 3,
			fill: new ol.style.Fill({
                color: 'magenta'
            }),
			stroke: new ol.style.Stroke({
			color: 'magenta',
			width: 1
			})
		})
	})],
	'Bird':
	[new ol.style.Style({
		image: new ol.style.Circle({
			radius: 3,
			fill: new ol.style.Fill({
                color: 'blue'
            }),
			stroke: new ol.style.Stroke({
			color: 'blue',
			width: 1
			})
		})
	})],
	'Mammal (Large)': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 6,
			fill: new ol.style.Fill({
                color: 'red'
            }),
			stroke: new ol.style.Stroke({
			color: 'red',
			width: 1
			})
		})
	})],
	'Mammal (Medium)': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 4.5,
			fill: new ol.style.Fill({
                color: 'orange'
            }),
			stroke: new ol.style.Stroke({
			color: 'orange',
			width: 1
			})
		})
	})],
	'Mammal (Small)': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 3,
			fill: new ol.style.Fill({
                color: 'yellow'
			}),
			stroke: new ol.style.Stroke({
			color: 'yellow',
			width: 1
			})
		})
	})],
	'Reptile': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 3,
			fill: new ol.style.Fill({
                color: 'green'
            }),
			stroke: new ol.style.Stroke({
			color: 'green',
			width: 1
			})
		})
	})]
}

var styleFunction = function(feature, resolution) {
	return roadkillStyles[feature.getProperties().Species_Ca]
}

// LAYERS
var layer_basemap = new ol.layer.Tile({
	source: new ol.source.OSM()
})

var layer_CROS = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'CROS',
	style: styleFunction
	//visible: false
})

var layer_cdfw = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cdfw.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'CROS'
	//style: styleFunction
	//visible: false
})
//Layer Listeners
var layerListeners = {
    featureclick: function(e) {
        log(e.object.name + " says: " + e.feature.id + " clicked.");
        return false;
    },
    nofeatureclick: function(e) {
        log(e.object.name + " says: No feature clicked.");
    }
};

// Map

var map = new ol.Map({
	target: 'map',
	layers: [
		layer_basemap, 
		layer_cdfw,
		layer_CROS 
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-120, 37.3]),
		zoom: 5.5
	}),

	eventListeners: {
	        featureover: function(e) {
	            e.feature.renderIntent = "select";
	            e.feature.layer.drawFeature(e.feature);
	            console.log("Map says: Pointer entered " + e.feature.id + " on " + e.feature.layer.name);
	        },
	        featureout: function(e) {
	            e.feature.renderIntent = "default";
	            e.feature.layer.drawFeature(e.feature);
	            console.log("Map says: Pointer left " + e.feature.id + " on " + e.feature.layer.name);
	        },
	        featureclick: function(e) {
	            console.log("Map says: " + e.feature.id + " clicked on " + e.feature.layer.name);
	        }
	    }
});
