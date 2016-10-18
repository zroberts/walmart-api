
var walton = require('walton');
//var myApp = require('./provider.js');

var test = {
	"type"			: "search",
	"query" 		: "Playstation 4",
	//"itemId" 		: "174126186",
	//"categoryId" 	: "3914",
	//"start" 		: "1",
	"sort" 			: "price",
	"order" 		: "desc",
	"numItems"		: "10",
	"format"		: "json",
	"responseGroup" : "base",
	"facet" 		: "on"

};

/*
	id
	// don't have'
	name
	price
	saleprice
	category
	url -> if possible
	image url
	provder (walmart)
	reviews -> if possible
*/

// Return 10 items as object, push those objects into an array (end goal)
walton(test, function(resp){
	//console.log(resp);
	//console.log(resp.items.length);
	var outPut = [];
	for(var i = 0; i < resp.items.length; i++){
		var tempItem = {
			'id': resp.items[i].itemId,
			'sku' : 'No SKU Available',
			'name' : resp.items[i].name,
			'price': resp.items[i].msrp,
			'saleprice': resp.items[i].salePrice,
			'category': resp.items[i].categoryPath,
			'url': resp.items[i].productUrl,
			'imageUrl': resp.items[i].mediumImage,
			'provider': 'walmart',
			'reviews': resp.items[i].customerRating
		};
		outPut.push(tempItem);
	};

	console.log(outPut);
});

//myApp.productSearch("Playstation 4");


/* required in index.js
var myApp = requres('provider.js');

modul.exports= { 
	find: myApp.productSearch
}

*/