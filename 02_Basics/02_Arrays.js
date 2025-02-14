const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

const arr3 = [1,2,3,4,5]
const arr4 = [6,7,8,9,10]

// arr1.push(arr2); // This will create array of array [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

// console.log(arr1);
// console.log(arr1[5][0]) // 6
// console.log(arr1[4][0]) // This will print undefined

// const arr5 = arr3.concat(arr4) // returns new array with elements from both arrays
// console.log(arr5);



// Using Spread to merge arrays
const arr6 = [...arr3, ...arr4]; // can be used to merge arrays
console.log("spread");
console.log(arr6);

// Using flat () to merge multple sub arrays into one array
const multiSubArray = [1,2,3,[4,5,6],7,[8,9,[10, 11]]]
const flatArray = multiSubArray.flat(Infinity);
console.log("flatArray");
console.log(flatArray);

const strArr = Array.from("krishna"); // converts string to array
console.log(strArr);

console.log(Array.isArray("Krishna")) // returns false
console.log(Array.isArray(strArr)) // returns true

const obj = {a:1, b:2, c:3};
console.log(Object.keys(obj)); // returns arrays of keys
console.log(typeof Object.keys(obj)); // returns array object
console.log(Array.from(Object.values(obj)))
 

// let n1 = 10
// let n2 = 20
// let n3 = n1 + n2

// arr10 = Array.of(n1, n2, n3)
// console.log(arr10);
