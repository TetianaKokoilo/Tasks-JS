// 1. Завдання перетворити рядок
// const string = 'hELlo THERE, hOW ARE yOu doINg?';
// console.log(string);
// /* Зробити все маленькими літерами і використовуючи метод slice
// почати речення з другого елемента*/
// const newStringToLowerCase = string.toLowerCase().slice(1);
// console.log(newStringToLowerCase);
// // Зробити першу літеру великою
// const firstLetter = string[0].toUpperCase();
// console.log(firstLetter);
// // Перша літера велика інші маленькі
// const newString = firstLetter + newStringToLowerCase;
// console.log(newString);

// // Коротший варіант
// const newString1 = string[0].toUpperCase() + string.slice(1).toLowerCase();
// console.log(newString1);


/*2. Необхідно визначити чи відвідувач може проходими в зал
 і переглядати фільм із обмеженням PG-13*/

const age = 12;
const accompanied = false;
const result = age && accompanied;
console.log(result);