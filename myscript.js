"use strict";

let money;
let time;

let appData={
  budget: money,
  timeData: time,
  expenses:{
    // moneyLosingCompulsory:firstQuestion,
    // howMuch:secondQuestion
  },
  optionalExpenses:{},
  income:[],
  savings:false
};

appData.money=+prompt("Введите Ваш бюджет на месяц");
appData.time=prompt("Введите дату в формате YYYY-MM-DD");
appData.expenses.moneyLosingCompulsory =prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses.howMuch=+prompt("Во сколько обойдется?");

console.log(appData.money);
console.log(appData.time);
console.log(appData.expenses.moneyLosingCompulsory);
console.log(appData.expenses.howMuch);
console.log("Бюджет на 1 день составит: ", (appData.money-appData.expenses.howMuch)/30);




alert((appData.money-appData.expenses.howMuch)/30 );








