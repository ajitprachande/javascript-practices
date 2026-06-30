/*
In JavaScript, an object is a collection of related data and functionality.
            Data → called properties
            Functions inside objects → called methods

Constructor Function: A blueprint used to create multiple similar objects.

Prototype: A shared object that stores methods and properties for all instances.

new Keyword: Creates a new object and connects it to the constructor's prototype.

Prototype Chain: The path JavaScript follows to find properties and methods.

Memory Benefit of Prototypes: Only one copy of shared methods is stored and used by all objects.

*/

let Person = {
    name : "hari",
    age : 30,
    gender : "male",

    work () {
        console.log("hari works in tech company.");    
    },

    status : () => {
        // console.log("Married life.");
        return "married";    
    },

    Display () {
        console.log("Display fun running");
        console.log("Name: ",this.name);
        
    }
};

console.log(Person);
console.log(Person.name);
console.log(Person.age);  

// console.log(Person.work());     //"hari works in tech company." it Returns undefined
Person.work();                     //"hari works in tech company."


console.log(Person.status());   //married       

//Inside an object method, "this" refers to the object that is calling the method.
// console.log(Person.Display());       //here we also Returns undefined
Person.Display();

// Create an object calculator with methods:
let calculator = {
    add(a,b) {
        return a+b;
    },
    mul : (a,b) => {
        return a*b;
    },

    div : (a,b) => a/b          //Shorter Arrow Function

        // Important Point:
        //        Inside objects, arrow functions do not have their own this. prefer normal function.
}
console.log("Addition: ",calculator.add(5,5));
console.log("multiplication: ",calculator.mul(5,5));
console.log("Division: ",calculator.div(5,5));


//Constructor Function
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}
//creating objects  
let s1 = new Student("Ajit",85);
let s2 = new Student("Amit",85);
console.log(s1);
console.log(s2);

console.log(s1 === s2);         //false         (Both objects share Diiferent method. means Different copy of memory)

// here we do one big mistake is that, If we create multiple Objects {s1, s2 ,s3 ,....s100 } Each object gets its own copy:  then Memory Issue we have to face wastage of memory.


//Now here in picture Enter "Prototypes"
// JavaScript solves this using prototype sharing.
// Instead of putting methods inside every object, we put them on the prototype.

function Student(name, marks){
    this.name = name;
    this.marks = marks;
}

Student.prototype.ShowMarks = function () {
    console.log("Student marks: ",this.marks);
}

let s3 = new Student("Ajit",85);
let s4 = new Student("Omraj",85);

s3.ShowMarks();
s4.ShowMarks();

//here {s3 and s4} Both objects share ONE method. so Only one copy exists.

console.log(s1.showMarks === s2.showMarks);     //true   (Only one copy exists.)

// Ex. 2:


//Constructor fun
function Employee (work, salary) {
    this.work = work;
    this.salary = salary;
}

// Shared Method any Employee
Employee.prototype.DisplayInfo = function () {
    console.log(`${this.work} salary is : ${this.salary}`);    
}

//Creating Employees object
let hari =  new Employee("Developer",50000);
hari.DisplayInfo();

let ram =  new Employee("designer",45000);
ram.DisplayInfo();

// Useful Prototype Methods
// Every object inherits methods from <Object.prototype>.

let Ajit = {
    age : 20,
    role: "developer"
}
console.log(Ajit.hasOwnProperty("role"));       //true

// Object.prototype  come from the prototype chain.


