 // let arr = [4, 9, 1, 7, 3];
// let reversed = [];

// reversed.push(arr.pop());
// reversed.push(arr.pop());
// reversed.push(arr.pop());
// reversed.push(arr.pop());
// reversed.push(arr.pop());

// console.log(reversed); // 

// q - remove all negative int and let only positive int in the array 

// let arr = [4, -9, 1, -7, 3, -2, 5];
// let posArr = [];
// while (arr.length > 0) {
//     let num = arr.shift();    
//     if (num >= 0) {
//         posArr.push(num);
//     }
// }

// console.log(posArr); 

// output - [4, 1, 3, 5]



// let arr = [1, 2, 3, 4, 3, 2, 1];
// let temp = [];
// let isPalindrome = true;

// while (temp.length > 1) {
//   let first = temp.shift(); 
//   let last = temp.pop();  

//   if (first !== last) {
//     isPalindrome = false;
//     break;
//   }
// }

// console.log(isPalindrome); // true

// remove all duplicate elements from the array
//split even and odd number from a given array
// move all zeros to the end of the array

// let sentence = "The quick brown fox jumps over the lazy dog";
// let words = sentence.split(" ");
// console.log(words);

// let sentence2 = 'Hello, how are you doing today?';
// let words2 = sentence2.split("are");
// console.log(words2);


// let str = "programming is a very good subject to learn rrrrrr";
// let count = str.split("r").length - 1;

// console.log(count);

// // 1. Function Declaration
//  function greet(name) {
//    return `Hello, ${name}!`;
//  }
//  console.log(greet("Alice")); // Output: Hello, Alice!

// // 2. Function Expression
//  const add = function(a, b) {
//     return a + b;
// };
// console.log(add(5, 3)); // Output: 8

// //  3. Arrow Function 
//  const multiply = (x, y) => x * y;
// console.log(multiply(4, 6)); // Output: 24



// //   4. Immediately Invoked Function Expression (IIFE) 
// (function() {
//     console.log("This is an IIFE!");
// })();
// // Output: This is an IIFE!

// // 5. Recursive Function
// function factorial(n) {
//    if (n <= 1) return 1;
//   return n * factorial(n - 1);
//  }
// console.log(factorial(5)); // Output: 120

// //  6. Callback Function
// function fetchData(callback) {
//   setTimeout(() => {
//       const data = "Sample Data";
//       callback(data);

//      }, 1000);

// }
// fetchData(function(data) {
//     console.log("Fetched Data:", data);
// });


// // 7. anonymous function 
// const anonymousFunction = function() {
//     console.log("This is an anonymous function.");
// };
// anonymousFunction(); // Output: This is an anonymous function.</p>

// // 8. ASYNC function 
    
//     setTimeout(callback,timedelay)


//     setTimeout({}=> {
//         console.log("This message is shown after 2 seconds");
//     }, 2000);



// (function(){
//     console.log("This is a named function expression.");

// })()