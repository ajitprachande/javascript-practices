/*What is Function
A function is a reusable block of code that performs a specific task.
Instead of writing the same code again and again, we put it inside a function and call it whenever needed.
*/


//1. Function Declaration (Definition)
function Print() {
    console.log("Hello Software Engineerr.")
}
//To execute a function:
Print();        //calling fun

//2. fun with parameter

function greet(name) {
    console.log("Hello Mr.",name);
}
greet("Ajit");


function Total_Bill(amt) {
    return ((amt * 20) / 100);
}

let discount = Total_Bill(800);
console.log("Discount: ",discount);
//OR 
// console.log(CalculateDiscount(800));


//3. Arrow Functions
//Ex.1
const Add = (a,b) => {
    return a+b;
}
console.log("Arrow fun: ",Add(5,5));

//Ex.2
const CalSalary = (sal) => {
    console.log("Salary: ",sal-2000);
    
}
CalSalary(5000);

//Ex.3
const CalInterest = (amt) => {
    console.log("Interest: ", amt*0.10);
}
CalInterest(5000);

//Ex.4
const PasswordChecker = (pass) => {
    if(pass.length >= 8 && pass == "Admin@123") {
       return true;
    }
    else {
        return false;
    }
}
console.log(PasswordChecker("Admin@123"));

//Ex.5
const guest = ["John","peter","berlin","garat"];
guest.forEach( (element) => {
    console.log("Welcome Mr.",element);
    
});

//forEach() is used to iterate over every element of an array.  It performs an action on each element.
console.log("-------------------ForEach() Example-------------------------");

//Ex.6
const EmpID = [101,102,103,104,105];
EmpID.forEach((id, index,arr)=> {
    console.log("value: ",id ,"Index NO:", index,"Array: ", arr);
    
})

// after this see app2.js file(part-2)




