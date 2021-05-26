// Fizzbuzz

for(var i = 0; i <= 100; i++){
  if(i % 15 == 0){
    console.log("Fizzbuzz");
  }
  else if(i % 3 == 0){
    console.log("Fizz");
  }
  else if(i % 5 == 0){
    console.log("Buzz")
  }
  else{
    console.log(i);
  }
}

// Fibbonacci

var num1 = 1;
var num2 = 1;

for(var i = 0; i < 10; i++){
  console.log(num1);
  console.log(num2);
  num1 = num1 + num2;
  num2 = num2 + num1;
}

// Longest word

function findTheLongestWord(sentence){
 var max = 0;
 var arrSentence = sentence.split(" ");
 for (var i = 0; i < arrSentence.length; i++){
   if(arrSentence[i].length > max){
    max = arrSentence[i].length; 
   }
 }
  return max;
}

console.log(findTheLongestWord("The quick brown fox jumped  over the lazy dog"));
console.log(findTheLongestWord("Welcome to Asia Developer Academy"));

// reverse string

function reverseString(str){
  var answer = "";
  for(var i = str.length-1; i >= 0; i--){
    answer += str.charAt(i);
  }
  return answer;
}

console.log(reverseString("Hello"));

// Vowel counter

function calculateVowel(sentence){
  var vowels = 0;
  sentence = sentence.toLowerCase();
  for (var i =0; i < sentence.length; i++){
    if(sentence.charAt(i)== "a"|| sentence.charAt(i)=="e" || sentence.charAt(i)== "i" || sentence.charAt(i)== "o" || sentence.charAt(i)== "u"){
      vowels++;
    }
  }
  
  return vowels;
}

console.log(calculateVowel("Asia Developer Academy"));
console.log(calculateVowel("I love javascript"));



