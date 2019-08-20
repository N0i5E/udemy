let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);



// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name);
//     }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // доказательство: User - это функция
  console.log(typeof User); // function