

$(document).ready(function()
{
	/*
	CROS_a
	CROS_b
	CROS_ml
	CROS_mm
	CROS_ms
	CROS_r
	popdensity
	population
	traveltime
	poverty
	birds
	*/
	$('.popdensity').mouseenter(function()
	{
		$('.abc').append("<b>Population Density By County</b>");
	});
	$('.popdensity').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.population').mouseenter(function()
	{
		$('.abc').append("<b>Population By County</b>");
	});
	$('.population').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.traveltime').mouseenter(function()
	{
		$('.abc').append("<b>Average Travel Time to Work By County</b>");
	});
	$('.traveltime').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.poverty').mouseenter(function()
	{
		$('.abc').append("<b>Porvery Rate By County</b>");
	});
	$('.poverty').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.birds').mouseenter(function()
	{
		$('.abc').append("<b>Important Bird Sites</b>");
	});
	$('.birds').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.CROS_a').mouseenter(function()
	{
		$('.abc').append("<b>Amphibian Death Location: purple plot points</b>");
	});
	$('.CROS_a').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.CROS_b').mouseenter(function()
	{
		$('.abc').append("<b>Bird Death Location: blue plot points</b>");
	});
	$('.CROS_b').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.CROS_ml').mouseenter(function()
	{
		$('.abc').append("<b>Large Mammal Death Location: red plot points</b>");
	});
	$('.CROS_ml').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.CROS_mm').mouseenter(function()
	{
		$('.abc').append("<b>Medium Mammal Death Location: orange plot points</b>");
	});
	$('.CROS_mm').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.CROS_ms').mouseenter(function()
	{
		$('.abc').append("<b>Small Mammal Death Location: yellow plot points</b>");
	});
	$('.CROS_ms').mouseleave(function()
	{
		$('.abc').empty();
	});

	$('.CROS_r').mouseenter(function()
	{
		$('.abc').append("<b>Reptile Death Location: green plot points</b>");
	});
	$('.CROS_r').mouseleave(function()
	{
		$('.abc').empty();
	});

});

function cdfw(){
	layer_cdfw.setVisible(!layer_cdfw.getVisible());
};

function roadkill()
{
	allOff();
	layer_CROS_bird.setVisible(true);
	layer_CROS_amphibian.setVisible(true);
	layer_CROS_mammal_lg.setVisible(true);
	layer_CROS_mammal_med.setVisible(true);
	layer_CROS_mammal_sm.setVisible(true);
	layer_CROS_reptile.setVisible(true);
};

function allOff()
{
	layer_CROS_bird.setVisible(false);
	layer_CROS_amphibian.setVisible(false);
	layer_CROS_mammal_lg.setVisible(false);
	layer_CROS_mammal_med.setVisible(false);
	layer_CROS_mammal_sm.setVisible(false);
	layer_CROS_reptile.setVisible(false);
	layer_cdfw.setVisible(false);
	layer_mammaltracks.setVisible(false);
	layer_birdareas.setVisible(false);
	layer_population.setVisible(false);
	layer_popden.setVisible(false);
	layer_poverty.setVisible(false);
	layer_traveltime.setVisible(false);

	CROS_bird_bool = false;
	CROS_amphibian_bool = false;
	CROS_mammalL_bool = false;
	CROS_mammalM_bool = false;
	CROS_mammalS_bool = false;
	CROS_reptile_bool = false;
	denPop_bool = false;
	population_bool = false;
	travelTime_bool = false;
	poverty_bool = false;
	birdsite_bool = false

	buildLegend();
};

function LegendAppend(input)
{
	$(".legend").append("<div></div>")
	var newDiv = $($($(".legend").children()).last())
	newDiv.css("background-image", "url('" + input + "')")
	newDiv.css("background-size", "100% 100%")
	newDiv.css("float", "left")
	newDiv.css("height", "100%")
	newDiv.css("width", "10%")
}

function buildLegend()
{
	$(".legend").empty()

	if(CROS_bird_bool || CROS_amphibian_bool || CROS_mammalL_bool || CROS_mammalM_bool || CROS_mammalS_bool || CROS_reptile_bool)
		LegendAppend('assets/images/legend/CROS.jpg')
	if(denPop_bool)
		LegendAppend('assets/images/legend/popden.png')
	if(population_bool)
		LegendAppend('assets/images/legend/population.png')
	if(travelTime_bool)
		LegendAppend('assets/images/legend/travelTime.png')
	if(poverty_bool)
		LegendAppend('assets/images/legend/poverty.png')
	if(birdsite_bool)
		LegendAppend('assets/images/legend/birdsites.png')
}

var CROS_bird_bool = false;
function CROS_bird()
{
	layer_CROS_bird.setVisible(!CROS_bird_bool)
	CROS_bird_bool = !CROS_bird_bool
	buildLegend()
}

var CROS_amphibian_bool = false;
function CROS_amphibian()
{
	layer_CROS_amphibian.setVisible(!CROS_amphibian_bool)
	CROS_amphibian_bool = !CROS_amphibian_bool
	buildLegend()
}

var CROS_mammalL_bool = false;
function CROS_mammalL()
{
	CROS_mammalL_bool = !CROS_mammalL_bool
	layer_CROS_mammal_lg.setVisible(CROS_mammalL_bool)
	buildLegend()
}

var CROS_mammalM_bool = false;
function CROS_mammalM()
{
	layer_CROS_mammal_med.setVisible(!CROS_mammalM_bool)
	CROS_mammalM_bool = !CROS_mammalM_bool
	buildLegend()
}

var CROS_mammalS_bool = false;
function CROS_mammalS()
{
	layer_CROS_mammal_sm.setVisible(!CROS_mammalS_bool)
	CROS_mammalS_bool = !CROS_mammalS_bool
	buildLegend()
}

var CROS_reptile_bool = false;
function CROS_reptile()
{
	layer_CROS_reptile.setVisible(!CROS_reptile_bool)
	CROS_reptile_bool = !CROS_reptile_bool
	buildLegend()
}

var birdsite_bool = false
function birds(){
	birdsite_bool = !birdsite_bool
	layer_birdareas.setVisible(birdsite_bool);
	buildLegend()
};

function stateLayer_off(input, boolInput)
{
	layer_popden.setVisible(false);
	layer_population.setVisible(false);
	layer_traveltime.setVisible(false);
	layer_poverty.setVisible(false);
	denPop_bool = false
	population_bool = false
	travelTime_bool = false
	poverty_bool = false

	switch(input)
	{
		case 1: //denPop_bool
			layer_popden.setVisible(!boolInput)
			denPop_bool = !boolInput
			break
		case 2: //population
			layer_population.setVisible(!boolInput)
			population_bool = !boolInput
			break
		case 3: //travelTime
			layer_traveltime.setVisible(!boolInput)
			travelTime_bool = !boolInput
			break
		case 4: //poverty
			layer_poverty.setVisible(!boolInput)
			poverty_bool = !boolInput
			break
	}
}

var denPop_bool = false
function denRoadkill(){
	stateLayer_off(1, denPop_bool)
	buildLegend()
};

var population_bool = false
function population(){
	stateLayer_off(2, population_bool)
	buildLegend()
}

var travelTime_bool = false
function travelTime(){
	stateLayer_off(3, travelTime_bool)
	buildLegend()
}

var poverty_bool = false
function poverty(){
	stateLayer_off(4, poverty_bool)
	buildLegend()
}