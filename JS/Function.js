// let num = 20; //Глобальна переменная
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;// Новая локальная переменная
//     console.log(num);
// };

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a,b){ // Деклоративная функция. Можно вызывать до объявлени. 
//     return(a+b);
// }

// let calc  = function(a,b){ // Функциональное выражение. Работает только после объявлени. 
//     return(a+b);
// }

let calc = (a,b) => (a+b); // Стрелочная функция!!!
console.log(calc(3,4)); // вызов функции с параметрами
console.log(calc(91,9));

function retVar() {
    let num = 50;
    return num; // возврат значения функции во внешний мир
;}

console.log(retVar); // Обращение к функциии
let anotherNum = retVar(); // вытаскиваем значение локальной переменной.
console.log(anotherNum);

let str = "Test";
console.log(str.length); //Метод возвращающий длину строки
console.log(str.toUpperCase()); // метот больших букв строк
console.log(str.toLowerCase()); // метод маленькихбукв строк    

let twelve = "12.21314";
console.log(Math.round(twelve));    // Округление до целых

let twelve = "12.2px";
console.log(parseInt(twelve));  
console.log(parseFloat(twelve)); 