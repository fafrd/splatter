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

var styleFunction_birds = function(feature, resolution) {
	var brightness = (feature.getProperties().SENSITIVE_) * 4 / 100;
	if (brightness > 1) {brightness = 1};
	return [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 10,
			fill: new ol.style.Fill({
                color: 'hsla(61, 100%, 54%, ' + brightness + ')'
            })
		})
	})]
}

// LAYERS
var layer_basemap = new ol.layer.Tile({
	source: new ol.source.OSM()
})

var layer_CROS_amphibian = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros/cros_amphibian.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'California Roadkill Observation System - Amphibians',
	style: styleFunction
	//,visible: false
})

var layer_CROS_bird = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros/cros_bird.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'California Roadkill Observation System - Birds',
	style: styleFunction
	//,visible: false
})

var layer_CROS_mammal_lg = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros/cros_mammal_lg.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'California Roadkill Observation System - Mammals (Large)',
	style: styleFunction
	//,visible: false
})

var layer_CROS_mammal_med = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros/cros_mammal_med.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'California Roadkill Observation System - Mammals (Medium)',
	style: styleFunction
	//,visible: false
})

var layer_CROS_mammal_sm = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros/cros_mammal_sm.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'California Roadkill Observation System - Mammals (Small)',
	style: styleFunction
	//,visible: false
})

var layer_CROS_reptile = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cros/cros_reptile.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	eventListeners: layerListeners,
	name: 'California Roadkill Observation System - Reptiles',
	style: styleFunction
	//,visible: false
})

var layer_cdfw = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/cdfw.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'California Department of Fish and Wildlife Regions'
	//style: styleFunction
	,visible: false
})

var layer_mammaltracks = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/ds442.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'Mammal tracks counts in San Diego and LA Areas'
	//style: styleFunction
	,visible: false
})

var layer_birdareas = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/ds078.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'Important bird areas',
	style: styleFunction_birds
	//,visible: false
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
var scaleLineControl = new ol.control.ScaleLine();
var map = new ol.Map({
	target: 'map',
	controls: ol.control.defaults({
		attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
			collapsible: false
		})
	}).extend([
		scaleLineControl
	]),
	layers: [
		layer_basemap, 
		layer_CROS_amphibian, 
		layer_CROS_bird, 
		layer_CROS_mammal_lg, 
		layer_CROS_mammal_med, 
		layer_CROS_mammal_sm, 
		layer_CROS_reptile, 
		layer_cdfw,
        layer_mammaltracks,
        layer_birdareas
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
scaleLineControl.setUnits("us");
