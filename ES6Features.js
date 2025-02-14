// some advane es6 features

// 1. Arrow functions

const myArrowFunction = (a,b) => a+b;

console.log(myArrowFunction(2,3));

// 2. Template literals

const name = 'John';

console.log(`Hello ${name}`);

// 3. Destructuring


const person = {
    firstName: 'John',
    lastName: 'Doe'
};


const { firstName, lastName } = person;

console.log(firstName, lastName);

// 4. Default parameters

function greet(name = 'John'){
    console.log('Hello ' + name);
}

greet();

// 5. Rest parameters

function sum(...numbers){
    return numbers.reduce((a,b) => a+b);
}

console.log(sum(1,2,3,4,5));

// 6. Spread operator

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

// one more example

const person1 = {
    name: 'John',
    age: 25
};

const person2 = {
    ...person1,
    address: '123 Main St'
};

console.log(person2);


// 7. Classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('Hello ' + this.name);
    }
}

const person3 = new Person('John', 25);

person3.greet();

// 8. Promises

function getServerResponse(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ server: 'Server response' });
        }, 1000);
    });
}

function displayResponse(response){
    console.log(response);
}

getServerResponse().then(response => {
    displayResponse(response);
});

// 9. Async/await

async function getServerResponseAsync(){
    const response = await getServerResponse();
    displayResponse(response);
}

getServerResponseAsync();

// 10. Modules

// ES6 introduced a new way to organize and structure code using modules. Modules allow you to split your code into multiple files and import/export functionality between them.

// Example of modules

// // math.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// // app.js


// import { add, subtract } from './math.js';

// console.log(add(2, 3)); // 5
// console.log(subtract(5, 2)); // 3

// Modules provide a clean and organized way to manage code and dependencies in your applications.

// 11. Map and Set

// ES6 introduced two new data structures: Map and Set.

// Map is a collection of key-value pairs where each key can be of any type. It allows you to store and retrieve values based on a key.

// Set is a collection of unique values where each value can occur only once. It allows you to store and retrieve values without duplicates.

// Example of Map and Set

const map = new Map();
map.set('name', 'John');
map.set('age', 25);

console.log(map.get('name')); // John

const set = new Set([1, 2, 3, 4, 5, 5]);

console.log(set); // Set { 1, 2, 3, 4, 5 }

// Map and Set provide efficient ways to store and retrieve data in your applications.

// 12. Generators

// Generators are functions that can be paused and resumed, allowing you to control the flow of execution. They are defined using the function* syntax and yield keyword.

// Example of Generators

function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next()); // { value: 1, done: false }

console.log(gen.next()); // { value: 2, done: false }

console.log(gen.next()); // { value: 3, done: false }

console.log(gen.next()); // { value: undefined, done: true }

// Generators are useful for creating iterators and asynchronous operations in JavaScript.

// 13. Proxy

// Proxy is a new feature in ES6 that allows you to intercept and customize operations on objects. It provides a way to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.

// Example of Proxy

const handler = {
    get: function(target, prop){
        return prop in target ? target[prop] : 'Property does not exist';
    }
};

const proxy = new Proxy({ name: 'John' }, handler);

console.log(proxy.name); // John

console.log(proxy.age); // Property does not exist

// Proxy provides a powerful way to control and customize object behavior in JavaScript.

// 14. Reflect

// Reflect is a new built-in object in ES6 that provides methods for interceptable JavaScript operations. It allows you to perform meta-programming tasks such as defining custom behavior for fundamental operations on objects.

// Example of Reflect

const person4 = {

    name: 'John',
    age: 25
};

console.log(Reflect.has(person4, 'name')); // true

console.log(Reflect.has(person4, 'address')); // false

// Reflect provides a way to perform meta-programming tasks in JavaScript.

// 15. Symbols

// Symbols are a new primitive data type in ES6 that allow you to create unique and immutable values. They are often used as property keys in objects to avoid naming conflicts.

// Example of Symbols

const sym1 = Symbol('foo');
const sym2 = Symbol('foo');

console.log(sym1 === sym2); // false

// Symbols provide a way to create unique and immutable values in JavaScript.

// 16. BigInt

// BigInt is a new primitive data type in ES6 that allows you to work with arbitrarily large integers. It provides a way to represent and perform operations on integers beyond the maximum safe integer limit in JavaScript.

// Example of BigInt

const bigInt = 1234567890123456789012345678901234567890n;


console.log(bigInt);



