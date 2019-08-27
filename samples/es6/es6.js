let name = "Ivan",
  age = 30,
  mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес ${mail}`);

function makeArray() {
  var items = [];

  for (let i = 0; i < 10; i++) {
    let item = function () {
      console.log(i);
    };
    items.push(item);
  }
  return items;
}

var arr = makeArray();

console.log(arr);


arr[1]();
arr[3]();
arr[7]();

let fun = () => {
  console.log(this);
};

fun();

let obj = {
  number: 5,
  sayNumber: function () {
    let say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
  let show = () => {
    console.log(this);
  };
  show();
});

function calcOrDouble(number, basis = 2) {
  // basis = basis || 2;  ES5
  console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble(4);

// Пример функции параметры по умолчанию

function f(x = 1, y) {
  return [x, y];
}

console.log('f();:', f()); // [1, undefined];
console.log('f(2);:', f(2)); // [2, undefined];
console.log('f(2,4):', f(2, 4));


class Rectangle {
  constructor(height, width = 20) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(a + b + c);
}

let numbers = [2, 5, 7];
log(...numbers);


function myFunction(v, w, x, y, z) {
  console.log(v);
  console.log(w);
  console.log(x);
  console.log(y);
  console.log(z);
}
var args = [0, 1];

myFunction(-1, ...args, 2, ...[3]);

// function Person() {
//   // В конструкторе Person() `this` указывает на себя.
//   this.age = 0;

//   setInterval(function growUp() {
//     // В нестрогом режиме, в функции growUp() `this` указывает 
//     // на глобальный объект, который отличается от `this`,
//     // определяемом в конструкторе Person().
//     this.age++;
//     console.log(this);

//   }, 1000);
// }

// var p = new Person();
// console.log(p);

// function Person() {
//   var that = this;
//   that.age = 0;

//   setInterval(function growUp() {
//     // Функция с обратным вызовом(callback) содержит переменную that, которая 
//     // ссылается на требуемый объект this.
//     that.age++;
//     // console.log(that);
//   }, 1000);
// }

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` указывает на объект Person
    // console.log(this);

  }, 1000);
}

var p = new Person();
console.log(p);

// Пример 

var adder = {
  base: 1,

  add: function (a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function (a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1)); // Выводит 2
console.log(adder.addThruCall(1)); // Всё равно выводит 2


// var list = document.getElementById("list");

// for (let i = 1; i <= 5; i++) {
//   let item = document.createElement('li');
//   item.appendChild(document.createTextNode('Item ' + i));

//   item.onclick = function(ev) {
//     console.log('Item ' + i + ' is clicked.');
//   };
//   list.appendChild(item);
// }

// // чтобы получить такой же эффект с использованием 'var'
// // необходимо создать новый контекст
// // используя замыкание, чтобы сохранить значение неизменённым
// for (var i = 1; i <= 5; i++) {
//   var item = document.createElement("li");
//   item.appendChild(document.createTextNode("Item " + i));

//     (function(i){
//         item.onclick = function(ev) {
//             console.log('Item ' + i + ' is clicked.');
//         };
//     })(i);
//   list.appendChild(item);
// }


// var SomeConstructor;

// {
//     let privateScope = {};

//     SomeConstructor = function SomeConstructor() {
//         this.someProperty = 'foo';
//         privateScope.hiddenProperty = 'bar';
//     }

//     SomeConstructor.prototype.showPublic = function() {
//         console.log(this.someProperty); // foo
//     }

//     SomeConstructor.prototype.showPrivate = function() {
//         console.log(privateScope.hiddenProperty); // bar
//     }

// }

// var myInstance = new SomeConstructor();

// myInstance.showPublic();
// myInstance.showPrivate();

// console.log(privateScope.hiddenProperty); // error

// if (x) {
//   let foo;
//   let foo; // SyntaxError thrown.
// }

// var arguments = 42;
// var arr = () => arguments;

// arr(); // 42

function foo() {
  var f = (i) => arguments[0] + i; // Неявное связывание ссылки arguments 
  console.log(arguments[0]);

  // стрелочной функции f
  // c объектом arguments функции foo
  return f(2);
}

foo(1); // 3
console.log(foo(1));

function foo() {
  var f = (...args) => args[0];

  return f(2);
}

console.log(foo(1));
console.log(foo(1));

foo(1); // 2

var func = x => x * x;
console.log(func(3));
// краткий синтаксис, 
// неявно возвращает результат
var func1 = (x, y) => {
  return x + y;
}; // блочный синтаксис, 
// явно возвращает результат
console.log(func1(3, 2));