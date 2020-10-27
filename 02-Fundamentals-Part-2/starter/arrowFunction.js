
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


