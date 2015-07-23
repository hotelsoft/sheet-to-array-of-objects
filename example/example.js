var SheetToArrayOfObjects = require('../lib/index');

SheetToArrayOfObjects({
	key: "1GMWX3mMBPRnaIC3lTlRQfDhayELKFmpJWLYu2eM20dQ"
}, function (err, data) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(data);
});