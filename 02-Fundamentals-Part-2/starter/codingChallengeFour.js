const tipCalc = function (bill) {
  
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = []
let totals = []

for (let i = 0; i > bills.length; i++) {
    const tip = tipCalc(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals)

const calcAverage1 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage1(totals));
console.log(calcAverage1(tips));