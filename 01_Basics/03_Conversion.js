let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

score = "33abc"
valueInNumber = Number(score) // No error is given

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN -- Not a Number was not able to convert the string to number

valueInNumber = Number(null)
console.log(valueInNumber); // 0

console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("true")); // NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true
console.log(Boolean(21)); // true
console.log(Boolean("xasa")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean([])); // true


let stringNumber = String(33)
console.log(typeof(stringNumber));
console.log(stringNumber);