var text = "Today the temperatures are ranging between -12.45 and +13.567 in the lab";
console.log(text.replace(/[-+]?\d+\.\d+/gi, '0000'));
console.log(/[-+]?(\d+)\.(\d+)/.exec(text));