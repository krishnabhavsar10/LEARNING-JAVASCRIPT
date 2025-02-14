const str = "Krishna"

// for (const element of str) {
//     console.log(element);    
// }

// Simple For loop on str 
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]); // Access each character using str[i]
// }


// Maps in JS
// MDN Docs for Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map()
map.set('name', 'Krishna')
map.set('age', 25)
map.set('city', 'Bangalore')
console.log(map.get('name')) // Krishna

// Loop on Map Using for...of
for (const [key, value] of map) {
    console.log(key, value)
}


// Looping On Objects
const obj = {
    name: 'Krishna',
    age: 25,
    city: 'Bangalore'
}

// Using for...in
console.log("\nfor in obj");

for (const key in obj) {
    console.log(key, obj[key])
}


// // Arrays Using for...in
// const arr = [1, 2, 3, 4, 5]
// // Using for...in
// for (const key in arr) {
//     console.log(key, arr[key])
// }



// Arrays using foreach loop
const arr1 = [1, 2, 3, 4, 5]

// Using foreach loop
arr1.forEach((value, index, array) => {
    //console.log(value, index, array);    
    console.log(value, index, array);    
})



// Method 1

function printMe(item){
    console.log(item);
}

arr1.forEach(printMe)


// Best Use of For Each Loop 
// When you need to iterate on array of objects

const arr2 = [
    {name: 'Krishna', age: 25},
    {name: 'Rahul', age: 30},
    {name: 'Rohan', age: 35}
]

arr2.forEach((element) => {
    console.log(element.name, element.age);
})