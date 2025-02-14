// Can be denotes by "" or ''
// If the string is empty, it is considered as a special case

//             0123456
// -1          7654321
const sname = "Krishna"
const newName = new String("Krishna")
// console.log(sname === newName) // false -- because sname is a primitive and newName is an object
// console.log(sname == newName)  // true

const age = 20

// console.log(sname + age + " Hi"); // Not recommended to print string and number together

// Modern Syntax -- Using `backticks` (template literals)

// String Interpolation
// console.log(`${sname} is ${age} years old. Hi`); // Recommended

// master all the string methods

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// console.log(newName.length);
// console.log(newName.toUpperCase()); // will not change the original string 

// console.log(newName.charAt(1));
// console.log(newName[1]);

// console.log(newName.indexOf('a'));


// const str1 = newName.substring(0,2) // negative index is not allowed
// console.log(str1);
// console.log(newName.substring(-7)); // will do nothing


// negative index is allowed in slice method
console.log(newName.slice(-7));

const str3 = "    dsdscdsd   "
console.log(str3);
console.log(str3.trim());

const url = "https://krishna.com/krishna%20"
console.log(url.replace('%20', '_'));

console.log(url.includes('krishna'));

a = "dsad-dsad-gfgd-htyt-rwr-bcbc"
console.log(a.split('-'));
console.log(typeof a.split('-'));  // Object 
