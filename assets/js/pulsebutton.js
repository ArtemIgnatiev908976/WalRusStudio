///////////////
//  Values
///////////////

// Values - Every value has a type that determines its role. There are six basic types of values in JavaScript: numbers, strings, Booleans, objects, functions, and undefined values.
// Operators - Combine and transform values with operators
// Arithmetic (+, -, *, /, and %)
// string concatenation (+)
// comparison (==, !=, ===, !==, <, >, <=, >=)
// logic (&&, ||)
// Unary (- to negate a number, ! to negate logically, and typeof to find a value’s type)
// Ternary (?:) to pick one of two values based on a third value.

//DEMO 1
// This is a function declaration. The statement defines the variable named "add" and points it at the given function.  The function should accept two parameters named add1 and add2.  The function should add the numbers and display the result
function add(add1, add2) {
    var addResult = add1 + add2;
    alert("The Result of adding " + add1 + " to " + add2 + " is: " + addResult);
}

//DEMO 2 - Similar to add but multiply two parameters
function mult(mult1, mult2) {
    result = mult1 * mult2;
    alert("The result of multiplying " + mult1 + " to " + mult2 + " is: " + result);
}

///////////////////////////////
//  STUDENT EXERCISES 1 and 2
///////////////////////////////
// Students add a minus() and divide() functions and HTML pulse <a> buttons.

/////////////////////
//    Expressions
/////////////////////

// A fragment of code that produces a value is called an expression.
// Combine expressions to express arbitrarily complex computations.  An expression
// corresponds to a sentence fragment.
//  Example:
//    (2 > 5) // evaluates to false
//    (5 > 2) // evaluates to true

// Variables = It’s how a program remembers things.  Use variables to catch and hold values.
//  Example:  var caught = 5 * 5;  // caught is equal to 25.
//  After a variable has been defined, its name can be used as an expression.
//  var ten = 10;  // create a variable named "ten" with an initial value of 10.
//  console.log(ten * ten);  // use the variable in an expression... results in 100 logged into the console window.

//////////////////
//  Environment
//////////////////
// When a program starts up, the environment in which a program runs is not empty. It always contains variables.  Some of these variables provide ways to interact with the surrounding system.
// JavaScript can run in lots of different environments from a web browser, a server, a drone, or even a refrigerator.
// When JavaScript is running inside of a web browser, there are variables and functions to inspect and influence the currently loaded website and to read mouse and keyboard input.
// Example: Math.min(100, 2, -1, 6, 8)
// Example: Math.max(1, 0, -1, 2, -45)
// Example: alert("Hello World")
// Example: console.log(10 * 10)
// Example" prompt("What is your dream?","To become a rapper.")

////////////////
// Variables
////////////////
// var indicates that this sentence is going to define a variable. It is followed by the name of the variable and, if we want to immediately give it a value, by an = operator and an expression.
// Example: var favColor = "blue"
// Example: var favColor = prompt("What is your favorite color?", "blue")

// A variable points at a value.  It is NOT tied to that value forever.
// The = operator can be used at any time on existing variables to disconnect them from their current value and have them point to a new one.
// Example:  var favColor = "blue"
//           console.log(favColor)
//           favColor = "yellow"
//           console.log(favColor)

//  When you define a variable without giving it a value, there's nothing to grasp, so it ends in thin air.
//  If you ask for the value of an empty variable, you’ll get the value "undefined".
//           var favColor2
//           console.log(favColor2)
//           favColor2 = favColor
//           console.log(favColor2)

/////////////////////////
//   CALLING FUNCTIONS
/////////////////////////
// You can call a function by putting parentheses after an expression that produces a function value
// Values given to functions are called arguments.
// alert("Hello World")
// isNaN(9) → false
// !isNaN(9) → true
// isNaN("cat") → true
// !isNaN("cat") → false
//confirm("Shall we dance?")

// The alert function needs only one of them, but other functions might need a different number or different types of arguments.
// The values between the parentheses are given to the program inside the function.
// alert function uses the string that we give it as the text to show in the dialog box.
// The isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number.
// Functions may also produce values.
// When a function produces a value, it is said to return that value.

