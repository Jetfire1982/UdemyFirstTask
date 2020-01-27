"use strict";

let money = +prompt("Введите Ваш бюджет на месяц", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


1000
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

appData.moneyPerDay = appData.budget / 30; //создаем новое свойство moneyPerDay внутри нашего объекта 
alert("Ежемесячный бюджет: " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}