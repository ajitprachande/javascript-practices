 console.log("Heyy! Good Morning");

    //variable declararation and Data types
    //The JavaScript data types are classified into 2 groups
   //1.Primitive data types  : Number, String, Boolean, Null and Undefined
   //2.Non-Primitive Types   :  Array, Object and Regular Expression.
   
    //JavaScript variables can be declared by using following keywords
    //var let const:


    let a;  //declaration
    a =101; // rendering or value assigning 
    console.log(a);

    a = 404;    // Re-assigning value.
    console.log(a);

    var name = "ajit"       //String Initialization.
    console.log(name);

    a = null;       //null data-type
    console.log(a);

    a = undefined;      //undefined data-type
    console.log(a);


    // const keyword It is also a block scope variable. - It will allow only initialization, no declaration, no rendering. - It will not allow shadowing. - It will not allow hoisting. 
        //const x;
        // x =10;  //not-allowed
        // console.log(x);      //Uncaught SyntaxError: Missing initializer in const declaration
    
    // String concatenation.

    let str1 = "Web";
    let str2 = "Technology";
    console.log(str1+" "+str2);

    //Case-Sensitivity in Js

    let num = 21;
    let NUM = 100;
     console.log(num); 
     console.log(NUM);


     // Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
     //It can be alpha numeric, but can’t start with number. 
     let $name = "john";        //valid
     console.log($name);
     //var jan_2020 = 34000; valid
    
     
     // let 1name = "ajit";     //invalid
     // var 2020jan = 23000;    //invalid

     // reserved keywords cannot be used as variable names:
     //var var = 404;  // gives error, let is a reserved keyword in JavaScript
    //  console.log(var);


    // Block scope and function scope
   function f1() {
    var age = 21;
    let newAge = 30;

   }
   console.log(a);
//    console.log(newAge); //Uncaught ReferenceError: newAge is not defined


    //2.Non-Primitive Types 
   // Array Initialize:
    let arr1 = ["john", "emma", "peter","mandy"];
    console.log(arr1[1]);   //1st index = "emma"
    console.log(arr1[0]); //0th index = "john"


     //Object Type: Object is a set of properties and methods.
    //You can access object property within the object by using “this” keyword
    let info = { 
        name: "john", 
        height: 5.5,
        age:21
    };  // object

console.log(obj.name);
console.log(obj.age);





   


  






