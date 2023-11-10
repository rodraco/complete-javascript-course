/*
let country = "Romania";
let continent = "Europe";
let population = 18; 

console.log(country);
console.log(continent);
console.log(population);

//datatype
let isIsland = false;
let language; 
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language)
*/


//Data Types
const country = 'Romania';
const continent = 'Europe';
const AVERAGE_POPULATION = 33
let finlandPopulation = 6;
let population = 18;
const isIsland = false;
const language = 'Romanian'
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language)

//basic operators
console.log(population / 2); //half the population
console.log(population++); //population increase by 1
console.log(population > finlandPopulation); //population bigger than Finland ?
console.log(population < AVERAGE_POPULATION); //less people in my country compared to the average ?
let description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language;
console.log(description);
description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);