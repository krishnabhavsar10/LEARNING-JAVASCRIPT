// Not Mandatory as its automatically done by the compiler
"use strict"; // treats all the JS code as newer version

// alert(3+3) // we can only do this in browser not nodejs

// semicolons can be avoided for code readabiity
console.log(1+2)
console.log(2+3)

console.log(1+2); console.log(2+3) // valid but not a good practice



// Datatype in Javascript
// Primitive
// 1. Number -- ranges from -2^53 to 2^53-1
// 2. Bigint -- used for large numbers
let age = 24

// 3. String -- sequence of characters
let name = "Krishna"

// 4. Boolean -- true or false
let isMarried = false

// null -- a stand alone value (empty value)
let state = null

// undefined -- value not defined aka when a variable is declared but not assigned a value.
let address // undefined
address = "India" // now its defined

// symbol -- a unique value

// Using typeof to check the datatype of a variable
console.log(typeof age) // number
console.log(typeof null) // object
console.log(typeof undefined) // undefined


// Object -- 
