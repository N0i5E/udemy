let startBtn = document.getElementById('start'),
    budgetValue = document.querySelectorAll(".budget-value")[0],
    dayBudgetValue = document.querySelectorAll(".daybudget-value")[0],
    levelValue = document.querySelectorAll(".level-value")[0],
    expensesValue = document.querySelectorAll('.expenses-value')[0],
    optionalexpensesValue = document.querySelectorAll('.optionalexpenses-value')[0],
    incomeValue = document.querySelectorAll('.income-value')[0],
    monthSavingsValue = document.querySelectorAll('.monthsavings-value')[0],
    yearSavingsValue = document.querySelectorAll('.yearsavings-value')[0],

    buttons = document.querySelectorAll("button"),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    console.log(buttons);
let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "5000");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-14");


//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", "5000");
//     }
// }


startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-14");
    money = +prompt("Ваш бюджет на месяц?", "5000");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "5000");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

buttons.forEach(function (elem, i) {
    elem.disabled = true;
});

buttons[buttons.length - 1].disabled = false;

startBtn.addEventListener('click', function () {
    buttons.forEach(function (elem, i) {
        elem.disabled = false;
    });
});

console.log(expensesBtn);
console.log(expensesItem);

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 1; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        if ((typeof (opt)) === "string" && (typeof (opt)) != null && opt != "" && opt.length < 50) {
            appData.optionalExpenses[i] = opt;
            console.log(opt);
        }
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false,
    optionalExpenses: {},
};