let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 4));
console.log(calc(8, 4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

console.log(anotherNum);

// let calc1 = function(a,b) {
//     return (a + b);
// };

let calc1 = (a, b) => (a + b);

console.log(calc1(3, 4));
console.log(calc1(8, 4));

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toUpperCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));




let val = 7

function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);

function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
console.log('example increment', c1, c2, c3);

function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter()
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);