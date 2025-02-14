// Arrow Functions

// Arrow functions are a concise way to write functions in JavaScript. They have a shorter syntax than traditional. 

// Arrow functions are anonymous functions, meaning they don't have a name. They are often used as event handlers or as values for variables. 

// Creating basics object

const user = {
    username: "Krishna",
    price: 100,
    welcomeMessasge: function(){
        console.log(`Welcome ${this.username} to our website`); // this. refers to the object that the function is a part of. In this case, it refers to the user object.
        console.log(this); // Print -- Entire user object
    }
}


user.welcomeMessasge(); // Welcome Krishna to our website
user.username = "sam"
user.welcomeMessasge();

console.log(this) // {} -- This refers to the global object in the browser. In the browser, the global object is the window object. In Node.js, it is the global object. Empty object in the browser.


// See this
function chai(){
    //console.log(this); // see the output
    console.log(this.username); // undefined no access
}
chai();

const chai2 = function chai(){
    console.log(this.username); // undefined no access
}
chai2();

// Arrow Function
/*
() => {}
*/

// basic Arrow function
const addTwoNum = (n1, n2) => {
    return n1 + n2;
}
console.log(addTwoNum(1,3));

// Implicite Return -- No need to use return keyword
const addTwoNum2 = (n1, n2) => n1 + n2;
console.log(addTwoNum2(1,3));

const addTwoNum3 = (n1, n2) => (n1 + n2);
console.log(addTwoNum3(1,3));

// Object Return in Implicite Arrow
const objReturn = () => ({name: "Krishna", age: 25});
console.log(objReturn());

// const chai3 = () => {
//     console.log(this.username); // undefined no access
//     console.log(this); // {}
// }
// chai3();
