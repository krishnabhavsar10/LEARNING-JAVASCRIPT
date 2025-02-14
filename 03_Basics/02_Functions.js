function price(num1){
    return num1
}

console.log(price(200))
console.log(price(200, 300, 400)) // Will only print the first argument, 200


// Now to Solve this Problem
// Using Rest / Spread Operator

function price1(...args) {
    return args
}
console.log(price1(200, 300, 400))


function price2(v1, v2, ...args) {
    return args
}
console.log(price2(1,2,3,4,45)) // v1 = 1, v2 = 2, args = [3,4,45]


// Handling Objects in Function

const user = {
    username: 'John',
    price: 1000
}

function handleObject(anyObj){
    //console.log(anyObj.username, anyObj.price)
    console.log(`Username: ${anyObj.username} and Price: ${anyObj.price}`)
}

handleObject(user)

handleObject({
    username: 'John',
    price: 1000
})

// passing Arrays
function handleArray(arr){
    console.log(arr)
}
handleArray([1,2,3,4,5])