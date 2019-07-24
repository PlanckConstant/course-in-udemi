"use strict"; 


let number = "1";
let string = "txt";
let sym = "";
let boolean = "true";
let obj = {
    name: "john",
    age: "29",
    isMarried: "false"
    }
let arr = ['plum.png', 'orange.png', 'apple.bmp']

console.log(4/0); // infinity
console.log("string"*5); //NaN
console.log(obj.name); // "John" | Первый способ получения данныхих объекта 
console.log(obj["age"]); // "25" | Второй способ,для случаев, когда через "." не достать значение
console.log(arr[2]); //apple.bmp | Объект, вывод значения


alert("hello world");
confirm("Are you here?");

let answer = confirm("you are OK?");   // Присваевает переменной true или false
let legal = prompt("Do you have 18?"); // Присваевает переменной введённое пользователем значение
console.log(answer);
console.log(legal);
console.log("arr" + "-object");
let answer2 = +prompt("you are OK?");   // Присваевает переменной true или false
console.log(typeof(answer2));

    




console.log(yourBoobs); // Undefinded


//===============  Условия ============//
let num = 50;

if (num < 49) {
    console.log("Неверно")
} else if (num > 100) {
    console.log("Многовато")
} else {
    console.log("Верно")
};

(num == 50) ? console.log("Верно") : console.log("Неверно");  Тринарный оператор

switch (num) {
    case num < 49:
        console.log("Neverno");
        break;
    case num > 100:
        console.log("Mnogo");
        break;
    case num > 80:
        console.log("Vse eshe Mnogo");
        break;
    case 50:                 // При сревнении не указывается переменная
        console.log("Verno");
        break;               // Всегда ставим Break
    default:
        console.log("Что-то пошло не так");
        break;
   };

// ================= Цыклы ===========================//
   let  num1 = 50;
   while (num1 < 55) {
       console.log(num);
       num1++;
   };


do {
    console.log(num1);
    num1++;
}
while(num1 < 55);

for (let i = 1; i < 8; i++) {
    if (i==6) {
        break                   // Пстанавливает цикл
    } else if (i==3) {
        continue                // Пропускает итерацию
    }
    console.log(i)
}




// let  yourAge = prompt('Возраст Андрея?', '');
// let  girlAge = prompt('Возраст его девушки?', '');
//     if (+girlAge >= (+yourAge / 2) + 7) {
//     alert('OK ');
// }
//     else {
//     alert('Nope ');
// }


// let ofName = prompt('Каково «официальное» название JavaScript?', 'ECMAScript')
//     if (ofName == 'ECMAScript')
//     alert ('Верно!');
//     else
//     alert ('Не знаете? «ECMAScript»!')

// let simbol = prompt('Проверка знака числа', '')
//     if (simbol < 0)
//     alert ('< 0');
//     else if (simbol = 0)
//     alert ('= 0');
//     else (simbol > 0)
//     alert ('> 0')

// let login = prompt('Кто пришел?', '');

// if (login == 'Admin') {

//     let pass = prompt('Введите пароль', '');
    
//     if (pass == 'Чёрный Властелин') {
//         alert('Добро пожаловать, Чёрный Властелин!');
//     } else if (pass == null) {
//         alert('Вход отменён');
//     } else {
//         alert ('Пароль не верен!');
//     }

// } else if (login == null){
// alert ('Ввод отменён');
// } else {
// alert ('Я Вас не знаю!');
// }
////////////////////////////////////////////////////////
//     var userName = prompt('Кто пришёл?', '');

// if (userName == 'Админ') {

//     var pass = prompt('Пароль?', '');

//     if (pass == 'Чёрный Властелин') {
//         alert( 'Добро пожаловать!' );
//     } else if (pass == null) { // (*)
//         alert( 'Вход отменён' );
//     } else {
//         alert( 'Пароль неверен' );
//     }

// } else if (userName == null) { // (**)
//   alert( 'Вход отменён' );

// } else {

//   alert( 'Я вас не знаю' );

// }

// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }

// Последовательная проверка

// let message;

// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = prompt('Назовите себя', '');

// let message = (login == 'Вася') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// 'Нет логина';
// alert (message);

// let age = prompt('Ваш возраст', '');

// let message = (age < 14 || age > 90) ? 'OK' : 'nope';
// alert (message);

// let message = (!(age >= 14 && age <= 90)) ? 'OK' : 'nope';
// alert (message);

// for (i=2; i<10; i++) {
//     if (!(i % 2))
//     alert (i)
// }


// let i=0
// while (i < 3) {
//     alert( "номер " + i + "!" );
//     i++;
//   }


// let i
// for (i=null ; +i<100; ) {
//     i = prompt('Число больше 100', '')
//     if (i<100) {
//     alert ('Ещё разок');
//     }
//     else {
//     alert ('Готово');
//     } continue
// }


// Проверка натуральности чисел

// let n
// let i
// next:
// for (n=2; n <= 10; n++){
//     for (i=2 ;i < n; i++) {
//     if (n % i == 0) continue next;
//     }
//     alert (n);
// }

