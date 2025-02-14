// const score = 100
// console.log(score);


const balance = new Number(100) // This will create a Number object, not a primitive number and cast it to a number if you insert a number in it
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString()) // Now it will return the string representation of the number, not the number itself
// console.log(typeof balance.toString())
// console.log(balance.toString().length)


const n = new Number(3.14572332)
console.log(n)
console.log(n.toFixed(2)) // For Precision of 2 decimal places

const n1 = 3121.32131
console.log(n1.toPrecision(1));
console.log(n1.toPrecision(2));
console.log(n1.toPrecision(3));
console.log(n1.toPrecision(4));
console.log(n1.toPrecision(5));

const a = 100000000
console.log(a.toLocaleString())
console.log(typeof a.toLocaleString())


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


// ++++++++++++++++++++++++++++ Math +++++++++++++++++++++

// see all math functions from the mdn documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


console.log(Math.abs(-1))
console.log(Math.abs(1))
console.log(Math.round(123.523))
console.log(Math.round(123.223))
console.log(Math.ceil(123.523))
console.log(Math.floor(123.523))
console.log(Math.pow(2, 3))
console.log(Math.pow(2, 3.5))
console.log(Math.pow(2, 3.5).toFixed(2))
console.log(Math.min(12,3,4,5))
console.log(Math.max(12,3,4,5))
console.log(Math.random()) // returns value between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1) // returns value between 1 and 10


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
