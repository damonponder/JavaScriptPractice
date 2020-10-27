//Declarative Function
// can be invoked before defining due to Hoisting

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

//Invoking the Function
const age1 = calcAge1(1974);
console.log(age1);

// Function Expression
// has to be invoked after defining function

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1974);

console.log(age1, age2);