/*
 * Conditionals, Functions, Scope and Loops.
 */

// Equals ===
// Equals == (ignores type)

// Greater than >
// Less than <
// Greater than or equals to >=
// Less than or equals to <=
// Not equal to !==

/*
let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    return number * number;
}

let squareNumber = squareNum(7);
console.log(squareNumber);

 */

/*
let ourArray = [1, 2, 3, 4, 5, 6, 7];
let arrLen = ourArray.length;

// for(counter; comparison; incrementer)
for(let i = 0; i < arrLen; i++){
    console.log(ourArray[i]);
    for(let j = 0; j < 10; j++) {
        console.log('j is equal to: ' + j);
    }
}
 */

let x = 0;
// while (true)
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}
