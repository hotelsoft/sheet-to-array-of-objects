var http = require('http');

var SheetToArrayOfObjects = function (config, callback) {
	var SpreadSheetKey = config.key;
	var index = config.index ?? 1;
	http.get("http://spreadsheets.google.com/feeds/cells/" + SpreadSheetKey + "/" + index + "/public/basic?alt=json",
			function (response) {
				// Continuously update stream with data
				var body = '';
				response.on('data', function (d) {
					body += d;
				});
				response.on('end', function () {
					// Data reception is done, do whatever with it!
					try {
						var parsed = convertArrayToArrayOfObjects(JSON.parse(body));
						callback(null, parsed);
					} catch (ex) {
						callback(ex);
					}
				});
			}).on('error', function (e) {
		console.log("Got error: " + e.message);
		callback(e.message);
	});
};


function convertArrayToArrayOfObjects(googleDocJSON) {
	var fullData = [];

	for (var i in googleDocJSON.feed.entry) {
		var ColumnId = googleDocJSON.feed.entry[i].title.$t.charAt(0);
		var RowId = googleDocJSON.feed.entry[i].title.$t.substr(1) - 1;
		if (fullData[RowId] === undefined) {
			fullData[RowId] = {}
		}
		fullData[RowId][ColumnId] = googleDocJSON.feed.entry[i].content.$t;
	}
	var finalData = [];
	if (fullData.length > 1) {
		finalData = fullData.filter(function (v, i) {
			return i !== 0;
		}).map(function (v) {
			var x = {};
			Object.keys(v).map(function (i) {
				x[fullData[0][i]] = v[i];
			});
			return x;
		});

	}
	return finalData;
}
if (typeof module != "undefined")
	module.exports = SheetToArrayOfObjects;