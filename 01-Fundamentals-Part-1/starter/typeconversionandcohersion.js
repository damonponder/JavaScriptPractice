//Conversion

const inputYear = '1974';

console.log(Number(inputYear) + 18);

console.log(String(23, 23));

//type coercion
//Converts numbers to strings
//The only operator this does not work for is the + operator.
//It happens in reverse, and the numbers are converted to strings.


console.log('I am' + ' ' + 23 + ' years old!');
console.log('23' - '10' - '3')
console.log('23' / '2')
console.log('23' > '18')

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// 5 falsy values
// 0, '', undefined, null,  NaN