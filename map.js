// STYLES

var dotradius = 2;

var roadkillStyles = {
	'Amphibian':
	[new ol.style.Style({
		image: new ol.style.Circle({
			radius: dotradius,
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
			radius: dotradius,
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
			radius: dotradius,
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
			radius: dotradius,
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
			radius: dotradius,
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
			radius: dotradius,
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
	var opacity = (feature.getProperties().SENSITIVE_) * 4 / 100;
	if (opacity > 1) {opacity = 1};
	return [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 10,
			fill: new ol.style.Fill({
                color: 'hsla(61, 100%, 54%, ' + opacity + ')'
            })
		})
	})]
}

var styleFunction_population = function(feature, resolution) {
	//var hue = (feature.getProperties().Population) / 10116705 * 50;
	var hue = 0;
	var pop = feature.getProperties().Population;
	//30000
	//180000
	//530000
	//2110000

	if( pop < 30000 ) hue = 50;
	else if( pop < 180000 ) hue = 37.5;
	else if( pop < 530000 ) hue = 25;
	else if( pop < 2110000 ) hue = 12.5;
	else hue = 0;

	//if(lum > 100) {lum = 100}
	console.log(hue)
	console.log('hsla(304, 50%, 50%, 0.5)')
	return [new ol.style.Style({
		fill: new ol.style.Fill({
            color: 'hsla(' + hue + ' , 50%, 50%, 0.7)'
            //color: 'hsla(304, 50%, 23%, 0.5)'
        }),
        stroke: new ol.style.Stroke({
			color: '#3399CC',
			width: 1.25
		})
    })]
}

var styleFunction_traveltime = function(feature, resolution) {
	//var hue = (feature.getProperties().Population) / 10116705 * 50;
	var hue = 0;
	var traveltime = feature.getProperties().Travel_t_1;
	
	if( traveltime < 17.7 ) hue = 200;
	else if( traveltime < 22.2 ) hue = 261;
	else if( traveltime < 26.8 ) hue = 300;
	else if( traveltime < 31.3 ) hue = 342;
	else hue = 359;

	//if(lum > 100) {lum = 100}
	console.log(hue)
	console.log('hsla(304, 50%, 50%, 0.5)')
	return [new ol.style.Style({
		fill: new ol.style.Fill({
            color: 'hsla(' + hue + ' , 50%, 50%, 0.7)'
            //color: 'hsla(304, 50%, 23%, 0.5)'
        }),
        stroke: new ol.style.Stroke({
			color: '#3399CC',
			width: 1.25
		})
    })]
}

var styleFunction_poverty = function(feature, resolution) {
	//var hue = (feature.getProperties().Population) / 10116705 * 50;
	var hue = 0;
	var poverty = feature.getProperties().Pers_pov;

	if( poverty < 11.3 ) hue = 135;
	else if( poverty < 15 ) hue = 108;
	else if( poverty < 18.8 ) hue = 67;
	else if( poverty < 22.5 ) hue = 30;
	else hue = 0;

	//if(lum > 100) {lum = 100}
	console.log(hue)
	console.log('hsla(304, 50%, 50%, 0.5)')
	return [new ol.style.Style({
		fill: new ol.style.Fill({
            color: 'hsla(' + hue + ' , 50%, 50%, 0.7)'
            //color: 'hsla(304, 50%, 23%, 0.5)'
        }),
        stroke: new ol.style.Stroke({
			color: '#3399CC',
			width: 1.25
		})
    })]
}

var styleFunction_popden = function(feature, resolution) {
	//var hue = (feature.getProperties().Population) / 10116705 * 50;
	var hue = 0;
	var popdensity = feature.getProperties().pop_sq_m_2;

	if( popdensity < 100 ) hue = 175;
	else if( popdensity < 1300 ) hue = 241;
	else hue = 300;

	//if(lum > 100) {lum = 100}
	console.log(hue)
	console.log('hsla(304, 50%, 50%, 0.5)')
	return [new ol.style.Style({
		fill: new ol.style.Fill({
            color: 'hsla(' + hue + ' , 50%, 50%, 0.7)'
            //color: 'hsla(304, 50%, 23%, 0.5)'
        }),
        stroke: new ol.style.Stroke({
			color: '#3399CC',
			width: 1.25
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
	,visible: false
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
	,visible: false
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
	,visible: false
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
	,visible: false
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
	,visible: false
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
	,visible: false
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
	,visible: false
})

var layer_trafficvol = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/trafficvol.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'Traffic volumes 2014'
	//style: styleFunction
	,visible: false
})

var layer_population = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/popden.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'California population',
	style: styleFunction_population
	,visible: false
})

var layer_traveltime = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/popden.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'Travel time',
	style: styleFunction_traveltime
	,visible: false
})

var layer_poverty = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/popden.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'California poverty',
	style: styleFunction_poverty
	,visible: false
})

var layer_popden = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'data/popden.geojson', 
		format: new ol.format.GeoJSON({
			defaultDataProjection: 'EPSG:4326', 
			projection: 'EPSG:3857'
		})
	}),
	name: 'California population density',
	style: styleFunction_popden
	,visible: false
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
		layer_population,
		layer_traveltime,
		layer_poverty,
        layer_popden,
		layer_cdfw,
		layer_CROS_amphibian, 
		layer_CROS_bird, 
		layer_CROS_mammal_lg, 
		layer_CROS_mammal_med, 
		layer_CROS_mammal_sm, 
		layer_CROS_reptile, 
        layer_mammaltracks,
        layer_birdareas,
        layer_trafficvol
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
