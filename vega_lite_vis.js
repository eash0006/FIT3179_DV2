var vg_1 = "choropleth_map.json";
var vg_2 = "proportional_symbol.json";
var vg_3 = "bin_map.json";

vegaEmbed("#choropleth", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#proportional", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#binmap", vg_3).then(function(result) {
}).catch(console.error);