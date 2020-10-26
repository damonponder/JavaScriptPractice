const Dolphins = (96 + 100 + 89) / 3;
const Koalas = (88 + 91 + 110) /3;
let avgMarks = 0;



if (Dolphins > Koalas && Dolphins >= 100) {
    console.log(`The Dolphins score is ${Dolphins}, and they are the winner! `)
} else if (Koalas > Dolphins && Koalas >= 100){
    console.log(`The Koalas score is ${Koalas}, and they are the winner!`)
} else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
    console.log (`It looks like the Koalas score is ${Koalas} and the Dolphins score is ${Dolphins}, and it is a Draw!`)
} else {
    console.log('Lets play another game, the score did not meet the requirement! !')
}

