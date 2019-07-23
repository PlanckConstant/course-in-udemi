let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY- MM-DD","");

let appData = {
    money,                 //бюджет
    time,                  //данные времени
    expenses: {
        answer1: prompt("Введите обязательную статью расходов в этом месяце"),
        answer2: prompt("Во сколько обойдется?")
    },                     //объект с обязательными расходами
    optionalExpenses: {},  //объект с необязательными расходами
    income: [],            //массив данных с доп. доходом
    savings: false         //свойство
};

// console.log(appData);   
function dailyBudget() {
    let i = (+money - +appData.expenses.answer2)/30;
    alert(i);
};

dailyBudget();

