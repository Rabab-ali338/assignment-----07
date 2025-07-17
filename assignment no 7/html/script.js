                                //  chapter name : Funcations:
 
//  question no 1: write a funcation that displays current date and time in your brower.

// function displaycurrentDateTime(){
    // var currentDateTime = new Date();
    // document.write("Current Date and Time: " + currentDateTime.toLocaleDateString() + " " + currentDateTime.toLocaleTimeString());
// }
// displaycurrentDateTime();

// // question no 2: write a funtion that takes first name and last name and then it greets the user using his full name.

// var firstName = prompt("Enter your first name:");
// var lasttName = prompt("Enter your last name:");
// function greetUser( firstName , lasttName){
//     alert("hello" + " " + firstName + " " + lasttName + "!" );
// }
// greetUser(firstName, lasttName);

// // question no 3: write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// function addNumbers(a , b){
//     var sum = a + b;
//     document.write("The sum of " + a + " and " + b + " is: " + sum);
// }
// addNumbers(num1, num2);

// // question no 4: calculator: 
// // write a function that takes three arguments num1, num2,and operator and compute the desired operation .
// //  return and show the desired result in your brower.

// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator){
//         case '+':
//             result = num1 + num2;
//             break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//                 case '*':
//                     result = num1 * num2;
//                     break;
//                     case '/':
//                         result = num1 / num2;
//                         break;
//                         case '%':
//                             result = num1 % num2;
//                             break;
//                             default:
//                                 alert("Invalid operator! please use +, -, *, /, or %.");
//                                 return;
//     }
//     document.write("The result of " + num1 + " " + operator + "  "  + num2 + " is: " + result);
// }

// // question no 5: write a function that squares its argument.

// function squaresNumber(number){
//     var squares = number * number;
//     document.write("The square of " + number + " is: " + squares);
// }
// squaresNumber(parseFloat(prompt("Enter a number to square:")));

// // question no 6: write a function that computes factorial of a number.

// function factorial(n){
//     if (n < 0){
//         return " Factorial is not defined for negative numbers.";
//     }
//     if (n === 0 || n === 1){
//         return 1;
//     }
//     var result = 1;
//     for (var i =2; i <= n; i++){
//         result *= i;
//     }
//     result = factorial(parseInt(prompt("Enter a number to compute its factorial:")));
//     document.write("The factorial of " + n + " is: " + result);
// }

// // question no 7: write a function that take start and end number as inputs and display counting in your browers.

// function displayCounting(start, end){
//     if (start > end){
//         document.write("Start number should be less than or equal to end number.");
//         return;
//     }
//     var counting = "";
//     for( var i = start; i <= end; i++){
//         counting += i + " ";
//     }
//     document.write('Counting from ' + start + ' to ' + end + ': ' + counting);
// }
// displayCounting(parseInt = prompt("Enter start number: "), parseInt = prompt("Enter end number:") );

// // question no 8: write a neste function that computes hypotense of a right angle traingle.

// function calculateHypotenuse(base, perpendicular){
//     // inner function to calculte square
//                 function square(num){
//                 return num * num;
//          }
//         //  hypotenuse2 = base2 + perpendicular2
//          var hypotenuseSquared = square(base) + square(perpendicular);
//          var hypotenuse = Math.sqrt(hypotenuseSquared);
//          return hypotenuse;
// }
// var base = 2;
// var perpendicular = 2;
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// document.write("Base:" + base + "<br>");
// document.write("perpendicular:" + perpendicular + "<br>");
// document.write("hypotenuse:" + hypotenuse.toFixed(2));

// question no 9:  write a function that calcultes the area of a rectangle.
// A. width * height
// pass width and height in following manner:
// 1. Arguments as value.
// 2. Arguments as variables.

// function calculteAreaofRectangle(width, height){
//     return width * height;
// }
// calculteAreaofRectangle(5, 10); 
// // or
// var width = 5;
// var height = 10;
// var area = calculteAreaofRectangle(width, height);
// document.write("The area of the rectangle with width " + width + " and height" +  height  +  " is:"  + area + "<br>");

// question no 10:  write a  JavaScript function that checks wheather a passed string is palindrome or Not.

// function isPalindrome(str) {
//     var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     var reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// var inputStr = prompt("Enter a string to check if it's a palindrome:");
// if (isPalindrome(inputStr)) {
//     document.write(inputStr + " is a palindrome.");
// } else {
//     document.write(inputStr + " is not a palindrome.");
// }


// question no 11: write a JavaScript function that accepts a string as a parameter and converts the
//  first letter of each word of the string in upercase.
// EXAMPLE STRING: "the quick brown fox"
// EXPECTED OUTPUT:" The Quick Brown Fox"

// function capitalizeFirstLetter(str) {
//     return str.replace(/\b\w/g, function(char) {
//         return char.toUpperCase();
//     });
// }

// var inputString = prompt("Enter the words");
// var capitalizeFirstLetterString = capitalizeFirstLetter(inputString);

// document.write("Original String: " + inputString + "<br>");
// document.write("Capitalized String: " + capitalizeFirstLetterString);

// question no 12: write a JAvaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING: " Web Development Tutorial"
// EXPECTED OUTPUT: "Development"

// function findLongestWord(str){
//     var words = str.split(' ');
//     var findLongest = words[0];
//     for(var i =1; i< words.length; i++){
//         if (words[i].length > findLongest.length){
//             findLongest = words[i];

//         }
//     }
//     return findLongest;
// }
// var inputString = prompt("Enter a sentence");
// var LongestWord = findLongestWord(inputString);
// document.write("Original String: " + inputString + "<br>");
// document.write("longest word: " + LongestWord + "<br>");


// question no 13: write a JavaScript function that accepts two arguments,
//  a string and a letter and the function will count the number of occurrence of the specified letter within the string.
//  SAMPLE ARGUMENTS: 'JSResourceS.com', 'o'

// function countLetter(str, letter){
//     var count = 0;
//     for( var i = 0; i< str.Length; i++){
//         if(str[i] === letter)
//             count++;
//         }
// return count;
// }
//  console.log(countLetter(" Hello World" , "1"))
//  console.log(countLetter("JavaScript" , "a"))


// question no 14:  The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
// Circumference of circle    =     2πr 
// Area of circle       =     πr2

// function calcCircumference(radius){
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius){
//     var area = Math.PI * radius * radius;
//     document.write("The area is: " + area.toFixed(2) + "<br>");
// }
// var radius = parseFloat(prompt("Enter the radius of the circle:"));
// calcCircumference(radius);
// calcArea(radius);


                                    // The End Of The Code Snippnet //