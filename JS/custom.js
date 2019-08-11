let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY- MM-DD","");

let appData = {
    budget: money,         //бюджет
    time,                  //данные времени
    expenses: {
        // answer1: prompt("Введите обязательную статью расходов в этом месяце"),
        // answer2: +prompt("Во сколько обойдется?")
    },                     //объект с обязательными расходами
    optionalExpenses: {},  //объект с необязательными расходами
    income: [],            //массив данных с доп. доходом
    savings: false         //свойство
};


// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//         b = +prompt("Во сколько обойдется?");

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         break;
//     }   else    {
//         console.log("Something went wrong");
//     };
    
// };


let i = 0
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
        b = +prompt("Во сколько обойдется?");
    while ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;    
    }
    i++;
};



appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("minimum");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("midle");
} else if (appData.moneyPerDay > 2000) {
    console.log("big");
} else {
    console.log("This is mistake")
};





// console.log(appData);   
// function dailyBudget() {
//     let i = (money - +appData.expenses.answer2)/30;
//     alert(i);
// };
// console.log(typeof(money));
// dailyBudget();

