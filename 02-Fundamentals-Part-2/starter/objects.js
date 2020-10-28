//This object has 5 properties
// This is considered object literal syntax

// const jonasObject = {
//     firstName: 'Jonas',
//     lastName: 'Schmegman',
//     birthyear1: 1974,
//     Job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: function() {
//         if(this.age >= 18) {
//             return 'a'
//         } else {
//             return 'no'
//         }
//     },
    //Must be Expression Function
    // calcAge: function(birthyear1) {
    //     return 2020 - birthyear1;
    // }
    // calcAge: function() {
    //     return 2020 - this.birthyear1;
    // }

//     calcAge: function() {
//         this.age = 2020 - this.birthyear1;
//         return this.age; 
//     }

// };

// Dot vs. Bracket Notation
// We can get the object by using dot notation

// console.log(jonasObject.firstName)
// console.log(jonasObject['lastName']);

// const nameKey = 'Name';
// console.log(jonasObject['first' + nameKey]);
// console.log(jonasObject['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, friends, or Job');
// console.log(jonasObject[interestedIn]);

// if(jonasObject[interestedIn]) {
//     console.log([jonasObject[interestedIn]])
// } else {
//     console.log('Wrong request!')
// }


// console.log(`${jonasObject.firstName} has 3 friends, ${jonasObject.friends} and his best friend is ${jonasObject.friends[0]}`)

//Any function attached to object is called a Method

// console.log(jonasObject.calcAge());
// console.log(jonasObject.age());
// console.log(jonasObject.age());
// console.log(jonasObject.age());
// console.log(jonasObject.age());

//codingChallenge

//Jonas is a 40 year old teacher, and he has a/no driver's license
// console.log(`${jonasObject.firstName} is a ${jonasObject.calcAge()} year old teacher, and he has ${jonasObject.hasDriversLicense()} drivers license`)