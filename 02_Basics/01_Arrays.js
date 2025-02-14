// See Array MDN documentation for more information.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//             0 1 2 3      4       5     6
// -1          7 6 5 4      3       2     1
const myArr = [1,2,3,4, "Krishna", true, 1.21]
const arr1 = new Array(1,2,3,4)

// console.log(myArr);

// console.log(myArr[0]);
// console.log(myArr.length);

//Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// console.log(myArr.length);

// v = myArr.pop()
// console.log(v);
// console.log(myArr);


// console.log("length: " + myArr.unshift(100)) // add at the beginning return new length
// console.log(myArr);

// console.log("First Element: " + myArr.shift()) // remove at the beginning
// console.log(myArr);

// console.log(myArr.includes(5)); // false
// console.log(myArr.indexOf(5)); // returns -1 if not found

// const newArrStr = myArr.join("-") 
// console.log(newArrStr);
// console.log(typeof newArrStr);


// Slice and Splice

// Slice
// console.log(myArr.slice(1, 4)); // returns a new array from index 1
// console.log(myArr.slice(1)); // returns a new array from index 1 to the end
// console.log(myArr.slice(-3)); // returns a new array from the end of the array
// console.log(myArr.slice(1, -1)); // returns a new array from index 1

// Splice 
// Splice returns the removed elements 
// Splice can be used to add or remove elements from the array, it can also be used to replace elements in the array, it can also be used to insert elements at a specific position in the array, it can also be used to remove elements from the array and insert new elements at the same position in the array

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


// Return value
// An array containing the deleted elements.

// If only one element is removed, an array of one element is returned.

// If no elements are removed, an empty array is returned.


console.log(myArr);
const deletesplicearr = myArr.splice(1)
console.log(deletesplicearr); // removes all elements from starting from index 1 to the last one 
console.log("final arr: " + myArr);


// console.log(myArr.splice(0, 2)); // removes 2 elements from index 0

console.log(myArr.splice(0, 0, "Krishna", " Rama ")); // adds "Krishna" at index 0   
console.log(myArr);  

// console.log(myArr);



