# sheet-to-array-of-objects
Convert Public Google Spreadsheet into JavaScript Array of Objects

# What

![alt pic](https://raw.githubusercontent.com/hotelsoft/Sheet2AOB/master/pic.png)

# Install

```
npm install sheet-to-array-of-objects
```

# Try

```
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
```