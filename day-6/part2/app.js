/* 1. querySelector() : it is a DOM method used to select an HTML element.   
                    Document Object Model, which is JavaScript's representation of your HTML page.

   2. getAttribute() : it is used to read the value of an HTML attribute.
   3. setAttribute() : it is used to create a new attribute or change an existing attribute.

    4. document.createElement() : Creates a new HTML element using JavaScript.

    5.append()   : Adds an element inside another element at the end.
    6.prepend()  : Adds an element inside another element at the beginning.
    7.before()   : Adds an element outside the selected element before it.
    8.after()    : It inserts an element outside and after the selected element.

    9.remove()    : Removes an element from the webpage.

    10. appendChild() - Add a Child : appendChild() is used to add a new child element at the end of a parent element.
    11. removeChild() - Remove a Child  : removeChild() is used to remove a specific child element from its parent.
    NOTE: appendChild() and removeChild() are always called on the parent element.


    12.classList   :  is property in JavaScript is a read-only property that returns a live DOMTokenList collection of the class attributes of an HTML element.
*/



// querySelector()
let FirstDiv = document.querySelector("div");           //selecting div(tag)
let SelectClass = document.querySelector(".card1");        //Select by Class
let SelectId = document.querySelector("#card1");        //elect by Id

// console.log(FirstDiv);

// getAttribute()
console.log("ClassName: ", FirstDiv.getAttribute("class"));      //dispalys ClassName
console.log("IDName: ", FirstDiv.getAttribute("id"));            //dispalys IDname
console.log("Name: ", FirstDiv.getAttribute("name"));            // dispalys Name

let img = document.querySelector("img");
console.log("IMAGE SRC: ", img.getAttribute("src"));



// setAttribute():
let old = document.querySelector(".old");
old.setAttribute("class", "New_para");
console.log("new class name by using setAttribute() :", old.getAttribute("class"));
let New_para = document.querySelector(".New_para");

New_para.innerText = "New Classname set.";
console.log(New_para);      //displaying text and it's content

New_para.style.color = "green";         //.style is used to change an element's inline CSS using JavaScript. JS cannot use - in property names, so it uses camelCase:
New_para.style.fontSize = "20px";
New_para.style.fontWeight = "900";
New_para.style.visibility = "hidden";       //It hides the element but keeps its space.


// document.createElement():

let NewBtn = document.createElement("btn");     //The button exists in JavaScript memory only.  It is not visible on the webpage yet.
NewBtn.innerText = "NewButton";     //Now it comes in memory

NewBtn.setAttribute("id", "SignInid")
NewBtn.setAttribute("class", "SignInclass")
console.log(NewBtn);

console.log("It return IDName of NewBtn variable: ", NewBtn.getAttribute("id"));
console.log("It return ClassName of NewBtn variable: ", NewBtn.getAttribute("class"));

// append()
let box1 = document.querySelector("#box1");
let appendBtn = document.createElement("button");
appendBtn.innerText = "Append(), End";
box1.append(appendBtn);

//  prepend()
let box2 = document.querySelector("#box2");
let prependBtn = document.createElement("button");
prependBtn.innerText = " prepend(), beginning";

box2.prepend(prependBtn);

// before() 
let box3 = document.querySelector("#box3");
let beforeBtn = document.createElement("button");
beforeBtn.innerText = " before(), outside element";

box3.before(beforeBtn);

// after() 
let box4 = document.querySelector("#box4");
let afterBtn = document.createElement("button");
afterBtn.innerText = " after(), outside element";

box4.after(afterBtn);

// remove()
let removeBtn = document.querySelector(".removeBtn");
console.log(removeBtn);
console.log(removeBtn.remove());        //displays: undefinef



//10. appendChild()

let parent = document.querySelector(".Parent");
// Create a new child
let btn = document.createElement("button");     //new button is created (now add it to the parent)
btn.innerText = "NewChild Added";
// Add button inside the div(Parent class)
parent.appendChild(btn);        //appenChild() {we are adding child button to the parent.}      
console.log(parent);            //two buttons(childs) are displaying.

//11. removeChild()
let parent2 = document.querySelector(".Parent2");

let removebtn = document.querySelector("#removebtn");
parent2.removeChild(removebtn);
console.log(parent2);       //chk, only one btn is displaying another one button(child) is removed.



// Q create a new box, text as "Tony stark", textColor = red, backgroundColor = "purple"
// insert it in body tag as firstelement 
let newPara = document.createElement("p");
newPara.innerText = "Tony Sharkk";
newPara.style.color = "red";
newPara.style.height = "100px";
newPara.style.width = "100px";
newPara.style.backgroundColor = "purple";

document.body.prepend(newPara);     //It adds newPara element to begining of body.


// Q create a para, give styling through style.css, create new class and append it in tag through javascript
let para = document.querySelector(".para");
para.innerText = "hi this is ............."
para.setAttribute("class","assignments");

console.log(para.getAttribute("class"));        //ruturn new classname


console.log(para.classList);        //   
para.classList.add("newClassName");     //it Add new class
console.log(para.getAttribute("class"));    //ruturn: assignments newClassName














