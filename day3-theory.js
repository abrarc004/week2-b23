var academy="Asia Developer Academy";
console.log(academy.length);
console.log(academy.toUpperCase());
console.log(academy.toLowerCase());
console.log(academy.charAt(6));
console.log(academy.indexOf('ev'));
console.log(academy.lastIndexOf('e'));
console.log(academy.substring(5,14));
// transforming a string into an array using " " as delimiter
console.log(academy.split(" "));


var newNumber = 10.23456789;
console.log(newNumber.toFixed(3));
console.log(newNumber.toPrecision(3));

var anotherNumber = 10.3;
console.log(Math.round(anotherNumber));
console.log(Math.ceil(anotherNumber));
console.log(Math.floor(anotherNumber));

//This will generate generate random number between 0 and 1
console.log(Math.random());

//Generate random number between 1 to 100

function createRandom(){
 console.log(Math.ceil(Math.random()*100));
 }
createRandom();
