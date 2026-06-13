var age;
age=10;
function Print(a,b) {
    console.log("Hello:",name);

    //local-scope
        age = 20;
}
// let name = "ajit prachande";
// Print(name);

// //Print();  //without argument we called function it gives error : undefined

// function Add(a, b) {
//     console.log(a+b); 
// }
// Add(5,5);

// function Mul(a,b){
//     return a*b;
// }
// let ans = Mul(5,5);
// console.log(ans);

// console.log("product: ",Mul(10,10));

function Sub(a,b){
    console.log("hii");
    return a-b;
    console.log("hello");   //inreachable code(bcoz of return stmt).
    
}

let s = Sub(15,5);
console.log(s);

//Arrow function
let arr = (a,b) => {
    // console.log("Arrow function executed");
    return a+b;
}
console.log(arr(100,100));




((greet) => 
{
    console.log(greet);
})("Namste India");



//11-06-2026

//for-each loop using arrow function
console.log("for loop arrow function");

let arr3 = [10,25,20,30,40,50, 55];
arr3.forEach((element, index) => {
    console.log(element,"at index" ,index);
}); 


//for-each loop using normal function

arr3.forEach(function display(a) {
    console.log("val",a);
})

arr3.forEach(function printMsg() {
    console.log("hello X5");
    
})


arr3.forEach(function sqrPrint(a){
    console.log("Square: ",(a*a));
})


arr3.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
    
})

let sqr = arr3.map((val, ind) => {
    //console.log(val*val);
    return val*val;
    
})
console.log(sqr);

console.log("--------------------------------------");


let even = arr3.filter((val)=> {
    // if(val%2==0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return val%2==0
})
console.log("Even array: ",even);


let arr_list = [
    1345, 2876, 4123, 1567, 3989,
    2456, 4780, 3214, 1098, 4521,
    1765, 3678, 2890, 4999, 1234,
    4321, 2109, 3456, 5005, 5002
];

let res = arr_list.filter((val) =>{
    return (val>=2000 && val<=5000)
})

//additon of array
let sum = arr_list.reduce((first, second) => {
     return (first+second);
})
console.log("Summation : ", sum);



let greatest = arr_list.reduce((first,second)=>{
    if(first>second) {
        // first = first;
        return first;
    }
    else{
        // first = second;
        return second;
    }
})

console.log("greatest : ", greatest);

// let mums = [1,2,3,4,5,6,7,8,9,10];
// let fun = nums.reduce((curr, nxt) => {
//     if()
// })

const students = [
{ name: "Omkar", marks: 85 },
{name: "Rohit", marks: 92 },
{ name: "Amit", marks: 78 },
{ name: "Sneha", marks: 96 },
{ name: "Priya", marks: 88 },
{ name: "aj" , marks: 67},
{ name: "ajstar" , marks: 87}
];
console.log("--------------------------------------");
//1.
let std = students.filter(val => {
    return val["marks"]>=80;
})
console.log(std);

console.log("--------------------------------------");

//3.
console.log("--------------------------------------");
let avg_marks = std.reduce((cur, nxt) => {
    return cur + nxt["marks"];
},0)
console.log(avg_marks/std.length);



console.log("--------------------------------------");


//2.
let names = students.map(name => {
    return name["name"];
})
console.log(names);

console.log("--------------------------------------");


let marks = students.map(marks => {
    return marks["marks"];
})


console.log(typeof(students));
console.log(marks);
console.log("--------------------------------------");

// 3.avg marks
// let avg = students.filter(val => {
//     if(name["name"]>=80){

//     }
// })





//console.log("Age: ",age);








