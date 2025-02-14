// <!-- DOM -- Document Object Model -->

// <!-- DOM Operations can be Performed in the Browser Console  -->

//console.log(document); // Will log on browser console

// console.dir(document);

// console.log(document.body);

// console.log(document.baseURI);

// Run this on chrome console 

// document.getElementById('title') // Entire h1 tag

// document.getElementById('title').id // id of the h1 tag aka title

// document.getElementById('title').className // class of the h1 tag aka heading 


// // Using getAttribute () method 

// document.getElementById('title').getAttribute('id') // id of the h1 tag aka title

// document.getElementById('title').getAttribute('class') // class of the h1 tag aka heading






// Using set Attribute () method to add a new attribute to the h1 tag aka title

// document.getElementById('title').setAttribute('class', 'new-class') // adds a new class to the h1 tag aka title now if class exist it will be replaced by new-class <-- this is the new name of the class 


const title = document.getElementById('title') 

// Using the title to style it
title.style.color = 'red' // changes the color of the h1 tag aka title to

title.style.backgroundColor = 'black'






// Basis of DOM 
title.textContent // returns the all text content of the h1 tag which is 'DOM Learning on Chai aur Code Test Text Area' even though the text is hidden using display none style

title.innerHTML // Give the entire html content of the h1 tag ---> DOM Learning on Chai aur Code<span style="display: none;">Test Text Area</span>

title.innerText // Shows the text content which is set to visible in the element itself and does not include the text that is set to display none Here it will show --> DOM Learning on Chai aur Code

// title.textContent
// 'DOM Learning on Chai aur CodeTest Text Area'

// title.innerHTML
// 'DOM Learning on Chai aur Code<span style="display: none;">Test Text Area</span>'

// title.innerText
// 'DOM Learning on Chai aur Code'






// GetElementbyCLassname () method
const p = document.getElementsByClassName('heading') // returns a HTMLCollection of all elements with class name




//------------------------------------------------------------------------------------------------------------------
// Query Selector to Learn and use 

//Using tag names
const p1 = document.querySelector('p') // returns the first element that matches the specified

document.querySelector('h2') // returns the first element that matches the specified selector Here it will return --> <h2>Lorem ipsum dolor sit amet.</h2>

document.querySelector('h2').setAttribute('class', 'heading2')


// Using id
document.querySelector('#title') // returns the first element that matches the specified selector Here it will return --> <h1 id="title" class="heading">DOM Learning on Chai aur Code Test Text....



//Using Classname
document.querySelector('.heading') // returns the first element that matches the specified selector Here it will return --> <h1 id="title" class="heading">DOM Learning on Chai aur Code Test....

document.querySelector('input[type="password"]')

document.querySelector('p:first-child') // returns the first element that matches the specified selector Here it will return --> <p>First paragraph</

const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li') // returns 1st li element of the ul element which is --> <li>One</li>
turnGreen.style.color = "cyan"


const tempList = document.querySelectorAll('li') // returns all elements that match the specified selector --> NodeList(3) [li, li, li] --> This Looks like array but it is not array it is NodeList Always expand and check the prototype this will give you the idea of what it is and what methods it has that you can use

tempList[0].style.color = 'green' // returns the first element of the NodeList and changes the color of the first li element to green

const myH1 = document.querySelectorAll('h1')
myH1[0].style.color = 'green'

// Using For each to change background color of all li elements to green
tempList.forEach((item) => {
    item.style.backgroundColor = 'green'
})



// Using getElementByClassName
const tempClassList = document.getElementsByClassName('list-item') // returns a HTMLCollection of all elements with class name list-item it is different from array see prototype 

// Converting HTML Collection to Array
const convertArr = Array.from(tempClassList)

convertArr.forEach((item) => {
    item.style.color = 'orange'
})
