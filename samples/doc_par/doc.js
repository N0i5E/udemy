let box = document.querySelector('.box'),
    btn = document.querySelector('button');
console.log('%c%s', 'color: #00bf00', btn);

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);
console.log('%c%s', 'color: #917399', document.documentElement.clientWidth);
console.log('%c%s', 'color: #917399', document.documentElement.clientHeight);
console.log('%c%s', 'color: #917399', document.documentElement.scrollTop);
// btn.addEventListener('click', function () {
//     box.style.height = box.scrollHeight + 'px';
// });

btn.addEventListener('click', function () {
    box.scrollTop = 0;
});

scrollBy(0, 200);
scrollTo(0, 200);