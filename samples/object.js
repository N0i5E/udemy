// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;

// options.colors = {
//     border: "black",
//     bg: "red",
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr);

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (массив: " + mass + ")");
// });

// let mass = [1, 3, 4, 6, 7];

// for (let key in mass) {
//     console.log(key);
// }

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

//     arr = ans.split(",");
//     console.log(arr);

// let arr = ["aww", "zzz", "opp", "fsdf"],
//     i = arr.join(', ');

// console.log(arr);
// console.log(i);

let arr = [1, 15, 4],
i = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(arr);



var fruits = ['Яблоко', 'Банан'];
console.log(fruits);

var newLength = fruits.push('Апельсин');
console.log(fruits);

var last = fruits.pop();
console.log(fruits);

var first = fruits.shift();
console.log(fruits);

var newLength = fruits.unshift('Клубника');
console.log(fruits);

fruits.push('Манго');
console.log(fruits);

var pos = fruits.indexOf('Банан');

var removedItem = fruits.splice(pos, 1);
console.log(fruits);

console.log(removedItem);

var shallowCopy = fruits.slice();

console.log(shallowCopy);

var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years.0);   // синтаксическая ошибка
console.log(years[0]); // работает как положено

console.log(years.entries());

var arr1 = ['a', 'b', 'c'];
var eArr = arr1.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']

var user = {
  name: "Вася",
  surname: "Петров"
};
user.age = 25;

// порядок перебора соответствует порядку присвоения свойства
for (var prop in user) {
  console.log(prop); // name, surname, age
}

//   var codes = {
//     "+7": "Россия",
//     "+38": "Украина",
//     "+1": "США"
//   };

//   for (var code in codes) {
//     // var value = codes[code];
//     // code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7
//     console.log(code);
//     // console.log( code + ": " + value ); // 7, 38, 1 во всех браузерах
//   }

var codes = {
  // телефонные коды в формате "код страны": "название"
  "7": "Россия",
  "38": "Украина",
  "1": "США"
};

for (var code in codes) console.log(code); // 1, 7, 38