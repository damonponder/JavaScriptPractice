// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: 10
    }
    console.log(measurement)

    // console.log(measurement.value)

    const Kelvin = measurement.value + 273;
    return Kelvin;
}
// A: Identify the Bug
console.log(measureKelvin());

//B: Find the Bug

//C: Fix the bug
//Given an Array of temperatures of one day, calculate the temperature apmplitude.
//Keep in mind that sometimes there might be 
// a sensore error.

// const t1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const t2 = [2, -1, -5, 0, 'error', 10, 14, 18, 16, 13, 10, 6];

// // 1) Understanding the Problem
// const calcTempAmpBug = function (t1, t2) {
//     const temps = t1.concat(t2)
//     let  max = 0;
//     let min = 0;

//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];

//         if(typeof currentTemp !== 'number') continue;
//         if(currentTemp > max) max = currentTemp;
//         if(currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min)
//     return max - min;
// }
// const amplitudeBug = calcTempAmpBug([3, 5, 1], [9, 4, 5]);

// console.log(amplitudeBug)
//     How to find the temperature amplitude
//         Range = Max - Min

//     How to calculate the highest and lowest numbers
//     How to deal with the errors and what to do

// 2) Breaking it up into sub-problems

// sensor errors ignored or through error log

// find max value in array

// finc min value in array

// max - min and return it









