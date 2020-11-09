//Given an array of forecasted maximum temperatures
const temps1 = [17, 21, 23]
const temps2 = [12, 5, -5, 0, 4]

//Create a function '[printedForecast]' 

const printForecast = function (arr) {
    
    let str = '';

    for( let i = 0; i <  arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `
    }
    console.log('...' + str)
}
printForecast(temps1)
//the function takes in arr and logs string to console


// Test Data 1: [17, 21, 23]
// Test Data 2: [12, 5, -5, 0, 4]