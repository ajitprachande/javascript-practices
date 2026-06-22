let btn = document.querySelector("#btn1");
// function print() {
//     console.log("Button clicked"); 
// }
// btn.onclick = print;  


btn.addEventListener("click", () => {
    // console.log("Button working");
    alert("Button clicked");
});

let dbclick = document.getElementById("dblclick");
dbclick.addEventListener("dblclick", () => {
    confirm("are you want to delete this file?");
})

btn.addEventListener("click", () => {
    console.log("First f1");
})

btn.addEventListener("click",() => {
    console.log("second f2");
})

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

let btn3 = document.querySelector("#btn3");
let currentTheme = true;
btn3.addEventListener("click", () => {
    if(currentTheme == true) {
        document.body.style.backgroundColor = "black";
          document.body.style.color = "white";

        currentTheme = false;
    }
    else{
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        currentTheme = true;

    }
})

let btn4 = document.getElementById("btn4");
   btn4.style.height = "100px";
    btn4.style.width = "100px";
btn4.addEventListener("mouseover", () => {
    // window.alert("onmouseover");
    console.log("mouseover function running");
       btn4.style.backgroundColor = "pink";
})

let btn5 = document.getElementById("btn5");
    btn5.style.height = "100px";
    btn5.style.width = "100px";
btn5.addEventListener("mouseleave", () => {
    console.log("mouseleave function running")
    btn5.style.backgroundColor = "chocolate";
})
// Keyboard Events
let btn6 = document.getElementById("btn6");
btn6.addEventListener("keydown",() => {
    alert("keyDownpressed!");
});

let btn7 = document.getElementById("btn7");
btn7.addEventListener("keyup",() => {
    alert("keyUppressed!");
});

// Removing Events
// program 1:
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");

const ShowMsg = () => {
    console.log("button is working");
}

// Adding event listener
startbtn.addEventListener("click", ShowMsg);

stopbtn.addEventListener("click", () => {

    startbtn.removeEventListener("click",ShowMsg);
    console.log("Start button is disabled!");
})

// program 2:
let likebtn = document.getElementById("likebtn");
let countText = document.getElementById("countText");

let count = 0;
const AddLike = () => {
    count++;
    countText.innerText = `Likes: ${count}`;

    if(count === 5 ){
        likebtn.removeEventListener("click",AddLike)
        alert("maximum likes reached");
    }
}
likebtn.addEventListener("click",AddLike);

//Create an input field and display its value in the console whenever the user types.

let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
    console.log(e.target.value);
    
})

//

let box1 = document.querySelector("#box1");
let boxBtn =  document.querySelector("#boxBtn");

const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white"
];
let i =0;       //A variable created outside the addEventListener callback can remember its value between multiple events.

boxBtn.addEventListener("click",() =>{
    
    if(i === colors.length){
        i=0;
    }
    box1.style.backgroundColor = colors[i];
    i++; 
});

//new concept
/* 
1. preventDefault() — Stops the browser's default behavior
    -> preventDefault() prevents the browser from performing the default action associated with an event.
    ->It prevents the browser from executing the default action of an element.
*/
let preventdefault = document.querySelector("#preventdefault");
preventdefault.addEventListener("click", (e)=>{
    e.preventDefault();
}) 



//Create a form that displays a message when the user submits it.

let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit",(e) => {
    
    e.preventDefault(); //It Stop browser's default page refresh. This allows JavaScript to handle the form submission manually
    console.log("Form submitted successfully!");
})


/* 
2. stopPropagation() — Stops the event from moving to parent elements
        ->stopPropagation() prevents an event from propagating (bubbling) to parent elements.
        ->It stops the event from propagating from the child element to its parent elements.

*/

let parent_div = document.querySelector("#parent");
let stop_prop = document.querySelector("#stop_prop");


// Without stopPropagation()
parent_div.addEventListener("click", ()=> {
    console.log("parent div clicked");
})

// stop_prop.addEventListener("click", ()=> {
//     console.log("btn clicked");
    
// })
/*
If you click the button, the click event can travel upward.
This is called 'event bubbling'.
    ->now whenever we click, 'stop_prop' btn which also executes 'parent_div'.(getting both output)
    ->using stopPropagation() method, The parent div never receives(execute) the click event. ( comment above stop_prop() method code and see below code.)
*/
stop_prop.addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("btn clicked");
})

let contextmenu = document.querySelector("#context")

addEventListener("mousedown", (event) => {
    console.log("context menu opened")
 })
