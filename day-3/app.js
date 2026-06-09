// let i;
// var num = 17;
// for(i = 1 ; i<= 10 ; i++){
//     console.log(`${num} X ${i} = ${num*i}`);
// }

var input = "john doe 123 ";
let new_input = "";
input = input.toLowerCase();
for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") {
        new_input = new_input + input[i];
    }
}
for(var l =0 ; l<input.length;l++);
console.log("length of input email: ",l);
console.log(input);
console.log(new_input + "@gmail.com");





let product = {
    name: "glass",
    weight: "5.5gm",
    height: "10cm",
    available: true
}
console.log("Product name: ",product.name);
console.log("Product Details:");

for (var key in product) {
    // console.log(key);
    console.log(key + " : " + product[key]);

}

// String methods:
let str = "Hello";
console.log(str[0], str[1], str[2], str[3], str[4]);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let str1 = "  John  doe     ";
console.log(str1);

console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

let str2 = "Welcome to the world of JavaScript";
console.log(str2.slice(0,7));
console.log(str2.slice(11,14));

console.log(str.concat(str1));
console.log();







