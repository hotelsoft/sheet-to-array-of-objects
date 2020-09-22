# sheet-to-array-of-objects
Convert Public Google Spreadsheet into JavaScript Array of Objects

# What

![alt pic](https://raw.githubusercontent.com/hotelsoft/Sheet2AOB/master/pic.png)

# Install

```
npm install sheet-to-array-of-objects
```

# Try

```js
var SheetToArrayOfObjects = require('sheet-to-array-of-objects');
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

If the document has more than one tab, you can specify which tab by using the following:
```js
{
	key: "1GMWX3mMBPRnaIC3lTlRQfDhayELKFmpJWLYu2eM20dQ",
	index: 1
}
```

By default, it is 1.