/*
let js = 'amazing';
//if(js === 'amazing') alert('JavaScrpt is fun !'); 
console.log(40+8+23-10); // to print n dev console in browser

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
firstName = 'Bob';
console.log(firstName);
*/

/* Datatype
console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 21);
console.log(typeof '21');
javaScriptIsFun = "YES"
console.log(typeof javaScriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null); //returns object; regarded as bug and will not be fixed
*/

/*
//let, const, var
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1992 - illegal, will error; const cannot change
// const job; - Illegal, const must be assigned because it is immutable

//var should not be used anymore
var job = "Programmer";
job = "Teacher";
*/

/*
//Operators
//Math op: +, -, *, /, %
const currentYear = 2023;
const bogdanBirthYear = 1968;
const ageBogdan = currentYear - bogdanBirthYear;
console.log(ageBogdan);
console.log(ageBogdan * 2, ageBogdan / 10, 2 ** 3, 2 % 2, 2 % 3); //2 ** 3 = 2 to the power of 3
                                                                    // 2 % 2 = 0 - modulo (reminder) of 2 / 2
                                                                    // 2 % 3 = 3 - modulo (reminder) of 2 / 3

// concatenate strings
let firstName = 'Bogdan';
let lastName = 'Balasa';
console.log(firstName + ' ' + lastName)

//assignment operators
let x = 10 + 5;
console.log(x);
// += means add and reassign the result
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);

//comparison operators
// <, >, >=, <= //numbers and strings also - string to be documented
const isFullAge = ageBogdan >= 18;
console.log(isFullAge);
*/

/*
const firstName = "Bogdan";
const job = "teacher";
const birthYear = 1968;
const year = 2023;

//String concatenate
const bogdan = "I'm " + firstName + ', a ' + (year -birthYear) + ' years old ' + job + '!';
console.log(bogdan); 
//using template literals
const bogdanTemplate = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(bogdanTemplate);
//multiline string
console.log(`String with
multiple 
lines`);
*/
/*
const age = 12;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log(`Age ${age} is old enough to start driving 🚗 !`);
}else{
    const yearsLeft = 18 - age;
    console.log(`Age ${age} is NOT old enough to start driving 🚗 ! You need to wait for ${yearsLeft} more years !`);
}
*/
const inputYear = '1991'
console.log(inputYear + 18); // will concatenate 1991 and 21 as Strings, since inputYear is string
console.log(Number(inputYear) + 21); // will add the numbers 1991 and 21 and print to console the result
console.log(Number('Jonas')); // NaN (Not a Number output to console); the string cannot be converted to a number

