console.clear();
console.log('Veikia');

let x = 10

if(x === 10){
    console.log('x yra 10');
}

if(x < 100 && x > 1){
    console.log('x yra 10');
} else {
    console.log('x yra 10');
}

if(x < 100 && x > 1){
    console.log('x yra daugiau uz 1 ir maziau uz 100');
} else {
    console.log('blogas x');
}

if(x < 100 && x > 1){
    console.log('x yra daugiau uz 1 ir maziau uz 100');
} else {
    console.log('blogas x');
}

// Loops

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// functions

let a = 10;
//let a = 20

// function nesvarbu () {
//     let a = 20
//     console.log(x)
// }

// kad ispausdintu, reikia iskviesti


function nesvarbu () {
   console.log(x)
}
nesvarbu()  // atspausdins 10 nes, jei neras 


function nesvarbu () {  // lips i virsu ziuret!
    console.log(x)
    function otherfunction () {
        console.log(x)
    }
}

// 1. Print all even numbers from 0 – 10
// kazka nuo kazkuo iki kada, galim nuspeti, bus - loops!
// 0, 2, 4, 6, 8, 10

console.clear()
console.log('...........');
function printEvenNumbers () {
    for (let i = 0; i <= 10; i+= 2) {
        console.log(i)
    }
}

console.log('...........');
function printEvenNumbers () {  // odd numbers
    for (let i = 0; i <= 10; i++) {
        console.log(i)
        if (i % 2 !==0) {
            console.log(i)
        }
    }
}
console.log();
console.log('...........');
function printEvenNumbers () {
    for (let i = 0; i <= 10; i++) {
        console.log(i)
        if (i % 2 === 0) {  /// lyginiai skaiciai! dalijasi be liekanos
            console.log(i)
        }
    }
}
// printEvenNumbers()


// 2. Print a table containing multiplication tables
console.clear();

/*
1 X 1 = 1
1 X 2 = 2
1 X 3 = 6
1 X 4 = 4
1 X 5 = 5
1 X 6 = 6
1 X 7 = 7
1 X 8 = 8
1 X 9 = 9
1 X 10 = 10

*/

function daugybosLentele(){
    for (i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
        console.log()
    }
}

// daugybosLentele()

// 3. Create a length converter function
console.clear();
/*
30 cm -> ? coliai
1 cm = 0.393701 coliu
*/

// function conversion (cm) {
//     return cm * 0.393701
// }

// function conversion (cm, cols) {
//     console.log(`${cm} centimetru yra lygu ${cm * cols} coliu`) 
// }
// conversion(10, 0.393701 )

// function conversion (cm, cols) {
//     return cm * cols
// }

// let cm = 10
// console.log(`${cm} centimetru yra lygu ${conversion(10, 0.393701)} coliu`) 




let cm = 10
let cols = 0.393701

function conversion (cm, cols) {
    return cm * cols
}

console.log(`${cm} centimetru yra lygu ${conversion(cm, cols)} coliu`) 



// 4. Calculate the sum of numbers within an array

let arr = [2, 5, 6, 12];

function sum(no) {
    return arr[0] + arr[1] + arr[2] + arr[3]
}

console.log(sum(arr));

// 5. Create a function that reverses an array


// 6. Sort an array from lowest to highest


// 8. Remove the spaces found in a string


// 9. Return a Boolean if a number is divisible by 10


// 10. Return the number of vowels in a string




