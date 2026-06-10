// An array is a special variable that can store multiple values in a single variable.
// used for storing multiple values, it easy to process data through loops,..

//Method 1: Array Literal 
let student_roll = [101, 102, 103, 104, 105];
console.log(student_roll);
//op: [ 101, 102, 103, 104, 105 ] 

console.log("---------------------------------------------");

//Method 2: Array Constructor
let arr = new Array("ajit","vinya","ruturaj","shasmit")
console.log(arr);

//Array Length
console.log("arr length: ",arr.length);
console.log("---------------------------------------------");

//op: [ 'ajit', 'vinya', 'ruturaj', 'shasmit' ]
console.log("first index name: ",arr[0]);
console.log("first index name: ",arr[1]);


//Modifying Elements
arr[0] = "Ajit Prachande";
console.log(arr[0]);
console.log("---------------------------------------------");

//Adding Elements
//push() : Adds element at the end.
let products = ["footwear", "cloths"];
products.push("beauty products","home appliances");
console.log("push method: ",products)

//unshift() : Adds element at the beginning.
products = ["footwear", "cloths"];
products.unshift("Electronics");
console.log("unshift method : ",products);
console.log("---------------------------------------------");
//slice() :Creates a new array by copying a portion of an existing array without modifying the original
products  = ["footwear","Fashion","Electronics","beauty products","laptops"];
console.log( "slice method: ",products.slice(1,4));
console.log("original array : ",products);

console.log("---------------------------------------------");
//splice() : Adds, removes, or replaces elements in an array by modifying the original array.
//Syntax :  array.splice(startIndex, deleteCount, item1, item2, ...)
products  = ["footwear","Fashion","Electronics","beauty products","laptops"];
console.log("splice method (removing element) : ",products.splice(1,2));
console.log("original array: ",products)

console.log("---------------------------------------------");
products  = ["footwear","Fashion","Electronics","beauty products","laptops"];
console.log("splice method (add element): ",products.splice(2,0,"HELLO"));  // or products.splice(2,0,"HELLO")

console.log(products);

console.log("Removed element: ",products.splice(0,2));      // 0->index_value and 2->delete_count
console.log("---------------------------------------------");

products  = ["footwear","Fashion","Electronics","beauty products","laptops"];
console.log("splice method (Replace Elements) : ",products.splice(0,1,"NEW_PRODUCT"));    //'prints replaced element'
console.log(products);





console.log("---------------------------------------------");


//Removing Elements
// pop() : Removes last element.
products = ["footwear","Fashion"];
products.pop();
console.log(products);

//shift() : Removes first element.
products = ["footwear", "cloths", "Fashion"];
products.shift();
console.log(products);
console.log("---------------------------------------------");

//Looping Through Arrays
//  for Loop
let nums = [100, 200, 300, 400, 500];
for(let i = 0; i<nums.length; i++) {
    console.log(nums[i]);
}
//for...of Loop
console.log("-----------for-of loop---------------");

let users = ["john","peter","jokey","calk","harry"]
for(let name of users){
    console.log(name);
}
//Searching in array:
console.log("------------Searching in array---------------");

//includes() : Checks whether a value exists in the array and returns true or false.
products = ["footwear","Fashion","Electronics","beauty products","laptops"];
console.log(products.includes("laptops")); //true
console.log(products.includes("laptop")); //false
console.log("---------------------------------------------");


// indexOf() : Returns the index of the first occurrence of a value; returns -1 if not found.
products = ["footwear","Fashion","Electronics","beauty products","laptops"];
console.log(products.indexOf("footwear"));  // 0
console.log(products.indexOf("foot"));  // -1


