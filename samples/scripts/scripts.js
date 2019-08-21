// let timerID = setTimeout(sayHello, 3000);
// clearTimeout(timerID);

// let timerID = setInterval(sayHello, 3000);
// clearTimeout(timerID);

// function sayHello() {
//     console.log("Hello World!");
// }

// рекурсивный setTimeour

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0,
        id = setInterval(frame, 10);

    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }

    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log("hi");
//     }
// });

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log("hi");
    }
});

document.getElementById("parent-list").addEventListener("click", function (e) {
    // e.target is the clicked element!
    // If it was a list item
    if (e.target && e.target.nodeName == "LI") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
        console.log('%c%s %s', 'color: #733d00', e.target.id.replace("post", ""));
        console.log('%c%s', 'color: #e50000', e.target.id);
    }
});

