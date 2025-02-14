// Js funtions

// Normanl js funtion

function myFunction(a,b){
    return a+b;
}

console.log(myFunction(2,3));

// arrow funtion

const myArrowFunction = (a,b) => a+b;

console.log(myArrowFunction(2,3));

// difference between normal and arrow funtion

// 1. Normal funtion has its own this keyword
// 2. Arrow funtion does not have its own this keyword
// 3. Normal funtion does not have arguments object
// 4. Arrow funtion does not have arguments object
// 5. Normal funtion are hoisted
// 6. Arrow funtion are not hoisted

// callback funtion

function greeting(name){
    console.log('Hello ' + name);
}

function processUserInput(callback){
    var name = 'John';
    callback(name);
}

processUserInput(greeting);


// Callbacks are essential for handling asynchronous operations in JavaScript, allowing you to define what should happen after an operation completes.

// Callbacks are functions that are invoked after another function completes its execution. They are used to make sure that a function is not going to run before a task is completed (such as data retrieval).

// Callbacks can be synchronous or asynchronous. Synchronous callbacks are executed immediately after the completion of the function that returns it. Asynchronous callbacks are executed at a later point in time.

// Callbacks are used in a variety of ways, such as event handling, AJAX requests, and timers.

// Callbacks are a powerful tool in JavaScript, but they can also lead to callback hell, a situation where multiple nested callbacks make the code difficult to read and maintain. To avoid this, you can use promises or async/await to handle asynchronous operations in a more readable way.

// callback hell


function getServerResponse(callback){
    setTimeout(function(){
        callback({ server: 'Server response' });
    }, 1000);
}

function displayResponse(response){
    console.log(response);
}

getServerResponse(function(response){
    displayResponse(response);
});


// Promises

// Promises are a built-in feature in JavaScript that allow you to work with asynchronous operations in a more readable and maintainable way. A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises have three states: pending, fulfilled, and rejected. When a promise is pending, it means that the asynchronous operation is still in progress. When a promise is fulfilled, it means that the operation has completed successfully. When a promise is rejected, it means that the operation has failed.

// Promises have two main methods: then() and catch(). The then() method is used to handle the successful completion of a promise, while the catch() method is used to handle any errors that occur during the operation.

// Promises can be chained together using the then() method, allowing you to perform multiple asynchronous operations in sequence.

// Promises are a powerful tool for handling asynchronous operations in JavaScript, and they can help you write cleaner and more maintainable code.

// Example of promise

function getServerResponse(){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({ server: 'Server response' });
        }, 1000);
    });
}

function displayResponse(response){
    console.log(response);
}

getServerResponse().then(function(response){
    displayResponse(response);
});


// Example 2 of promise

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100);
    if (number % 2 === 0) {
        resolve(number);
    } else {
        reject('Odd number');
    }
}
);

promise.then((number) => {
    console.log('Even number:', number);
}).catch((error) => {
    console.log('Error:', error);
});


// promise.all

// The Promise.all() method is a static method that takes an array of promises as an input and returns a single promise that resolves when all of the promises in the input array have resolved, or rejects when any of the promises in the input array have rejected.

// Promise.all() is useful when you need to wait for multiple asynchronous operations to complete before proceeding with the rest of your code. It allows you to run multiple asynchronous operations in parallel and wait for all of them to complete before continuing.

// resolves promises in the order they appear in the input array, regardless of the order in which the individual promises resolve. This means that the resulting array of values will maintain the same order as the input array of promises

// Example of promise.all

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});



// Async/Await

// Async/await is a modern feature in JavaScript that allows you to work with asynchronous operations in a more synchronous way. Async/await is built on top of promises and provides a cleaner and more readable syntax for handling asynchronous code.

// The async keyword is used to define an asynchronous function, which returns a promise. The await keyword is used to pause the execution of an async function until a promise is settled (either fulfilled or rejected).

// Async/await allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain.

// Example of async/await

async function getServerResponse(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({ server: 'Server response' });
        }, 1000);
    });
}

async function displayResponse(){
    const response = await getServerResponse();
    console.log(response);
}

displayResponse();


// Example 2 of async/await

const getNumber = () => {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 100);
        if (number % 2 === 0) {
            resolve(number);
        } else {
            reject('Odd number');
        }
    });
}

const processNumber = async () => {
    try {
        const number = await getNumber();
        console.log('Even number:', number);
    } catch (error) {
        console.log('Error:', error);
    }
}

processNumber();







