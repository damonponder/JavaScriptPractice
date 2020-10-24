
//Math Operators
const currentYear = 2020;
const ageDamon = 1974;
const ageSarah = 1991;

const currentAgeDamon = currentYear - ageDamon;
const currentAgeSarah = currentYear - ageSarah;
console.log(currentYear, ageDamon);

console.log(currentYear - ageDamon);

console.log(ageDamon * 2, ageDamon / 10, 2**3);

// 2 is to raise something to the power of a number

const firstName = 'Damon';
const lastName = 'Ponder';

console.log(firstName + ' ' + lastName);

//Assignment Operators

let x = 10 + 5;

x += 10; // x equal x + 10 = 25

x *= 4; // x = x * 4 = 100

x++;

x--;

console.log(x);

//Comparison Operator

console.log(currentAgeDamon > currentAgeSarah);
console.log(currentAgeSarah >= 18);

//Equlaity Operators

const ageEquality = '18'
// Triple equal does not allow type coercion
if(ageEquality === 18) console.log("Congratulations your an adult")

//Double equal does allow type coercion
//As general rule avoid double equal as much as possible
if(ageEquality == 18) console.log("Congratulations your an adult-loose")


const favorite = Number(prompt('what is your favorite number?'))
console.log((favorite))

if(favorite === 23) {
    console.log('Cool! 23 is an amazing age!')
} else if (favorite === 36) {
    console.log('36 is also a very great age!')
} else if (favorite === 40) {
    console.log('Bummer! you are officially old!')
} else (favorite >= 50)
    console.log("You've had a great run, but its time to call it!")
