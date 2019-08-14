let money; 
let time;
let appData = {
    budget: money,         //бюджет
    timeData: time,        //данные времени
    expenses: {
    },                     //объект с обязательными расходами
    optionalExpenses: {},  //объект с необязательными расходами
    income: [],            //массив данных с доп. доходом
    savings: true         //свойство
};
//=========== #1 ================
function detectDayBudget() {    
    
    // money = +prompt("Ваш бюджет на месяц?","");
    // time = prompt("Введите дату в формате YYYY- MM-DD","");
    

    // isNaN проверяет на строку. Функция будет долбить, пока не будет корректного ответа.
    while (isNaN(money) || money == "" || money == null) { 
        money = +prompt("Ваш бюджет на месяц?","");
        console.log(money);
    }; 
    appData.budget = money;
appData.moneyPerDay = (appData.budget  / 30).toFixed(1); 
console.log(appData.budget);
alert("Ежедневный бюджет " +appData.moneyPerDay);
};
detectDayBudget();
// console.log(appData.moneyPerDay);

//=========== #2 ================
function detectLevel() {
    if(appData.moneyPerDay < 100) {
        alert("minimum");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("midle");
    } else if (appData.moneyPerDay > 2000) {
        alert("big");
    } else {
        alert("This is mistake")
    };
};
detectLevel();

//=========== #3 ================
function chooseExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце # " + i);
            b = +prompt("Во сколько обойдется?");
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            console.log(i+ " " +appData.expenses); 
            // break;
        }   else    {
            console.log("Something went wrong");
            i = i - 1;
        }
        console.log(i+ " " +appData.expenses);
    }
    
}
chooseExpenses();



// function checkSaving (){
//     if (appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений"),
//             percent = +prompt("Под какой процент");
//         appData.monthIncome = save/100/12*percent;
//         alert("Доход с депозита в месяц: " + appData.monthIncome);
//     }
// }

// checkSaving();