'use strict';

let menu = document.querySelector(".menu"),
    menuItems = document.getElementsByClassName("menu-item"),
    menuItem = document.createElement("li"),
    columns = document.querySelectorAll('.column'),
    advertising = document.querySelector('.adv'),
    questionHolder = document.getElementById('prompt'),
    title = document.getElementById("title"),
    question = prompt('Как вы относитесь к технике apple ?', '');

menu.appendChild(menuItem);
menuItem.classList.add("menu-item");
menuItem.textContent = "Пятый пункт";

var item2 = menu.removeChild(menuItems[2]);
console.log(item2);
console.log(menuItems);

menu.insertBefore(item2, menuItems[1]);

console.log(menuItems);

document.body.style.background = "url(img/apple_true.jpg";

title.textContent = "Мы продаем только подлинную технику Apple";

console.log(columns);

columns[1].removeChild(advertising);

// questionHolder.innerHTML = "<h1>" + question + "</h1>";
questionHolder.innerHTML = `<h1>${question}</h1>`;