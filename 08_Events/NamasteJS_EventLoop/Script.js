const user = [
    {firstName: "John", lastName: "Doe", age: 25},
    {firstName: "Jane", lastName: "Doe", age: 25},
    {firstName: "Bob", lastName: "Smith", age: 35},
    {firstName: "Alice", lastName: "Johnson", age: 40},
    {firstName: "Charlie", lastName: "Williams", age: 45}
]

const output = user.reduce(function(acc, ele){
    if(ele.age < 30){
        acc.push(ele.firstName + " " + ele.lastName);   
    }
    return acc;
}, [])

console.log(output);
