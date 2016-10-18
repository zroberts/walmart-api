
var walton = require('walton');


module.exports = {
	productSearch: function(query){
		var test = {
			"type" :  "search",
			"query":  query,
			"sort": "relevance", 
			"order": "asc",
			"numItems" : "1",
			"format":  "json",
			"responseGroup" : "base", 
			"facet" : "on",
			"facet.filter" : "brand:Samsung"
			//"facet.range" : "PRICE[100 TO 200]"
		}

		var test2 = walton(test, function(err, resp){
			if(err){
				console.log(err);
				return;
			}
			
		});

	}
}