// HTML - Hyper Text Markup Language, To create the structure of a website , it defines for example what is a heading, a subheading, a paragraph, a list, image etc...
// CSS - Cascading Style Sheet = Define the design of your website, for example my h1 is blue, font size 32 px ... etc
// Javascript - What make a website dynamic , animation, retrieving data, showing dynamic data, perform calculation, doing logic etc .. -> These are some example of what is dynamic inside a website

console.log("Hello World");

// In Javascript, you write comment using //
/// 1) Declaring a variable - to create a variable  you use the keyword var
// 2) decalring a string variable - character,word, you use "" or '' to indicate it is a string

var name="Abrar";
console.log(name);
// 2a - you can use + with string, this operation is called string concatenation. combining multiple string 

var greetings ="Hello "+name;
console.log(greetings);

// 3) Numbers - You can the variable of type number

var a = 10;
var b = 3;

console.log(a);
console.log(b);

// 3a - 5 important operators for numbers : +,-,/,*,%
var sum = a+b;
console.log(sum);
var minus = a-b;
console.log(minus);
var product = a*b;
console.log(product);
var division = a/b;
console.log(division);
var modulus = a%b;
console.log(modulus);

// 4) boolean, there only have 2 value: true and false

var hungry = true;
var tired = false;
console.log(hungry);
console.log(tired);

// important operation ! , &&, ||

// Exclamation alway give the reverse
console.log(!hungry);

// or is ||, one of it need to be true, for it to be true

var breakfast = hungry ||tired;
console.log(breakfast);

// And is &&, both need to be true for it to be true.
var longbreak = hungry && tired;
console.log(longbreak);

// you are going to use all the data type, string,number, boolean, array, object, it's operation and combine it with the control flow(if else, for loop), try and solve a question, problems, logic/business rules   

// 1) prodedural (top to button)
// 2) conditional, depend - you might need to ignore and jump certains steps, if else   
// Repeatition - you keep doing until you reach certain condition, x times - for loop, while (fcc)   -


if(tired == true){
  console.log("Let's have a break");
}
else{
  console.log("Lets continue to class");
}
// scenario 2 - using < or > sign
var age = 20;
if(age > 18){
  console.log("You can see the movie");
}
else{
  console.log("You cannot see the movie");
}

// Scenario 2 - more than 1 condition
 if(age < 13){
   console.log("You cannot see the movie");
 }
else if(age < 18){
  console.log("You can see with parental guidance");
}
else{
  console.log("you can see the movie");
}

// 1) Create the statement to check if a number is odd or even
var testNum = 10; // 10 is an even number,13 is an odd number.. 73 is odd number
// A number is an even if it is divisible by 2
// It is divisible by 2, the remainder of division operation/ modulo == 0

if(testNum % 2 == 0){
  console.log(testNum+" is an even number");
} 
else{
  console.log(testNum+" is an odd number");
}

//exercise conditional

var price = 120;
var age = 41;

if(age < 18){
  console.log("The ticket price is "+price*0.5);
}
else if(age < 40){
  console.log("The ticket price is "+price);
}
else if(age < 65){
  console.log("The ticket price is "+price*0.75);
}
else{
  console.log("The ticket price is "+price*0.5);
}

/// Repeatition
// for loop(repeat x times)
// From(dari): until ; every iteration add by 1// i++ = i+1
for(var i = 0; i < 10; i++){
  console.log(i);
}

// from 10; until 0; but every iteration remove 1 i-- remove by 1
for(var i = 10; i > 0; i--){
  console.log(i);
}
for(var i = 1; i <10; i+=2){
  console.log(i);
}

//decomposition-> you try to solve a problem by dividing it into a small chunk of problem
//try to solve something that you know
// 1) 10 we know how to write from 1 to 12
// 2) you know how to add x next to a number (concatenate)
var lines = 12;
var multiplier = 3;
for(var i = 1; i <= 12; i++){
  console.log(i+" x "+multiplier+" = "+ i*multiplier);
}
 
