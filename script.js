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

const arr = [2, 5, 6, 12];

function sum(no) {
    return arr[0] + arr[1] + arr[2] + arr[3]
}

console.log(sum(arr));

// arba: 

const ab1 = [2, 5, 6, 12];
const ab2  = suma(ab1);

function suma(list) {
    return list[0] + list[1] + list[2] + list[3];
}

console.log(ab2);

console.log();

// 5. Create a function that reverses an array

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//                       1)

// abc.reverse(); will rid of the original array!


//                       2)
// will store the original array:
// const newAbc = abc.concat().reverse();


//                       3)
// Also store with the spead operator [...abc]: 
// const newAbc = [...abc].reverse();

// console.log(abc);
// console.log(newAbc);


//                       4)
// let reverseAbc = [];

// for (let i = abc.length - 1; i >= 0; i--) {
//         reverseAbc.push(abc[i])
//     }
// console.log(reverseAbc);


//                       5)
// map(), unshift()

// let reverseAbc = [];

// abc.map({value} =>
//     reverseAbc.unshift(value)
//     )
// console.log(reverseAbc);

//                       6)

let reverseAbc = [];

for (let element of abc) {
    reverseAbc.unshift(element)
    }

    console.log(reverseAbc);


// 6. Sort an array from lowest to highest:
// .sort wil sort string values in array according to the abc.
// .sort will first convert numbers in the arr to strings and compare them to their uft values, therefore we need a function to: 


console.log();
console.log('An array from lowest to highest:');

function compareFunction(a, b) {
    // 1. < 0 .. a comes first
    // 1. = 0 .. nothing will be changed
    // 1. < 0 .. b comes first
    return a - b;
}

arr.sort(compareFunction);

console.log(arr);

// arr as objects:
console.log();
console.log('Arr as objects. Sorting from lowest to highest:')
const students = [
    {
        stud: 'Ona',
        ranking: 2,
    },
    {
        stud: 'Petras',
        ranking: 1,
    },
    {
        stud: 'Kazys',
        ranking: 3,
    }
];

students.sort((a,b) => {
    return a.ranking - b.ranking; // to switch the order : b - a!
});

console.log(students);



// 8. Remove the spaces found in a string
console.log();
console.log('Remove the spaces found in a string:');

const sentence = 'This senstense has 6 white space caracters.'

console.log(sentence.replace(/\s/g, ''));
// ()  -> giving an argument to .replace('our argument):        
// /\  -> meta caracter
// /\s -> will look for the white space caracter occuring first!
// /g  -> global caract will include all such occurences in the string!
// ,   -> serator 
// ''  -> replacing with empty to rid of the space occurance



// 9. Return a Boolean if a number is divisible by 10


// 10. Return the number of vowels in a string




