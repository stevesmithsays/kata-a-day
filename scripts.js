// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him. 

// -Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// CODE HERE

function hoopCount(n){
  if(n >= 10){
    return "Great, now move on to tricks"
    }
    else{
    return "Keep at it until you get it"
    }
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// CODE HERE

// const basicOp = (op, a, b) => {
//   if(op === "+"){
//   return a + b
//   }
//   else if(op === "-"){
//   return a -= b
//   }
//   else if(op === "*"){
//     return a *= b
//   }
//   else if(op === "/"){
//   return a /= b
//   }
// }

// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7