"use strict";

let = "money";
let = "time";

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY- MM-DD");l
appData = {
    money,                  //бюджет
    time,                   //данные времени
    expenses = {},          //объект с обязательными расходами
    optionalExpenses = {},  //объект с необязательными расходами
    income = [],            //массив данных с доп. доходом
    savings = false         //свойство
}