
// Arrow Function
//The return is explicit

const calcAge3 = birthYear => 2020 - birthYear;

const age3 = calcAge3(1974);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear
    const retirement = 65 - age;
    return `${firstName} retires in  ${retirement} years`;
}

console.log(yearsUntilRetirement(1974, 'Damon'));
console.log(yearsUntilRetirement(1983, 'Silvia'));


const thisIsAFunction = () => {

}
//declarative function
function thisIsDeclarative() {
    console.log('this is a declarative function')
}
//function expression

const thisIsExpression = function () {
    console.log('This is an expression function')
}

const thisIsArrow = () => {
    console.log('this is an arrow function for short code blocks')
}