// Math.min(2, 4);

//  function calls can be used within larger expressions
//  console.log(Math.min(2, 4) + 100) // → 102

//////////////////////////
//   CREATING FUNCTIONS
//////////////////////////

// Student Exercise
// Create a pulse button that calls a function named “times2()” that prompts() for a number and doubles it.
// Send result to the console via console.log().

//////////////////////
//  CONTROL FLOW
//////////////////////

// Statements are executed, predictably, from top to bottom.
// Executing statements in straight-line order isn’t the only option we have. An alternative is conditional execution, where we choose between two different routes based on a Boolean value.

//////////////
//   if
//////////////
//Conditional execution is written with the if keyword. We just want some code to be executed if, and only if, a certain condition holds true. The keyword "if" executes or skips a statement depending on the value of a Boolean expression. The deciding expression is written after the keyword, between parentheses, followed by the statement to execute.

// var age = 3

// if (x>2) {
//   console.log("x is " + age + " which is greater than 2")
// }

//////////////
//   else
//////////////
// You will often have to write code that handles the alternate path. The else keyword can be used, together with if, to create two separate, alternative execution paths.
// var age = 1

// if (x>2) {
//   console.log("x is " + age + " which is greater than 2")
// } else {
//   console.log("x is not greater than 2")
// }

//////////////
//   else if
//////////////
//If we have more than two paths to choose from, multiple if/else pairs can be “chained” together.
// var age = 1

// if (x<1) {
//   console.log("x is less than 1")
// } else if (x === 1) {
//   console.log("x is 1")
// } else if (x === 2) {
//   console.log("x is 2")
// } else {
//   console.log("x is " + x)
// }

// DEMO  Compare - create fatcat() function that  prompts for cat weight, store to variable, use if and else if and else to compare and console.log response about the fat cat.

function fatCat() {
    var catWeight = prompt("How much does your cat weigh in pounds?", "0")
    if (catWeight <= 5) {
        console.log(catWeight + " lbs is not fat, for a cat.")
    } else if (catWeight > 5 && catWeight <= 10) {
        console.log(catWeight + " lbs is a little hefty.")
    } else {
        console.log("Your cat is fat.")
    }
}

// DEMO SQUARE.  Create squareIt() function that prompt() for a number, stores in var, checks to see if !isNaN, confirm() to square the number, alert() the squared number,  else do alternate paths.
function squareIt() {
    var theNumber = Number(prompt("Pick a number", "2"));
    if (!isNaN(theNumber)) {
        var theConfirmDecision = confirm("Shall we, square the number?");
        if (theConfirmDecision === true) {
            alert("Your number squared is " +
                theNumber * theNumber);
        } else {
            alert("Your number is: " + theNumber);
        }
    } else {
        alert("You did not provide a number. Shame!");
    }
}

///////////////////
//   for loops
///////////////////
// all the statements that are related to the “state” of the loop are now grouped together
//  for (var number = 0; number <= 12; number = number + 2)
//The parentheses after a "for" keyword must contain two semicolons.
// The part before the first semicolon initializes the loop, usually by defining a variable.
// The second part is the expression that checks whether the loop must continue.  A test expression usually checks whether the counter has reached some boundary yet
//The final part updates the state of the loop after every iteration.
//  a “counter” variable is created to track the progress of the loop

// DEMO 2 - LOOP - EVEN NUMBERS
function evenNumbers() {
    var topNumber = prompt("Enter a number", 12)

    for (var number = 0; number <= topNumber; number = number + 2) {
        console.log(number);
    }

}

// DEMO 2 - LOOP - Power
// Here is the code that computes the power of a number:
// base = 5
// exponent = 3
// 5 * 5 * 5 → 125
function powerOf() {
    var result = 1
    var base = prompt("Provide a number for the base", 5)
    var exponent = prompt("Provide a number for the exponent", 3)

    for (var counter = 0; counter < exponent; counter = counter + 1) {
        result = result * base;
    }
    console.log(result);
}

