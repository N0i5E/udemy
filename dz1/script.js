/*jshint esversion: 6 */

let money = prompt("Ваш бюджет на месяц?", "5000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-14");
// let money = 5000;
// let time = 2019-08-14;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


let firstExpenses = prompt("Введите обязательную статью расходов в этом месяце", "Продукты");
let firstExpensesCost = prompt("Во сколько обойдется?", "1000");

let secondExpenses = prompt("Введите обязательную статью расходов в этом месяце", "Одежда");
let secondExpensesCost = prompt("Во сколько обойдется?", "2000");

appData.expenses[firstExpenses] = firstExpensesCost;
appData.expenses[secondExpenses] = secondExpensesCost;

console.log(appData.expenses);
console.log(appData);

alert("Бюджет на один составляет " + (appData.budget/30));




// appData.expenses. = prompt("“Введите обязательную статью расходов в этом месяце”")