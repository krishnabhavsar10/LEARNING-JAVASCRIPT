const balance = 1000

if(balance > 500) console.log("Test Never"), console.log("Test2 Never"); // This will print "Test" and "Test2" to the console -- Never do this in production code 

// Use this instead
if (balance > 500) {
    console.log("Test");
    console.log("Test2");
}


// To Check Obj is empty
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


console.log(false == 0) 
console.log(false == '')
console.log('' == 0)

// Nullish Coalescing Operator (??) null undefined

let val;
val = 5 ?? 10
console.log(val) // 5
val = null ?? 10
console.log(val) // 10 -- as null is nullish value -- This is the main use case of ?? operator.

val = undefined ?? 11
console.log(val) // 11 -- as undefined is nullish value -- This is the main use

val = 0 ?? 11
console.log(val) // 0 -- as 0 is not nullish value -- This is the

val = null ?? 11 ?? 12
console.log(val) // 11 -- as null is nullish value