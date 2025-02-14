// Is Javascript Statically typed or dynamically?
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you can assign different types of values to the same variable during the execution of the program. For example, you can initially assign a number to a variable and later assign a string or an object to that same variable without any type errors.

// Primitive Types -- stored in stack

// This are call -by-value types, meaning that when you pass a primitive type to a function, a copy of the value is passed, not a reference to the original value.

// This means that any changes made to the value within the function do not affect the original value outside the function.

// 7 Types : number, string, boolean, null, undefined, symbol, bigint

const score = 100
const s = 100.3
const b = true
const n = null
//const u; // undefined -- error const var cannot be undefined it has to be initialised

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const big = 100n
console.log(typeof big); // bigint


///////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// Non-Primitive Types (Reference Types) -- stored in heap

// This are call-by-reference types, meaning that when you pass a non-primitive type to a function , a reference to the original value is passed. 

// This means that any changes made to the value within the function do affect the original value outside the function .

// 6 Types : object, array, function, map, set, weakmap, weakset

// Basics

// Array
const heros = ["ironman", "krishna", "supeman"]

// Objects
const person = {
    name: "krishna",
    age: 25,
    address: {
        street: "123 main st",
        city: "NYC",
        state: "NY"
        }
}
console.log(person.address.street); // 123 main st
console.log(person.name);
console.log(person["address"]["city"]); // NYC

// Functions
const add = function (a, b) {
    return a + b;
}
console.log(add(5, 5)); // 10


console.log(typeof heros); // object
console.log(typeof person); // object
console.log(typeof add); // function
 

