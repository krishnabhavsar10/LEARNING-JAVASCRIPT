// Basic Event Handling in JavaScript

// Method 1 -- Directly add in the tag itselt
// <button onclick="alert('Owl clicked')">Click Me</button>
// This is a bad approach as it is not a good practice to add event handlers directly in the HTML tags.

// ------------------------------------------------------
// Method 2 -- Defining them in JavaScript

// This JavaScript code sets up an event handler that triggers an alert box with the message "Owl clicked" when an HTML element with the id "owl" is clicked.

// document.getElementById('owl').onclick = function (){
//     alert('Owl clicked')
// }

// But still this is not the best approach to handle events in JavaScript as There are better onces like Event Listeners

// As Event listeners give the ability to add multiple event handlers for the same event on the same element.

// ------------------------------------------------------

// Method 3 -- Using Event Listeners
// Event listeners can listen alot of event such as click, mouseover, mouseout, keydown, keyup etc.

// This JavaScript code sets up an event listener that triggers an alert box with the message "Owl clicked" when an HTML element with the id "owl" is clicked.

// MDN Docs for addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/Element/addEventListener

// document.getElementById('owl').addEventListener('click', function(){
//     alert('Owl clicked')
// }, false) // false is the default value for useCapture which means that the event listener will be added to the target element's event capturing phase.

// Now Understanding Event Object e in JavaScript

// MDN Docs for Event Object: https://developer.mozilla.org/en-US/docs/Web/API/Event

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log(e); // see the output in console
//   },
//   false
// );
// ------------------------------------------------------
// What to read in Events
/*
1. TYPES of Events --  
2. timestamp -- 
3. defaultPrevented --
4. target --
5. toElement --
6. srcElement --
7. currentTarget --
8. clientX, clientY, pageX, pageY, screenX, screenY --
9 altKey, ctrlKey, metaKey, shiftKey --
10 keyCode, charCode, which --
*/

// Event Propagation in JavaScript basically what happens is bubbling and capturing the event means that the event is first captured by the innermost element and then propagated to the outermost element.

// See example below Try to see console output and see the difference between capturing and bubbling aka click on any image except owl and then click on owl and see the difference

// document.getElementById("images").addEventListener("click", function (e) {
//   console.log("Clicked on ul");
// }, false);

// document.getElementById("owl").addEventListener("click", function (e) {
//   console.log("Clicked on owl");
// }, false);

// MDN Docs for Event Propagation: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

// Now is we set it to true it will be in capturing phase which means that the event will be captured by the outermost element and then propagated to the innermost element.

// document.getElementById("images").addEventListener("click", function (e) {
//     console.log("Clicked on ul");
//   }, true);
  
//   document.getElementById("owl").addEventListener("click", function (e) {
//     console.log("Clicked on owl");
//   }, true);


// Now what if we want to stop the propagation of the event?
// MDN Docs for Event Propagation: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

// document.getElementById("images").addEventListener("click", function (e) {
//     console.log("Clicked on ul");
    
//   }, false);
  
//   document.getElementById("owl").addEventListener("click", function (e) {
//     console.log("Clicked on owl");
//     e.stopPropagation(); // this will stop the propagation of the event to the outer elements 
//   }, false);

//------------------------------------------------------

// Prevent Default Behavior in JavaScript -- 
// MDN Docs for preventDefault: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// document.getElementById('google').addEventListener('click', function(e) {
//     e.preventDefault(); // this will prevent the default behavior of the event
//     // e.stopPropagation();
//     console.log("Clicked on google");
// })


//------------------------------------------------------

// Once clicked on any image all of them should be invisible

document.getElementById('images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        let remove_It = e.target.parentNode;
        remove_It.remove();
    }
})