// activating "strict mode"
// Strict mode: -> secure js code; 
// - forbids:
// - creates visible errors in the dev console
//must be the first statement in the script

'use strict'; 

/*
let hasDriversLicense = false;
const passTest = true;

//with strict disabled, this line will cause a crash, but log nothing on the console
//with strict enabled, this line will cause a crash, but log the error on the console
//if(passTest) hasDriverLicense = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive");

// will not work in strict mode - interface is reserved (for future use)
//const interface = 'Audio';
//const private = 232;
*/

/*
// Functions - reusable pieces of code
function logger(){
    console.log(`Function call`);
}
logger();

function fruitProcessor(apples, oranges){
    console.log(`Parameters: ${apples}, ${oranges}`);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    console.log(juice);
    return juice;
}
fruitProcessor(3, 5);
const appleJuice = fruitProcessor(7, 0);
console.log(`We processed ${appleJuice}`);

//because fruitProcessor returns value, can be used in here
console.log(fruitProcessor(7, 0));
//but not logger - void; will return undefined, not error though
console.log(logger());

//declaration vs expression
//function declaration
function calcAge1(birthYear){
    return (2023 - birthYear);
}
//function expression
const age1 = calcAge1(1968);
console.log(`Your age is: ${age1}`);

//Anonymous function - function without a name
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1958);
console.log(`Your age is: ${age2}`);

// arrow function
//NOTE: do not get the 'this' keyword
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge2(1948);
console.log(`Your age is: ${age3}`);

const yearsToretirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years to pension`;
}
console.log(yearsToretirement(1968, 'Bogdan B'));

//functions calling other functions
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor2(apples, oranges){
    console.log(`Parameters: ${apples}, ${oranges}`);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor2(2, 3));

const calcAge4 = function (birthYear){
    return 2023 - birthYear;
}

const yearsToretirement4 = function (birthYear, firstName) {
    const age = calcAge4(birthYear);
    const retirement = 65 - age;
    return retirement > 0 ? retirement : -1;
    //return `${firstName} has ${retirement} years to pension`;
}
console.log(yearsToretirement4(1968, 'Bogdan B'));
console.log(yearsToretirement4(1948, 'Alex B'));
*/

// Arrays
