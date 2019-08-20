let startBtn = document.getElementById('start'),
    budget = document.querySelectorAll(".budget-value"),
    daybudget = document.querySelectorAll(".daybudget-value"),
    level = document.querySelectorAll(".budget-value"),
    expenses = document.querySelectorAll('.expenses-value'),
    optionalexpenses = document.querySelectorAll('.optionalexpenses-value'),
    income = document.querySelectorAll('.income-value'),
    monthsavings = document.querySelectorAll('.monthsavings'),
    yearsavings = document.querySelectorAll('.yearsavings-value'),

    expensesItem = document.getElementsByClassName("expenses-item"),
    buttons = document.getElementsByTagName("button"),
    acceptBtn1 = document.querySelector('.expenses-item-btn'),
    acceptBtn2 = document.querySelector('.optionalexpenses-btn'),
    count = document.querySelector('.count-budget-btn'),

    choose = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),

    year = document.querySelectorAll('.year-value'),
    month = document.querySelectorAll('.month-value'),
    day = document.querySelectorAll('.day-value');
