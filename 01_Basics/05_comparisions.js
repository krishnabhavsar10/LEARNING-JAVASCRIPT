// Comparisions for same Datatypes

console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 < 1); // false
console.log(2 == 1); // false -- Note: This is not the same as ===, which checks for both value and datatype
console.log(2 != 1); // true -- Note: This is not the same as !==, which checks for both value and datatype


// Comparisions for different Datatypes
// Unpredictable results, as it depends on the system and the browser
// Avoid this in production code
console.log(2 > '1'); // true
console.log("02" >= 1); // true

// Unpredictabe output
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == 0); // false

// Strict Check -- checks for both value and datatype

console.log(2 === 2); // true
console.log(2 !== 2); // false
console.log(2 === '2'); // false -- as datatype is different
console.log(2 !== '2'); // true -- as datatype is different