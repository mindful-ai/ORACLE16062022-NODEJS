function Person(first, last, age, eye) {
    this.firstName= first;
    this.lastName= last;
    this.age= age;
    this.eyeColor= eye;
}

var p1 = new Person('Anil', 'Kumar', 30, 'black');
var p2 = new Person('Sunil', 'Raj', 30, 'brown');

console.log(p1);
console.log(p2);