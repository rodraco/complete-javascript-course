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

/*
const inputYear = '1991'
console.log(inputYear + 18); // will concatenate 1991 and 21 as Strings, since inputYear is string
console.log(Number(inputYear) + 21); // will add the numbers 1991 and 21 and print to console the result
console.log(Number('Jonas')); // NaN (Not a Number output to console); the string cannot be converted to a number
*/

/*
// truthy and falsy values
// 5 vales will resolve to false: 0 (zero as number), '' (empty string), undefined, null and NaN
// an empty object is NOTa falsy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(NaN));
*/

/*
//equality -> == vs ===
// === returns true only if both sides are exactly equal (strict equality)
// == returns true if by coercion, left and right are equal 
// e.g.: string compared to number
// '2' == 2 will return true 
// '2' === 2 will return false
const age = 18;
const ageString = '18';
if (age === 18){
    console.log(`For number with === comparison, it's true ! (strict equality)`);
}else{
    console.log(`For number with === comparison, it's false ! (strict equality)`);
}

if (ageString == 18){
    console.log(`For number string with == comparison, it's true ! (loose equality)`);
}else{
    console.log(`For number string with == comparison, it's false ! (loose equality)`);
}
*/


// switch statement
const day = 'wednesday';

switch(day){
    case 'monday': // case does a strict comparison, not lose
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':  // because does not have anything in it, it will also execute the code from the next statement, if true
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record the videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend ! :D ');
        break;
    default: 
        console.log('Not a valid day !');
}

// conditional (ternary) operator
// one liner :D
const age = 23;
age >= 18 ? console.log('I am of legal drinking age !') : console.log('I am NOT of legal drinking age !');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(`I can drink ${drink}`);

//one line 
console.log(`I can drink ${age >= 18?'wine !':'only water !'}`);


