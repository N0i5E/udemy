// btn.addEventListener('click', function () {
//     alert("Что-то произошло");
// })

// Callback hell

// let func1 = function (param, func2) {
//     func2(function (param, func3) {
//         func3(function (param, func4) {
//             func4(function (param, func5) {

//             });
//         });
//     });
// };
let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log(('Вы сделали выстрел...'));

    setTimeout(function () {
        Math.random() > 0.5 ? headshot({}) : fail("Вы промахнулись");
    }, 3000);
}

function win() {
    console.log("Вы победили!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("Вам купили пиво");
}

function giveMoney() {
    console.log("Вам заплатили!");
}

function lose() {
    console.log("Вы проиграли!");
}

shoot({},
    function (mark) {
        console.log("Вы попали в цель!");
        console.log(mark);
        
        win(mark, buyBeer, giveMoney);
    },
    function (miss) {        
        console.error(miss);
        lose();
    }
);


let message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло нет так...'
};

let form = document.querySelectorAll('.main-form')[0],
    formBottom = document.getElementById('form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');

function sendForm(item) {
    item.addEventListener('submit', function (event) {
        event.preventDefault();
        item.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(item);
        let obj = {};

        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
}

sendForm(form);
sendForm(formBottom);