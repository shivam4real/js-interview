// data type in javascript

// 1. Number
var num1 = 42;
var num2 = 42.0;
var num3 = 42.3;

console.log(num1, num2, num3);

// 2. String
var str1 = "Hello";
var str2 = 'World';
var str3 = `Hello World`;

console.log(str1, str2, str3);


// 3. Boolean
var bool1 = true;
var bool2 = false;

console.log(bool1, bool2);


// 4. Undefined

var a;
console.log(a);

// 5. Null

var b = null;
console.log(b);

// 6. Object

var obj = {
    name: 'John',
    age: 25
};

console.log(obj);

// 7. Array

var arr = [1, 2, 3, 4, 5];

console.log(arr);

// 8. Function

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

// 9. Symbol

var sym1 = Symbol('foo');
var sym2 = Symbol('foo');

console.log(sym1 === sym2); // false


// 10. BigInt

var bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// 11. Date

var date = new Date();
console.log(date);


// 12. RegExp

var reg = /ab+c/;

console.log(reg);

// 13. Error

var err = new Error('Something went wrong');
console.log(err);

// 14. Map

var map = new Map();
map.set('name', 'John');
map.set('age', 25);

console.log(map);

// 15. Set

var set = new Set([1, 2, 3, 4, 5,5]);
console.log(set);

// 16. WeakMap

var weakMap = new WeakMap();
var key = {};

weakMap.set(key, 'value');
console.log(weakMap);

// 17. WeakSet


var weakSet = new WeakSet();
var obj = { name: 'John' };

weakSet.add(obj);
console.log(weakSet);

// 18. ArrayBuffer

var buffer = new ArrayBuffer(16);
console.log(buffer);

// 19. DataView

var view = new DataView(buffer);

console.log(view);
