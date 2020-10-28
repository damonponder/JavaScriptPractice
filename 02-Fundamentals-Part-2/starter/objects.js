//This object has 5 properties
// This is considered object literal syntax

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmegman',
    Job: 'Teacher',
    age: 2020 - 1991,
    friends: ['Michael', 'Peter', 'Steven']
};

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


console.log(`${jonasObject.firstName} has 3 friends, ${jonasObject.friends} and his best friend is ${jonasObject.friends[0]}`)