// STYLES

var roadkillStyles = {
	'Amphibian':
	[new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
			color: 'rgb(0, 204, 0)'
		}),
			stroke: new ol.style.Stroke({
			color: 'rgb(0, 204, 0)',
			width: 1
			})
		})
	})],
	'Bird':
	[new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
			color: 'rgb(102, 153, 255)'
		}),
			stroke: new ol.style.Stroke({
			color: 'rgb(102, 153, 255)',
			width: 1
			})
		})
	})],
	'Mammal (Large)': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
			color: 'rgb(102, 51, 0)'
		}),
			stroke: new ol.style.Stroke({
			color: 'rgb(102, 51, 0)',
			width: 1
			})
		})
	})],
	'Mammal (Medium)': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
			color: 'rgb(204, 136, 0)'
		}),
			stroke: new ol.style.Stroke({
			color: 'rgb(204, 136, 0)',
			width: 1
			})
		})
	})],
	'Mammal (Small)': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
			color: 'rgb(255, 153, 255)'
		}),
			stroke: new ol.style.Stroke({
			color: 'rgb(255, 153, 255)',
			width: 1
			})
		})
	})],
	'Reptile': [new ol.style.Style({
		image: new ol.style.Circle({
			radius: 5,
			fill: new ol.style.Fill({
			color: 'rgb(0, 77, 0)'
		}),
			stroke: new ol.style.Stroke({
			color: 'rgb(0, 77, 0)',
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
	name: 'CROS',
	style: styleFunction
	//visible: false
})

// MAP

var map = new ol.Map({
	target: 'map',
	layers: [
		layer_basemap, 
		layer_CROS 
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-120, 37.3]),
		zoom: 5.5
	})
});