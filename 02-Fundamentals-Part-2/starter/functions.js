
function logger() {
    console.log('My name is Damon');
}


// Calling / running / invoking function
//These functions are perfect for implementing 
//DRY code

logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5,2);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

function anotherFunction (param1, param2) {
    const houses = `How many houses will be built this month ${param1}, and how many houses will be built this year ${param2}`
    return houses;
}

const housingReport = anotherFunction(10,1500);
console.log(housingReport);