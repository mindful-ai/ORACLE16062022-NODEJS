var txt = "";
var n = [45, 6, 7, 8, 90, 100]

function myFunction(a) { txt = txt + a + ' ---> '; }
function myFunction1(a, b, c) { return a ** 2; }


// ---------------------- forEach

n.forEach(myFunction);
console.log(txt)

// ---------------------- map

var n2 = n.map(myFunction1);
console.log(n2);

// ---------------------- filter

var n3 = n.filter((a) => a > 18)
console.log(n3)

// ---------------------- reduce

var L = [1, 2, 3, 4, 5]; // 15
var n4 = L.reduce((a, b) => (a + b));
console.log(n4);

// ---------------------- some, every

console.log(n.some(a => a > 18)); // true
console.log(n.every(a => a > 18)); // false