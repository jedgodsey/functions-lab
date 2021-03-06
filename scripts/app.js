// # Functions lab!


// // ### 1. printGreeting

// let printGreeting = name => `Hello ${name}! How have you been?`;


// console.log(printGreeting("Slimer"));


// // ### 2. reverseWordOrder

// // Write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// let reverseWordOrder = str => {
//     stringArray = str.split(' ');
//     let reverseArray = [];
//     for (let i = stringArray.length; i >= 0 ;i--) {
//         reverseArray.push(stringArray[i]);
//     }
//     return reverseArray.join(' ');
// }


// console.log(reverseWordOrder("Ishmael me Call"));



// console.log(reverseWordOrder("I use Lâncome on my comb"));

// // ### 3. calculate

// // Write a function called `calculate`.

// // This function should take three arguments: two numbers and a string.

// // Name the parameters `num1`, `num2`, and `operation`.

// // If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

// // If if the function is called with the third argument as "sub", it should return return `num1` minus `num2`.

// // Do the same thing for multiplication "mult", division "div", and exponent "exp" (where `num2` is the exponent of `num1`).

// let calculate = (num1, num2, operation) => {
//     switch (operation) {
//         case 'add':
//             return num1 + num2;
//         case 'sub':
//             return num1 - num2;
//         case 'div':
//             return num1 / num2;
//         case 'div':
//             return num1 * num2;
//         case 'exp':
//             return Math.pow(num1, num2);
//         default:
//             return "Sorry, I can't read";
//     }
// }

// console.log(calculate(4, 3, "sub"));

// console.log(calculate(4, 3, "exp"));


// // ### 4. pandigital numbers

// let panCheck = num => {
//     let strNum = num.toString();
//     let verdict = true;
//     for (let i = 1; i <= strNum.length; i++) {
//         if (strNum.indexOf(i) < 0) {
//             verdict = false;
//         }
//     }
//     return verdict;
// }

// console.log(panCheck(123456))


// ### 5. `printGreeting` v2.0

// const userInput = prompt("Please enter some input");

// let printGreeting2 = name => alert(`Hello ${name}! How have you been?`);
// printGreeting2(userInput);

// ### 6. Functions + loops: a special partnership 

// Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a `#` character (representing a black square). Hence, the characters should form a chessboard.

// Calling your function should print something like this:

// ```
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// ```

// ### 7. Modify it to make any size grid.

// When you have a function that generates this pattern, modify it to take a parameter `size`.  Make the function work for any size, outputting a properly formatted grid of the given width and height.  If it helps you to have this set. The very first square should always be white.

// Remember to give it a nice **semantic** name

let checker = num => {
    for (let i = 1; i <= num; i++) {
      let row = [];
      let string = '';
      if (i % 2 == 0) {
        for (let j = 1; j <= num; j++) {
          if (j % 2 === 0) {
            row.push(' ');
          } else {
            row.push('#');
          }        
        }
      } 
      else 
      {
        for (let k = 1; k <= num; k++) {
          if (k % 2 === 0) {
            row.push('#');
          } else {
            row.push(' ');
          }        
        }
      }
        string = row.join('');
        console.log(string);
    }
  }
  checker(22);

// > This problem was adapted from one in [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html#p_1pkxSCSkVg) so hopefully you've already seen it because you've been reading Eloquent Javascript. If you haven't yet, read the first 3 chapters (this reads great on a phone, and if you take transit, this is a great thing to read on the train/bus on your way in).  Homework will be assigned soon. 

// <hr>

// ### 8. Variable number of arguments

// Modify `calculate` above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

let determine = (num1,operation, num2) => {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        case 'div':
            return num1 / num2;
        case 'div':
            return num1 * num2;
        case 'exp':
            return Math.pow(num1, num2);
        case 'sqrt':
            return Math.sqrt(num1);
        default:
            return "Sorry, I can't read";
    }
}
console.log(determine(35, 'sqrt'));

// Click "Details" below for a hint:

// <details>
// Hint: use `typeof` 
// </details>
