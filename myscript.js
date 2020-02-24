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

btn_StartCalc.addEventListener('click', function () {
  expensesBtn.disabled=false;
  optionalExpensesBtn.disabled=false;
  countBtn.disabled=false;
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Введите Ваш бюджет на месяц", '');
  while (isNaN(money) || money == "" || money == null) { //isNaN - возвращает true когда у нас попадает туда не цифры, null - это если нажали отмена
    money = +prompt("Ваш бюджет?", '');
  }
  appData.budget = money;
  appData.timeData = time;
  div_BudgetValue.textContent = money.toFixed();
  input_YearValue.value = new Date(Date.parse(time)).getFullYear();
  input_MonthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  input_DayValue.value = new Date(Date.parse(time)).getDate();


});

expensesBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < inp_ExpenItem.length; i++) {
    let a = inp_ExpenItem[i].value, //тут будет наименование нашего расхода
      b = inp_ExpenItem[++i].value; //цена
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' &&
      a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
      /*т.о. ответ пользователя об обязательной статье расходов будет являться свойством обьекта expenses, а 
        равняться это будет значению b т.о. у нас получилась пара ключ - значение */
    } else {
      i--;
    }
  }
  div_ExpensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < inp_OptExpItem.length; i++) {
    appData.optionalExpenses[i] = inp_OptExpItem[i].value;
    div_OptionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget-(+div_ExpensesValue.innerHTML)) / 30).toFixed(); //создаем новое свойство moneyPerDay внутри нашего объекта 
    div_DaybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      div_LevelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      div_LevelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      div_LevelValue.textContent = "Высокий уровень достатка";
    } else {
      div_LevelValue.textContent = "Произошла ошибка";
    }
  } else {
    div_DaybudgetValue.textContent = 'Произошла ошибка';
  }
});


inp_ChooseInc.addEventListener('input', function () {
  let items = inp_ChooseInc.value;
  appData.income = items.split(", ");
  div_IncomeValue.textContent = appData.income;
});

check_checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData = false;
  } else {
    appData.savings = true;
  }
});

inp_ChooseSum.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +inp_ChooseSum.value,
      percent = +inp_ChoosePersent.value;
    appData.monthIncome = sum / 100 / 12 * percent; //создаем новое свойство monthIncome, которая будет содержать прибыль за месяц
    appData.yearIncome = sum / 100 * percent;

    div_MonthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    div_YearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  }
});

inp_ChoosePersent.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +inp_ChooseSum.value,
      percent = +inp_ChoosePersent.value;
    appData.monthIncome = sum / 100 / 12 * percent; //создаем новое свойство monthIncome, которая будет содержать прибыль за месяц
    appData.yearIncome = sum / 100 * percent;

    div_MonthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    div_YearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
}





