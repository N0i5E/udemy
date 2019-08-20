let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "5000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-14");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "5000");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true,
    optionalExpenses: {},
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "Продукты"),
                b = prompt("Во сколько обойдется?", "1000");
            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет составляет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накпоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i] = a;
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");

            if ((typeof (items)) === "string" && items != "" && typeof (items)   != null) {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
                appData.income.forEach(function (item, i, income) {
                    let n = i + 1;
                    alert("Способы дополнительного заработка: " + n + " " + item);
                });
            } else {
                i--;
            }
        }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные:" + key + ': ' + appData[key]);
}

// console.log(appData);

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