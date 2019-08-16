let money,
    time;
   

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
    optionala: {},
    income: [],
    savings: true,
    optionalExpenses: {}
};

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}

detectDayBudget();



// let money = 5000;
// let time = 2019-08-14;
function chooseExpenses() {
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
}

chooseExpenses();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
    return ("Ежедневный бюджет составляет " + appData.moneyPerDay);
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накпоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0  ; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "Игры");
        if ((typeof (a)) === "string" && (typeof (a)) != null && a != "" && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[i+1    ] = a;
        } else {
            i = i - 1;
        }
    }
}

chooseOptExpenses();

console.log(appData);

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