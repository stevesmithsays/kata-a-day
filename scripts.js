// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him. 
// -Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".
// CODE HERE

const hoopCount = (n) =>{
  if(n >= 10){
    return "Great, now move on to tricks"
  }
    else{
      return "Keep at it until you get it"
    }
}

// ***************************

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// CODE HERE

const basicOp = (op, a, b) => {
  if(op === "+"){
  return a + b
  }
  else if(op === "-"){
  return a -= b
  }
  else if(op === "*"){
    return a *= b
  }
  else if(op === "/"){
  return a /= b
  }
}

// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7
// ***************************


// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// CODE HERE

const addBinary = (a, b) => {let c = a+b; return (c >>> 0).toString(2)}


// ** ORIGINAL SOLUTION ** //
// function addBinary(a,b) {
//   let sum = a + b;
//   return (sum >>>0).toString(2);
//  }
// ***************************

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// CODE HERE

const removeSmallest = (numbers) => {
  if (!(numbers.length)) {
    return [];
  }
  let counter = 0;
  for (let i=0; i<numbers.length; i++) {
    counter = 0;
    for (let j=0; j<numbers.length; j++) {
      if (numbers[i] <= numbers[j]) {
        counter++;
        if (counter === numbers.length) {
          numbers.splice(i, 1);
          return numbers;
        }
      }
    }
  }
}

// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// ***************************

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// CODE HERE
let whaStr = "well this is a great string"

const reverse = (str) => {
  let reversedStr = ''
  let newArr = str.split(' ');
  newArr.reverse();
  return newArr.join(' ');
  for(let i = 0; i<reversedStr.length; i ++){
    reversedStr.concat(newArr[i]);
 }
return reversedStr;
}

// refactored
const reverse = (s) => {
  return s.split(' ').reverse().join(' ');
}

//  *****************************
// Given an integral number, determine if it's a square number:
// CODE HERE

const isSquare = (num) => {
  return num >= 0 && Math.sqrt(num) % 1 === 0;
}

const isSquare = (n) => n >= 0 && Math.sqrt(n) % 1 === 0;

// ******************************
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// CODE HERE

const capitals = (word) => {
  let nuAr = []
    for(let j = 0; j<word.length; j++){
      if(word[j] == word[j].toUpperCase()){
        nuAr.push(word.indexOf(word[j]));
      }
    }
  return nuAr;
}

// ******************************
// Write a function that returns both the minimum and maximum number of the given list/array.
// CODE HERE

const minMax = (a) => {
  let arr = [];
  let mx = Math.max.apply(null, a);
  let mn = Math.min.apply(null , a);
  arr.push(mn, mx);
  return arr;
};

// ******************************
// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.
// CODE HERE

const greet = (name) => {
  let greeting = "hello ";
    if(name){
      return greeting + name + "!";
    }
    else{
      return null
    };
  }
  
// ******************************
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// CODE HERE

  const findUniq = (a) => {
    return +a.filter( (v) => {return a.indexOf(v) == a.lastIndexOf(v) } );
  }

// ******************************
// Write a function that removes every lone 9 that is inbetween 7s.
// CODE HERE

  const sevenAte9 = (s) => s.replace(/79(?=7)/g, '7');

// ******************************
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
// CODE HERE

  const sumTwoSmallestNumbers = (n) => {
    let nuArr = [];
    n.map((nums) => {nuArr.push(nums)});
    nuArr.sort((a,b) => {return a-b});
    return nuArr[0] + nuArr[1];
  }

// ******************************
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// CODE HERE


const findOdd = (a) => { 
  var count = 0;
  for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < a.length; j++) {
          if(a[i] == a[j]) {
            count++;
          }
    }
    if (count % 2 !== 0) {
        return a[i];
    }
  }
}

// ******************************

// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
// CODE HERE

const longestWord = (s) => {
  let longest = s.split(' ').sort((a,b) => b.length >= a.length);
  return longest[0]
}


// Write a function that returns both the minimum and maximum number of the given list/array.
// CODE HERE
const minMax = (a) => {
  let arr = [];
  let mx = Math.max.apply(null, a);
  let mn = Math.min.apply(null , a);
  arr.push(mn, mx);
  return arr;
}

// ******************************
// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
// CODE HERE

const isTriangle = (a, b, c) => {
  if(a+b > c && a+c > b && b+c > a){
    return true
  }
  return false
}

// ** RE-FACTORED ** //

const isTriangle = (a,b,c) => a+b>c & a+c>b & b+c>a ? true : false;

// ******************************

// Remove the wubs from any song (string)
// EXAMPLE: songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") = WE ARE THE CHAMPIONS MY FRIEND
// CODE HERE

function songDecoder (str){
  return str.replace(/(WUB)+/g, ' ').trim();
} 

const songDecoder = (s) => s.replace(/(WUB)+/g, ' ').trim();

// ******************************

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and or spaces.
// CODE HERE

// const getCount = (str) => {
//   let m = str.match(/[aeiou]/gi);
//   if(m !== null){
//     return m.length;
//   }
//     else
//   {
//     return 0;
//   }
// }
const getCount = (s) => {
  let m = s.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// ******************************
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// CODE HERE

const sortByLength = (ar) => {
  return ar.sort( (a, b) =>  a.length - b.length )
}    

// ******************************
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// EXAMPLE = XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("ooxx") => true
// XO("xooxx") => false
// CODE HERE

const XO = (s) => {
  let xC = 0;
  let oC = 0;
  let newS = s.toLowerCase();
    for(let i=0; i<newS.length; i++){
    console.log(newS[i]);
    if(newS[i] === "x"){
      xC++;
    }
    if(newS[i] === "o"){
      oC++;
    }
  }
  if(xC === oC){
    return true
  }
  else{ 
    return false; 
  }
}
// ******************************
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// EXAMPLE
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// CODE HERE

const solution = (s, e) => {
  let need = e.split('')[0];
  return s.endsWith(e) ? true : false;
}
// ******************************