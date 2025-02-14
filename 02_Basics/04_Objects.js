const tinderUser = new Object() // Singleton Object
const tinderUser2 = {} // New Object Not Singleton

// console.log(tinderUser);
// console.log(tinderUser2);

tinderUser.id = "123sads"
tinderUser.name = "Krishna"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(typeof Object.keys(tinderUser)); // Array of keys this can be using inside loops etc

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // creates an array of key value pairs

// Checking if a property exists in an object
console.log("name" in tinderUser);
console.log(tinderUser.hasOwnProperty("name"));

// Nesting Objects 
const regularUser = {
    email: "krishna@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Krishna",
            lastname: "Bhavsar"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);

console.log(regularUser.fullname?.userfullname.firstname); // the ? means if the property exists then return the value otherwise return undefined

console.log(regularUser.halfname?.userfullname.firstname);

////////// Object Combining 

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// Method 1 
const obj3 = {obj1, obj2}
console.log(obj3); // Basically obj1 and obj2 will now be the keys of obj3

// Method 2 Best Method --> Spread Operator
const obj4 = {...obj1, ...obj2};
console.log(obj4); // This will combine the properties of obj1 and obj2 into obj4


const obj5 = {...obj1, ...obj2, 5:"e"};
console.log(obj5); // This will combine the properties of obj1 and obj2 into obj5

//----------------------------------------\\
// Method 3
const obj6 = Object.assign({}, obj1, obj2); // The {} is the target object in which the properties of obj1 and obj2 will be combined 
console.log("obj6:");

console.log(obj6); // This will combine the properties of obj1 and obj2 into obj6

const o = {5:"e", 6:"f"};
const obj7 = Object.assign({}, obj1, obj2, o);
console.log(obj7); // This will combine the properties of obj1, obj2 and o into

// If we don't specify the target {} then
// the properties of obj1 and obj2 will be combined into obj1 and obj2 themselves
const obj8 = Object.assign(obj1, obj2);
console.log(obj8); // This will combine the properties of obj1 and obj2 into obj
console.log(obj1); // now obj8 and obj1 are the same

console.log(obj1 === obj8);



// From Database to array of Object
// Creating an array of objects JSON Array
const data = [
    {
        "id": 1,
        "name": "John",
        "age": 30
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 25
    },
    {
        "id": 3,
        "name": "Bob",
        "age": 40
    }
]

console.log(data[1]);
console.log(data[1]["id"]);
console.log(data[1][0]); // undefined as id is a property not an index for data[1]
console.log(data[1]["name"]);
console.log(data[1].name);


