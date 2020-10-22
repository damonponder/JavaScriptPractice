const age = 15;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age
const birthYearNewOne = 1974;



if(isOldEnough) {
    console.log('Sarah can start driving lessons');
} else {
    console.log(`Sarah can not drive a car. Wait another ${yearsLeft} years! `)
}
let century;
if(birthYearNewOne <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)