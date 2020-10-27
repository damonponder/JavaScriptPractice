const friends = ['michael', 'steven', 'peter', 'jim', 'john', 'levi', 'harry', 'jonas'];
console.log(friends);

const y = new Array(1991, 1992, 1993, 1994, 1995);

console.log(friends[2]);

 console.log(friends.length);
 console.log(friends[friends.length - 1])

 //mutation of the Array
// Arrays are not immutable values, as they are
//not primitive values
 friends[2] = 'jay';
 console.log(friends);

 const Damon = ['Damon', 'Ponder',  2020 -1974, 'Programmer',friends ];

 console.log(Damon)

 //Arrays Exercise
 const calcAge8 = function (birthYear) {
     return 2020 - birthYear;
 }
 const years = [1990, 1991, 1992, 1993, 1994, 1995];

  const ageArray1 = calcAge8(years[0])
  const ageArray2 = calcAge8(years[1])
  const ageArray3 = calcAge8(years[2])
  console.log(ageArray1, ageArray2, ageArray3);

  //function calls can be placed into arrays
const ages = [calcAge8(years[0]), calcAge8(years[1]), calcAge8(years[2])]

console.log(ages);