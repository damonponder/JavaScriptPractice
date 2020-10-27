function cuteFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {

    const applePieces = cuteFruitPieces(apples);
    const orangePieces = cuteFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and 
    ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));