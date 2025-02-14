v = 10
s = v 
console.log([s, v]);

s = 20
console.log([s, v]);

let a = 10
let b = a
console.log([a, b]);

b = 30
console.log([a, b]);

// Using Object 
let obj = {x: 10, y: 20}
console.log([obj.x, obj.y]);

let obj1 = obj // Reference to obj
console.log([obj1.x, obj1.y]);

obj1.x = 30
obj1.y = 30

// As objs are in heap
console.log([obj.x, obj.y]);



