//  function User(name, age) {
//      this.name = name;
//      let userAge = age;

//      this.getAge = function () {
//          return userAge;
//      };

//      this.setAge = function (age) {
//          if (typeof age === 'number' && age > 0 && age < 110) {
//              userAge = age;
//          } else {
//              console.log("Недоппустимое значение");

//          }
//      };
//      this.say = function () {
//          console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
//      };
//  }

//  let user = new User('Ivan', 25);

//  console.log(user.name);
//  console.log(user.userAge);
//  user.say();
//  console.log('user.getAge():', user.getAge());

//  user.setAge('30');
//  console.log('user.getAge():', user.getAge());

 //  user.age = 30;
 //  user.name = 'Alex';
 //  user.say();
    

/* Reverse string method*/


//  let str = "123456",
//      str1;

//      str1 = str.split("").reverse().join("");

//  console.log(str1);
//  console.log(typeof(str1));

//  function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// console.log('reverseString(str):', reverseString(str));


let user = (function () {
    let private = function () {
        console.log("I am private");
    };
    return {
        sayHello: function () {
            console.log("Hello!");  
        }
    };
}());

console.log(user);
console.log(user.sayHello());


let user1 = (function () {
    let private = function () {
        console.log("I`m a private");
    };
    let sayHello = function () {
        console.log("Hello!");  
    };
    return {
        sayHello: sayHello
    };
}());

console.log(user1);
console.log(user1.sayHello());