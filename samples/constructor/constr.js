// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);


// ivan.exit();

// console.log('ivan:', ivan);
// console.log('alex:', alex);

        // Пример 1 

// 'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

        // Пример 2

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

        //  Пример 3

let user = {
    name: "John",
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + " " + surname);
}

console.log(sayName.call(user, "Smith")); // в виде строки
console.log(sayName.apply(user, ["Snow"])); // в виде массива 

function count(number) {
    return this * number;
}

let double = count.bind(2); // в скобках заменяет this


console.log('double:', double(3));
console.log('double:', double(10));

        // Пример 4

// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';

//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });
// btn.addEventListener('click', function () {
//     console.log(this);
// });

// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind

