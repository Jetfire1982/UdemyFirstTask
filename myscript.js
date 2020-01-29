"use strict";

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
  savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();


function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(); //создаем новое свойство moneyPerDay внутри нашего объекта 
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


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
}

detectLevel();


//Ниже представлена функция которая поможет нам рассчитать накопления с депозита если он есть
function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");
    appData.monthIncome = save / 100 / 12 * percent; //создаем новое свойство monthIncome, которая будет содержать прибыль за месяц
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();


//Ниже представлена функция для определения необязательных расходов - будем заполнять объект optionalExpenses в нашей appData
function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
  }
}
