//Comments in js
// Single line comment
/*
    Multiline Comment


*/

// Assignment Operators:
// Assignment operators are used to assign values to variables. For example,
const x = 5;    //x= 5

let age = 30;
age += 5;   // age = age + 5 = 35
console.log("Age: ",age);


age -= 15;
console.log("Age: ",age);
console.log("-------------------------------------------------------------------------");


//Arithmetic Operators: +, -, *, /, %(modulus), **(Exponent)
// Arithmetic operators are used to perform arithmetic calculations. For example,

let a = 10;
let b = 20;
console.log("Addition:",a+b + " Multiplication:",a*b);
console.log("Cube of 10: ",10**3);
console.log("a/b = ", a / b);

var num = 10;
console.log(num++);         //op:10 bcoz: first it will print and then Increase its value: Post-Increment

var num2 = 5;
console.log(++num2);       //op:6 , bcoz:first it will increament and then prints it's value: pre-Increment

console.log("-------------------------------------------------------------------------");

//  Comparison Operators
//  Comparison operators compare two values and return a Boolean value, either true or false . For example,


const m = 5, n=10;
console.log(m>n);   //greater than : false
console.log(m<n);   //less than : true

console.log(m>=1); //greater than equal to: true
console.log(n<=10); //less than equal to: true

console.log(m==n);  //Equal to : false

console.log(m===n);   //strict equal to(equal value and same type) : false

console.log(m!=5);       //Not equal to: false
console.log('hello' != 'Hello'); // true

console.log(m!==5);       // Strict not equal to: false
console.log(2 !== '2');      // true

// Comparison operators are used in decision-making and loops.

//Logical Operators
// Logical operators perform logical operations and return a Boolean value, either true or false. For example,
console.log("-------------------------------------------------------------------------");
// const x1 = 5, y1 = 3;
// console.log((x1 < 6) && (y1 < 5)); // true

// logical AND: Both condition must satisfy or True:
console.log("AND(&&):",true && true); // true
console.log("AND(&&):",true && false); // false

// logical OR: either one condition must true:  
console.log("OR(||)",true || false); // true
console.log("OR(||)",false || true); // true

// logical NOT: it gives reverse or vice-versa:
console.log("NOT(!)",!true); // false


// Conditional Statements: 
console.log("-------------------------------------------------------------------------");

    let mode = "night";

        if(mode == "day"){
            ColorTheme = "White";
        }
        else if(mode == "night" ){
            ColorTheme = "Black";
        }
        else{
            ColorTheme = "NONE"
        }
    console.log(ColorTheme);






