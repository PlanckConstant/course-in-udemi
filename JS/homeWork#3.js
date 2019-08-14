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

function start() {
    
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY- MM-DD","");
    

    // isNaN проверяет на строку. Функция будет долбить, пока не будет корректного ответа.
    while (isNaN(money) || money == "" || money == null) { 
        money = +prompt("Ваш бюджет на месяц?","");
    }
};
start();



function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
            b = +prompt("Во сколько обойдется?");
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            break;
        }   else    {
            console.log("Something went wrong");
            i = i - 1;
        }
    }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(1); 

alert("Ежедневный бюджет " +appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("minimum");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("midle");
} else if (appData.moneyPerDay > 2000) {
    console.log("big");
} else {
    console.log("This is mistake")
};

function checkSaving (){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
        appData.monthIncome = save/100/12*percent;
        alert("Доход с депозита в месяц: " + appData.monthIncome);
    }
}

checkSaving();