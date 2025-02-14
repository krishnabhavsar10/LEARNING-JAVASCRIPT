// let value = 3
// let negValue = -value

// console.log(negValue)

// Operation on Variables
// console.log(2+2); // Addition Output: 4
// console.log(2-2); // Subtraction Output: 0
// console.log(2*2); // Multiplication Output: 4
// console.log(2/2); // Division Output: 1
// console.log(2**2); // Exponentiation Output: 4
// console.log(2%2); // Modulus Output: 0
// console.log(9/8); // Division Output: 1.125


// let str1 = "hello"
// let str2 = " Krishna"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // Output: "12"
// console.log(1 + "2"); // Output: "12"


/*
In the expression 1 + 2 + "2", the operations are evaluated from left to right. Here's how it works step by step:

First Operation: 1 + 2 is evaluated first, which results in 3.
Second Operation: Next, we have 3 + "2". In this case, since one of the operands is a string ("2"), JavaScript converts the number 3 to a string and performs string concatenation instead of addition. Therefore, 3 becomes "3" and is concatenated with "2" to give "32".
So, the final result is "32" because of the string concatenation that happens when you add a string to a number after performing the addition of two numbers first.

In contrast, in the expression console.log("1" + 2 + 2);, the first operation is string concatenation, resulting in "12" (from "1" + 2), and then when you add another 2, it concatenates again to give "122".
*/
console.log("1" + 2 + 2); // Output: "122"
console.log(1 + 2 + "2"); // Output: "32"


console.log(true)

// Donot do this no error is thrown
console.log(+true)
console.log(+"")

let n1, n2, n3
n1 = n2 = n3 = 10

let n = 10
console.log(n++); // Post increment Output: 10
console.log(n); // Output: 11
console.log(++n); // Pre increment Output: 12