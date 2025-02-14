function sayMyName(){
    console.log("My name is Krishna");
}

sayMyName()

sayMyName // Nothing will happen its just the function reference 

function addTwoNumbers(n1, n2){
    console.log(n1 + n2);
}

addTwoNumbers() // NaN
addTwoNumbers(3,4)

// No checking is happening hence this can also happen
addTwoNumbers(3,"4") // 34
addTwoNumbers(3 , "a") // 3a

const res = addTwoNumbers(3,4); // This will return undefined as function is not returning anything
console.log(res); // undefined


// returning Function
function addTwoNumbers1(n1, n2){
    return n1 + n2;
}

console.log(addTwoNumbers1(3,4));


function login(username){
    return `${username} just logged in`
}

console.log(login("Krishna"));
console.log(login(""));
console.log(login());


function loginUser(username){
    if(!username){
        return "Please enter your username";
    }
    return `${username} just logged in`
}

console.log(loginUser());
console.log(loginUser(""));



// Using Default Values

function login2(username = "Sam"){
    return `${username} just logged in`
}

console.log(login2());