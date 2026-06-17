// Check different parts of the DOM structure


// Displays all child nodes of the entire document
// // console.log(window.document.childNodes);

// Displays the body element of the webpage
// console.log(document.body);

// Displays the head element of the webpage
// console.log(document.head);


// Displays all child nodes inside the body tag
// console.log(window.document.body.childNodes);

// Change basic page styling
// =========================

// Change whole page background to red
document.body.style.backgroundColor = "red";

// Change default text color inside body to white
document.body.style.color = "white";


// Add extra text to the second child element of body
document.body.childNodes[1].innerText += " in JS";


// Change color of a specific body child (currently disabled)
// document.body.childNodes[3].style.color = "blue";


// Selecting element by ID

// Get heading element using its ID and print it in console
let h1 = window.document.getElementById("head1");
console.log(h1);


// Change button font size using its ID
let btn = document.getElementById("btn").style.fontSize = "23px";



// Selecting element by Class

// Get all elements with class "para1"
// Returns an HTMLCollection
let classname = document.getElementsByClassName("para1");

console.log(classname);
console.dir(classname);


// Select all <p> tags inside the first "para1" container
let paragraphs = classname[0].querySelectorAll("p");

// Loop through every paragraph and change text color
paragraphs.forEach((para) => {
    para.style.color = "yellow";
});



// Selecting elements by Tag

// Get all paragraph tags from the document
// Returns an HTMLCollection
let paras = document.getElementsByTagName("p");

console.dir(paras);


// ---------------------------------------------------
// Working with querySelectorAll and forEach
// ---------------------------------------------------


// Select all elements with class "box"
let boxes = document.querySelectorAll(".box");


// Loop through all boxes
// Change background color of boxes at even indexes (0, 2, 4)
boxes.forEach((box, ind) => {
    if (ind % 2 == 0) {
        box.style.backgroundColor = "blue";
    }
});


// =========================
// Change circle colors dynamically

// Select all circle elements
let circles = document.querySelectorAll(".circles");


// Store colors inside an array
const colors = ["yellow", "blue", "green", "black", "brown"];


// Loop through colors array
// Apply each color to the circle with the same index
colors.forEach((color, ind) => {
    circles[ind].style.backgroundColor = color;
});