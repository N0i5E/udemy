//  find the lowest number
let arr = [5,9,2,5,3,6,8];

console.log(arr.sort(function (a,b) {
    return a-b;
})[0]);

// remove numbers from the string
let str = '3dah5g7c9';

console.log(str.replace(/[0-9]/g,""));