
$(".pre1").click(function(){
	document.getElementById("info").innerHTML = "Preset 1";
});

$(".pre2").click(function(){
	document.getElementById("info").innerHTML = "Preset 2";
});

$(".pre3").click(function(){
	document.getElementById("info").innerHTML = "Preset 3";
});

$(".pre4").click(function(){
	document.getElementById("info").innerHTML = "Preset 4";
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
};

function birds(){
	allOff();
	layer_birdareas.setVisible(true);
	layer_CROS_bird.setVisible(true);
};