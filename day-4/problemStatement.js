// Problem: Create an array containing different types of teas.
let teas = ["kadk chai","masala chai","green tea","black tea","white tea","herbal tea","lemon tea"];
console.log("initial types of teas:");
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
// teas.push("Chamomile");
console.log(teas.push("Chamomile"));
console.log("Add one tea to the list :");
console.log(teas);


//Problem: Remove "black Tea" from the list of teas.
const index = teas.indexOf("black tea")
if(index > -1){
    teas.splice(index,1);
}
console.log("Removed one specific tea from list :");
console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated.
let caffeinatedTea = teas.filter((tea) => {
    return (tea !=="herbal tea");
})
console.log("Filtered teas that includes caffeinated:");
console.log(caffeinatedTea);


// Problem: Sort the list of teas in alphabetical order.
console.log("teas in Alphabetical order:");
console.log(teas.sort());


// Problem: Use a for loop to print each type of tea in the array.
console.log("using For loop:");
for(let tea = 0; tea<teas.length; tea++){
    console.log(teas[tea]);
}
console.log("================================================");
console.log("using For-each loop:");

let loop = teas.forEach((tea) => {
    console.log(tea);
    
})
console.log("================================================");
// Problem: Use a for loop to count how many teas are caffeinated (excluding"Herbal Tea").

let caffeinatedCount = 0;
for(let i=0; i<teas.length; i++){
    if(teas[i] !== "herbal tea"){
        caffeinatedCount++;
    }
}

console.log("CaffeinatedCount : ",caffeinatedCount);


console.log("\n================================================");
// Problem: Use a for loop to create a new array with all tea names in uppercase.
const upperCase = teas.map((tea) => {
    return tea.toUpperCase();
})
console.log("upperCase: ")
console.log(upperCase);

let case1 = teas.forEach((tea) => {
    console.log(tea.toUpperCase());
})

let upperCaseLetters = [];
for(let i=0; i<teas.length; i++){
    upperCaseLetters.push(teas[i].toUpperCase());
}
console.log(upperCaseLetters);



console.log("\n================================================");
// Problem: Use a for loop to find the tea name with the most characters.

let longestWord = "";

for(let i = 0; i<teas.length; i++){
    if(teas[i].length > longestWord.length){
        longestWord = teas[i];
    }
}
console.log("Longest word:",longestWord);

console.log("\n================================================");
// Problem: Use a for loop to reverse the order of teas in the array.

console.log("Reversed array: ");
 for(let i= teas.length-1; i>=0; i--){
    console.log(teas[i]);
}