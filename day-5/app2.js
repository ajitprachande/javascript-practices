//Higher Order Functions (HOFs) in JavaScript
// 1. map() : is used when you want to transform every element of an array into something else.
//map() creates a new array by transforming each element.
//Array =>  map() => Transform every element =>Return New Array

const arr = [10,20,30,40,50];

const res = arr.map((element) => {
    return element;
})
console.log(res);
console.log("------------------------------------------");

//ex.2

const arrobj = [
    {name : "ajit", age : 20},
    {name : "john" , age : 21},
    {name : "peter", age : 21}
];

//It returns name and age both
arrobj.map((element) => {
    console.log("Name: ",element.name, "Age: ",element.age);
})

console.log("------------------------------------------");
//ex.3
let OnlyNames = arrobj.map(name => {
    return name.name;
})
console.log(OnlyNames);

console.log("------------------------------------------");

//ex.4
let square = arr.map(ele => {
    return ele*ele;
})
console.log("Square of array : ",square);
console.log("------------------------------------------");
//ex.5
const products = [
    { name: "Laptop", price: 50 },
    { name: "Mouse", price: 10 },
    { name: "Keyboard", price: 20 }
];

let formatedProducts = products.map( (elements) => {
    return {
        name: elements.name, price: `$${elements.price}`
    };
})
console.log(formatedProducts);

console.log("------------------------------------------");


//ex.6
const students = [
    { id: 1, firstName: "Ajit", lastName: "Prachande" },
    { id: 2, firstName: "Rohit", lastName: "Sharma" },
    { id: 3, firstName: "Virat", lastName: "Kohli" }
];

let Info = students.map((element) => {
    return {
        Id: element.id, FullName: `${element.firstName} ${element.lastName}`
    };
});
console.log(Info);
console.log("--------------------------Filter()---------------------------");


//2. filter() is used when you want to keep only matching elements.
//      Creates a new array containing only elements that satisfy a given condition.
//Array => filter() => check Condition =>   return New filtered array

const marks = [88, 45, 90, 30, 70, 85];
//ex.1
let res1 = marks.filter((ele) => {
        return ele>80;
})
console.log(res1);


//ex.2
const products1 = [
    {name: "Laptop", stock: true},
    {name: "bulbs", stock: false},
    {name: "earbuds", stock: true},
    {name: "Mobile", stock: false},
    {name: "Watch", stock: true}
];

let Available_products = products1.filter((product) => {
    return product.stock;
})
console.log(Available_products)

console.log("--------------------------reduce()---------------------------");

//3. reduce() is used when you want to reduce an entire array into a single value.
/*Examples: Sum, Average, Total Price, Object Creation, Grouping Data

            >>Take previous result + Process current item = Return new result

 */

//ex.1
const numbers = [10, 20, 30, 40];
let summation = numbers.reduce((curr, nxt) => {
    return curr+nxt;
});
console.log("Summation: ",summation);

//ex.2 Calculate total bill
const cart = [
        { name: "Laptop", price: 50000 },
        { name: "Mouse", price: 1000 },
        { name: "Keyboard", price: 2000 }
    ];

let totalAmt = cart.reduce((total, item) => {
    return total+item.price;
},0);

console.log("Total amt: ",totalAmt);


//ex3. Find Highest Salary
const employees = [
    { name: "Ajit", salary: 50000 },
    { name: "Rohit", salary: 70000 },
    { name: "peter", salary: 7000 },
    { name: "john", salary: 1000 },
    { name: "Amit", salary: 6000 }
];

const highestSalary = employees.reduce((max, employee) => {

    if(employee.salary > max){
        return employee.salary;
    }

    return max;

}, 0);

console.log("High Salary : ",highestSalary);


//ex.4

const employees1 = [
    { name: "Ajit", dept: "IT" },
    { name: "Rohit", dept: "HR" },
    { name: "Amit", dept: "IT" },
    { name: "Sneha", dept: "HR" },
    { name: "kalika", dept: "HR" },
    { name: "priya", dept: "IT" }
];

let EpmDesignitions = employees1.reduce((result, employee) =>{

    if(!result[employee.dept]) {
        result[employee.dept] = [];
    }
   
    result[employee.dept].push(employee.name)
    return result;
}, {})

console.log(EpmDesignitions);

