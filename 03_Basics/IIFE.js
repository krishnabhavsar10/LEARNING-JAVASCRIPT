// IIFE --> Immediately Invoked Function Expression
// we use this to reduce the scope of our code and prevent it from being accessed globally 

// Function likha and turant execute karwa diya 

// Normal Function
function add(a, b) {
    console.log(a + b);
}
add(1,2); // Because i am using IIFE below the semicolon is must

//IIFE --> ()() --> (function <name>(p1,p2)(p1,p2))
// Also Called Named Function Expression IIFE
(function add1(n1, n2){
    console.log(n1+n2);
})(1,2); // IIFE --> Immediately Invoked Function Expression -- Because i am using IIFE the semicolon is must

// add1(11,22); // ReferenceError: add1 is not defined

// Using Arrow 
// Unnammed Function Expression IIFE
((name) => {
    console.log(name);
})("Krishna")