const accountId = 1121; // const is used to declare a constant variable

// Recommended way to declare a variable
let accountEmail = "account@google.com" // let is used to declare a variable that can be reassigned and Mostly use as it follows the scope rules (Block and Functional Scope) of JavaScript similar to any other variable in any other programming language.

// var on the other hand is used to declare a variable that can be reassigned and has function scope. It is not recommended to use var in modern JavaScript as it can lead to unexpected behavior and bugs.
var accountPassword = "password123"


accountCity = "Mumbai" // allowed

//accountId = 1 //error : Cannot assign to 'accountId' because it is a constant variable

console.table([accountId, accountEmail,accountPassword,accountCity])

let accountState; // by default undefined

console.log("accountState: ", accountState);