// STUDENT EXERCISE - Looping a triangle

//Write a loop that makes seven calls to console.log to output the following triangle:

/*
#
##
###
####
#####
######
#######
*/

function triangle() {

    var row = ""
    for (var counter = 0; counter < 7; counter = counter + 1) {
        row = row + "#"
        console.log(row)
    }

}

// STUDENT EXERCISE - Fizz Buzz Part 1 of 2
//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// 1) Going over the numbers is clearly a looping job
// 2) Selecting what to print is a matter of conditional execution
//    there are three possible outcomes for every number
// 3) Using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero)

function fizzBuzz1() {
    for (var counter = 1; counter <= 100; counter = counter + 1) {
        if (counter % 3 === 0 ) {
            console.log("Fizz")
        } else if (counter % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(counter)
        }
    }
}

//modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz2() {
    for (var counter = 1; counter <= 100; counter = counter + 1) {
        if (counter % 3 === 0 && counter % 5 === 0 ) {
            console.log("FizzBuzz")
        } else if (counter % 3 === 0) {
            console.log("Fizz")
        } else if (counter % 5 === 0) {
            console.log("Buzz")
        }else {
            console.log(counter)
        }
    }
}



function fizzBuzz3() {
    for (var counter = 1; counter <= 100; counter += 1) {
        var word = ""
        if (counter % 3 === 0) {
            word += "Fizz"
        }
        if (counter % 5 === 0) {
            word += "Buzz"
        }
        console.log(word || counter)
    }
}


/////////////////////////////////////////
// Data Structures: Objects and Arrays
////////////////////////////////////////
//Numbers, Booleans, and strings are the bricks that data structures are built from. But you can’t make much of a house out of a single brick. Objects allow us to group values—including other objects—together and thus build more complex structures.

// JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.

// The notation for getting at the elements inside an array also uses square brackets. This will look up the element that corresponds to the index given by the expression in the brackets.

// The first index of an array is zero, not one. So the first element can be read with listOfNumbers[0].  This is called "zero-based counting".

// var listOfNumbers = [2, 3, 5, 7, 11];
//console.log(listOfNumbers[0]);
// → 2

//console.log(listOfNumbers[1]);
// → 3

//console.log(listOfNumbers[1 - 1]);
// → 2

//console.log(listOfNumbers[3]);
// → 7

/////////////////////////////
//  Properties and Methods
/////////////////////////////

// Almost all JavaScript values have properties. To get the length of a string we could use the .length property of the string object:

// var myString = "Cat"
// myString.length   → 3

// var listOfNumbers = [2, 3, 5, 7, 11]
// listOfNumbers.length → 5

// Every string has a toUpperCase property.
// Properties that contain functions are generally called methods of the value they belong to. As in, “toUpperCase is a method of a string”.

// var myString = "Cat"
// myString.toUpperCase()  → "CAT"



//////////////////////
//  Array Methods
//////////////////////

// The "push" method can be used to add values to the end of an array.
//  The "pop" method does the opposite: it removes the value at the end of the array and returns it.

// Here's an empty array named "theSentence"
// var theSentence = []

// Let's add a word to the array
// theSentence.push("The")
// console.log(theSentence)

// theSentence.push("cow", "jumped", "over", "the", "moon.")

//An array of strings can be flattened to a single string with the join method.
// theSentence.push("The", "dog", "chased", "the", "cat.")
// theSentence.join(" ")

//Demo:  Use the console to play with an array.  Push, pop, length and index and join

// DEMO:  Fill an array with the fizz and the buzz.

function fizzBuzzArray () {
    var fizzBuzzArray = []

    for (var counter = 1; counter <= 100; counter += 1) {
        var word = ""
        if (counter % 3 === 0) {
            word += "Fizz"
        }
        if (counter % 5 === 0) {
            word += "Buzz"
        }
        //console.log(word || counter)
        fizzBuzzArray.push(word || counter)
    }

    return fizzBuzzArray

}
