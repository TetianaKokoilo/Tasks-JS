// Завдання перетворити рядок 
const string = 'hELlo THERE, hOW ARE yOu doINg?';
console.log(string);
const newStringToLowerCase = string.toLowerCase().slice(1);
console.log(newStringToLowerCase);
const firstLetter = string[0].toUpperCase();
console.log(firstLetter);
const newString = firstLetter + newStringToLowerCase;
console.log(newString);
