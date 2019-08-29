// import "core-js/stable";
// import "regenerator-runtime/runtime";

window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tabs = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer 

    let deadline = '2019-08-26';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000) / 60 % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // hours1 = Math.floor((t/(1000/60/60) % 24)); // альтернатива
        // days = Math.floor((t/(1000*60*60*24)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            // if (t.hours.length < 2) {

            //     hours.textContent = "0" + t.hours;
            // } else { 
            //     hours.textContent = t.hours;
            // }
            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    let more = document.querySelectorAll('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(function (item) {
        item.addEventListener('click', function () {
            console.log(item);

            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.forEach(function (item) {
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    });


    // class creation

    // class Options {
    //     constructor (height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //         this.textAligh = textAlign;
    //     }
    //     addDiv() {
    //         let div = document.createElement('div');
    //         div.textContent = 'Текст';
    //         div.style.cssText = 
    //             `height: ${this.height}px;
    //             width: ${this.width}px;
    //             background-color: ${this.bg};
    //             fontSize: ${this.fontSize}px;
    //             text-align: ${this.textAlign};`;
    //         document.body.appendChild(div);
    //     } 
    // }   

    // let elem = new Options(50, 100, '#ccc', 15, 'center');
    // elem.addDiv();

    // Form

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
            let formData = new FormData(item);

            function postData(data) {

                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    };
                    request.send(data);
                });
            } // End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    // thanksModal.style.display = "block";
                    // mainModal.style.display = "none";
                    statusMessage.innerHTML = '';
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }

    sendForm(form);
    sendForm(formBottom);
});