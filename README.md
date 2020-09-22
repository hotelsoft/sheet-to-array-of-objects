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
var SheetToArrayOfObjects = require('sheet-to-array-of-objects');
SheetToArrayOfObjects({
	key: "1GMWX3mMBPRnaIC3lTlRQfDhayELKFmpJWLYu2eM20dQ"
}, function (err, data, title) {
	if (err) {
		console.log(err);
		return;
	}
	console.log($`Got json for ${title}`, data);
});
```