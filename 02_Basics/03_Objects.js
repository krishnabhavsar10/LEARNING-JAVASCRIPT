// Singleton -- only one instance of the class Singletons are created when the class is first instantiated using the 'new' keyword aka using constructor 

u = Object.create(null) 
console.log(typeof u);

// ------------------------------------ \\


const mySym = Symbol("key1")

// Normal Method of Creating a Object
const JsUser = {
    name: 'John Doe',  // Internally , this is a property of the object JsUser and name is represented as string "name" and value is "John Doe" keys are case sensitive and are strings internally Now see the next line
    "full name": "Krishna Bhavsar", // This cannot be accessed using dot notation because of the space in the key. We can access it using bracket notation
    age: 30,
    location: 'New York',
    email: 'john.doe@example.com',
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"],
    0:10,
    1:20,
    1.21:3,
    [mySym]: "key1" // This is a property of the object JsUser and key is a symbol "key1" and value
}
// console.log(typeof JsUser);

console.log(JsUser.email);
// console.log(JsUser[email]); // Error 
console.log(typeof JsUser.email);

console.log(JsUser["email"]);
console.log(JsUser["full name"]);

// Calling Symbol
console.log(JsUser[mySym]) // This will print "key1" because we have created a property with the symbol "key1"
console.log(typeof JsUser[mySym])

// Not Possible will not work -- undefined
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)

JsUser.email = "dsadsad";
console.log(JsUser.email);
// console.log(JsUser["email"]);

// Freezing an object

Object.freeze(JsUser) // This will prevent any new properties from being added to the object and also prevent any existing properties from being modified or deleted.

// JsUser.email = "Krishna"; // will not work because of Object.freeze(JsUser)

// console.log(JsUser.email);


Object.seal(JsUser) // This will prevent any new properties from being added to the object but will allow existing properties to be modified or deleted. 

// Adding functions to an object
const user = {
    name: 'John Doe',
    age: 30,
    location: 'New York',
    sayHello: function() {
        console.log('Hello Krishna');
    }
}

user.sayHello()


// Adding function to an object using function expression

JsUser.greeting = function(){
    console.log("Hello Krishna Modified");
}

console.log(JsUser.greeting);
JsUser.greeting()

JsUser.greetingToo = function(){
    console.log(`Hello Krishna, ${this.name}`);
}

JsUser.greetingToo()