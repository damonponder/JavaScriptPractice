const johnMassGreater = 'Johns mass is Greater';
const markMassGreatter = 'Marks mass is Greater';

let markMassOne = 78
let markHeightOne = 1.69

let johnMassOne = 92
let johnHeightOne = 1.95

let markMassTwo =  95
let markHeightTwo = 1.88

let johnMassTwo = 85
let johnHeightTwo = 1.76

const markBMI = markMassOne / (markHeightOne * markHeightOne)

const johnBMI = johnMassOne / (johnHeightOne * johnHeightOne)

const markBMITwo = markMassTwo / (markHeightTwo * markHeightTwo)

const johnBMITwo = johnMassTwo / (johnHeightTwo * johnHeightTwo)

if (markBMI > johnBMI) {
    console.log(markMassGreatter) 
} else {
    console.log(johnMassGreater)
}

if (markBMITwo > johnBMITwo) {
    console.log(markMassGreatter)
} else {
    console.log(johnMassGreater)
}