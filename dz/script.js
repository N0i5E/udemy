let money = +prompt("Ваш бюджет на месяц?", "5000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-14");
// let money = 5000;
// let time = 2019-08-14;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionala: {},
    income: [],
    savings: false
};

console.log(appData.a);
console.log(appData);

let i = 0; 
for (i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "Продукты"),
        b = prompt("Во сколько обойдется?", "1000");
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i = 0;
    }
}

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "Продукты"),
//         b = prompt("Во сколько обойдется?", "1000");
//     i++;
//     console.log("done");
//     appData.a[a] = b;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "Продукты"),
//         b = prompt("Во сколько обойдется?", "1000");
//     i++;
//     console.log("done");
//     appData.a[a] = b;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет составляет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}