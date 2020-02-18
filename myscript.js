"use strict";
let btn_StartCalc = document.getElementById('start'); //Начать расчет

let div_BudgetValue = document.querySelector('.result .result-table .budget-value');
let div_DaybudgetValue = document.querySelector('.result .result-table .daybudget-value');
let div_LevelValue = document.querySelector('.result .result-table .level-value');
let div_ExpensesValue = document.querySelector('.result .result-table .expenses-value');
let div_OptionalExpensesValue = document.querySelector('.result .result-table .optionalexpenses-value');
let div_IncomeValue = document.querySelector('.result .result-table .income-value');
let div_MonthSavingsValue = document.querySelector('.result .result-table .monthsavings-value');
let div_YearSavingsValue = document.querySelector('.result .result-table .yearsavings-value');

let inp_ExpenItem = document.getElementsByClassName('expenses-item'); //Поля input с обязательными расходами

let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];

let inp_OptExpItem = document.querySelectorAll('.optionalexpenses-item'); //Поля input для ввода необязательных расходов

let inp_ChooseInc = document.querySelector('.choose-income');
let check_checkSavings = document.querySelector('#savings');
let inp_ChooseSum = document.querySelector("#sum");
let inp_ChoosePersent = document.querySelector('#percent');
let input_YearValue = document.querySelector('.year-value');
let input_MonthValue = document.querySelector('.month-value');
let input_DayValue = document.querySelector('.day-value');
let label = document.querySelectorAll('label');




let money, time;

function start() {
  money = +prompt("Введите Ваш бюджет на месяц", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  while (isNaN(money) || money == "" || money == null) { //isNaN - возвращает true когда у нас попадает туда не цифры, null - это если нажали отмена
    money = +prompt("Введите Ваш бюджет на месяц", '');
  }
}

start();



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' &&
        a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        console.log(i);
        /*т.о. ответ пользователя об обязательной статье расходов будет являться свойством обьекта expenses, а 
          равняться это будет значению b т.о. у нас получилась пара ключ - значение */
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); //создаем новое свойство moneyPerDay внутри нашего объекта 
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
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
  //Ниже представлена функция которая поможет нам рассчитать накопления с депозита если он есть
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = save / 100 / 12 * percent; //создаем новое свойство monthIncome, которая будет содержать прибыль за месяц
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  //Ниже представлена функция для определения необязательных расходов - будем заполнять объект optionalExpenses в нашей appData
  chooseExpenses: function () {
    for (let i = 0; i < 3; i++) {
      appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
  },
  chooseIncome: function () {
    //  
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

    if (typeof (items) != "string" || items == "" || typeof (items) == null) {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }

    appData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
  }
}

appData.chooseIncome();

console.log("Наша программа включает в себя данные: ")
for (let i in appData) {
  console.log(i);
}
console.log(Object.keys(appData));



// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseExpenses();