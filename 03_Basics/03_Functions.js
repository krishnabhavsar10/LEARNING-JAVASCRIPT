// Important Learning Scopes in Functions

// {} -- This is Scope 

// Let and Const comes in Block Scope

// The Problem is with var -- var is function scope, not block scope -- it is not limited to the block it is declared in, but to the function it is declared in .

// var c = 30
let a = 100

if (true) {
    let a = 10;  // Block-scoped, cannot be accessed outside this block
    console.log(`a: ${a}`);
    
    const b = 20; // Block-scoped, same as `let`
    var c = 30;   // Function-scoped (or global if not in a function)
    d = 20;       // No declaration, automatically becomes global
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c);    // Output: 30, because `c` is `var` and accessible outside the block
console.log(d);    // Output: 20, because `d` is implicitly global
console.log(`a: ${a}`); // Output: 100, because `a` is `let` and not accessible outside the block

// Nested Scope
// A block scope can be nested inside another block scope. The inner block scope can access the outer block scope, but not the other way around. 

function one(){
    const username = "Krishna"
    function two(){
        const website = "youtube";
        console.log(username);
        console.log(website);
        
    }
    // console.log(website); // ReferenceError: website is not defined
    two();
}

one()

// Same will happen with if else
if(true){
    const a = 10
    if(a === 10){
        const b = 20
        console.log(b+a);        
    }
    // console.log(b) // Error : b is not defined
}
console.log(a) // Error : a is not defined


// ++++++++++++++++++++++++++ Interesting things ++++++++++++++++++++++++++

// Case 1:
// You can call the Function before it is declared 
console.log(addone(10)) // Output: 11
function addone(num){
    return num + 1
}
console.log(addone(10)) // Output: 11


//Case 2:

// A different way of writing the above function
// Variable holding a function is called a Higher Order Function. 

// console.log(addTwo(10)); // ReferenceError: Cannot access 'addTwo' before initialization -- Not Possible

// This comes in """Javascript hosting""" environment

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(10));


