let age = document.getElementById('age');

function showUser(surname, name) {
    console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

// Способ 1

let count = showUser.bind(age);
count("Иванов", "Иван");

// Способ 2

showUser.call(age, "Иванов", "Иван");


// Пример

function f() {
    console.log(this);
}

var wrapped = f.bind('abc');

f(); // [object Window]
wrapped(); // abc
