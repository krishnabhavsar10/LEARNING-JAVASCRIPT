// const promiseOne = new Promise(
//     function(resolve, reject){
//         // Do an async task
//         // DB calls, network, cryptography
//         setTimeout(function(){
//             console.log('Async task is complete')
//             resolve() // This connect .then and resolve
//         }, 1000)
//     }
// ) // Creating a Promise


// // Consuming Promise
// promiseOne.then(function(){
//     console.log("Promise Consumed: ");
// }) // .then is directly connected to resolve


// //------------------------------------------------------

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Promise 2 Consumed: ");
// });

// //------------------------------------------------------

// // Using Resolve to pass the data to .then

// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Krishna", email: "dsadsads"})
//     }, 1000)
// })

// promiseTwo.then(function(user){
//     console.log((user));
    
// })

// //------------------------------------------------------

// const promiseFour = new Promise(function(resolve, reject){
//    setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Krishna", password: "dsadsads"})
//         }
//         else {
//             reject('Error Something Went wrong') // Returns error to .catch
//         }
//    }, 1000) 
// })


// // Error -- Not Allowed
// // const username = promiseFour.then((user) => {
// //     console.log(user);
// //     return user.username;
// // })

// // console.log(username);


// // To Overcome
// // We do Chaining of .then

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);    
// }).catch(function(err){
//     console.log(err);
// }).finally(() => console.log("Promise is either resolved or rejected"))

// //------------------------------------------------------

// // Creating and Using Promises using Async Await
// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Krishna"})
//         }
//         else{
//             reject('Error: JS went Wrong')  
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error); // it reject occurs this will execute
//     }
// }

// consumePromiseFive()

//------------------------------------------------------

// Directly Using fetch 

fetch('C:/Users/krish/Desktop/Learning_Javascript/09_Advance_One/02_Promise/Test.json')
.then((response) => {
    return JSON.parse(response)
}).then((data) => {
    console.log(data)
}).catch((error) => console.log(error))