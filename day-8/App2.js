// What is a Prototype Chain? :
//       A prototype chain is the sequence of objects that JavaScript follows to search for a property or method when it is not found directly on an object.

let TestCompany = {
    name : "sarvarth"
}

console.log(TestCompany.name);
console.log(TestCompany.toString());

// What is __proto__?
//      __proto__ is a reference to an object's prototype, allowing you to inspect the object from which it inherits properties and methods.
// Note: __proto__ is mainly used for learning and debugging. In modern JavaScript, prefer methods like Object.getPrototypeOf().

let techCompany = {
    name : "Avo",
    id : 101,
    logo : true
};

console.log(techCompany.__proto__);
console.log(Object.getPrototypeOf(techCompany));

// Constructor Functions and Prototype Chain
function Student(name) {
    this.name = name;
}

Student.prototype.study = function() {
    console.log(this.name + " is studying.");
    
};

let s1 = new Student("ajit");
s1.study();

let s2 = new Student("amit");
s2.study();


//Property Shadowing

let Person = {
    name : "XYZ",
    work() {
        console.log("Working professional.");
        
    }
};

console.log(Person.name);   //XYZ

let p1 = Object.create(Person);
p1.name = "Ajit";
console.log(p1.name);       //Ajit

delete p1.name;

console.log(p1.name);       //XYZ

// Object.create()
//Object.create : creates a new object and sets its prototype to another object.

p1 = Object.create(Person);
p1.age = 20;
console.log(p1.age);

delete p1.age;
console.log(p1.age);        //undefined

console.log(p1.work);

let animal = {
    eat() {
        console.log("Eating...");
    }
}

let cat = Object.create(animal);
console.log(cat.eat);

//Exercise 2
// Create a constructor Car with a prototype method start(). Verify that two objects share the same method by checking:  car1.start === car2.start

function Car(name) {
    this.name = name;
}

Car.prototype.start = function() {
    console.log(`${this.name} is Starting...`);
}
      
let car1 = new Car("Audii");
let car2 = new Car("Punch");

car1.start()
car2.start()

console.log(car1.start === car2.start);




