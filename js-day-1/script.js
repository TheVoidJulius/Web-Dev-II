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


let str = "programming is a very good subject to learn rrrrrr";
let count = str.split("r").length - 1;

console.log(count);


