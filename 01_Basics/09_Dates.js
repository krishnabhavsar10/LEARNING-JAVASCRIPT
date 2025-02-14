// Date Begins from January 1 1970

// Learn Dates from MDN reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()

console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let myDate2 = new Date('2024-03-20')
console.log(myDate2.toLocaleDateString());
console.log(myDate2.getDate());
console.log(myDate2);

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myDate.getTime());

console.log(myTimestamp - myDate.getTime());