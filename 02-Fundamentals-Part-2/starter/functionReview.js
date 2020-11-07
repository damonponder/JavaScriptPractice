
// const calcAge = function (year) {
//     return 2020 - year;
// }

// const retirementAge = function (yearsLeft) {
//     return 65 - yearsLeft;
// }

// const yearsUntilRetirement2 = function (birthYear, currentAge, firstName) {
//     const age = calcAge(birthYear);
//     const yearToRetire= retirementAge(currentAge);

//     if (yearToRetire > 0) {
//         console.log(`${firstName} is ${age} years old, and retires in ${yearToRetire} years`);
//     } else {
//         console.log(`${firstName} is already retired`);
//     }
// }

// const answerReview1 = yearsUntilRetirement2(1974, 46, 'Damon')


// // Function Declaration
// // Function that can be used before it is declared 

// function calcAge4 (birthYear) {
//     return 2021 - birthYear;
// }

//Function Expression
// A Function with the Value stored in a Variable 

// const calcAge5 = function (birthYear) {
//     return 2021 - birthYear;
// }

//Arrow function
// Good for one line code functions. Has no
// THIS keyword

// const calcAge6 = birthYear => 2021 - birthYear;

//Function Statement
//function name,,,function parameters,,,,function body
// function calcAge7(birthYear, firstName) {
//     const age = 2021 - birthYear;
//     console.log(`${firstName} is ${age} years old`);
//     return age; //Output value from function and terminate execution
// }
// //               Call Function w/ Arguments
// const age = calcAge7(1974, 'Damon');
// Calling, Running, or Invoking the function, using ()

// function fruitProcessor(apples, oranges) {
//  const juice = `There are ${apples} in the juice and ${oranges} in it as well`
//  return juice;
// }

// console.log(fruitProcessor(5,0))