

const calcAverage = (a,b,c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('The Dolphins win the series!');
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('The Koalas are the winner!');
    } else {
        console.log ('No Team Wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);


function reverse_a_number (n){
    n = n.toString();
    return n.split("").reverse().join("");
}

console.log(reverse_a_number(123456))

function check_palindrome (str_entry) {
    // change the string into lower case and remove all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
    //check whether the string is empty or  not
    if (cstr === "") {
        console.log("Nothing Found");
        return false;
    }
    // Check if the length of the string is odd or even
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    }else {
        // If the length of the string 1 then it becomes a palindrome
        if (cstr.length === 1) {
            console.log("Entry if a Palindrome");
            return true;
        } else {
            //If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
// Loop through to check the first character to the last  character and then move to next
    for (var x = 0; x < ccount; x++) {
        //compare characters and drop them if they do not match
        if (cstr[x] != cstr.slice(-1-x)[0]) {
            console.log("Entry is not a palindrom");
            return false;
        }
    }
    console.log("The entry is a palindrom");
    return true;
}
 check_palindrome('madam');
 check_palindrome('nurses run');
 check_palindrome('fox');

 //Sort in Alphabetical Order

 const alphabetical_order = function (str) {
     return str.split("").sort().join("");
 }
 console.log(alphabetical_order("pneumonoultramicroscopicsilicovolcanoconiosis"));