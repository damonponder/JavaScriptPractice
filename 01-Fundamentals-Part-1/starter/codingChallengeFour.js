
const billAmount = Number(prompt('Please enter the amount of your bill for a tip amount!'));

const tipAmountOne = billAmount * .15;

const tipAmountTwo = billAmount * .20;

const tipConversion = billAmount >= 50 && billAmount <= 300 ? tipAmountOne : tipAmountTwo;

const total = tipConversion + billAmount

console.log(`The bill was ${billAmount}, the tip was ${tipConversion}, and the total was ${total}`)