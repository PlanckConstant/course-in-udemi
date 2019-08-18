    let options = {
        widht: 1024,
        height: 1024,
        name: "test"
    };
    console.log(options.name);
    options.bool = false;
    options.colors = {
        border: "black",
        bg: "red"
    };

    delete options.bool; //удаляет елемент из объекта

    console.log(options);

    for (let key in options) { // Цикл For in | Перебор в цикле
        console.log('свойство ' + key + ' имеет значение ' + options [key]);
    };

    console.log(Object.keys(options).length); // показывает количество ключей в объекте

    function forEach () {
        let arr = [1, 2, 3, 4, 5];

        arr.forEach(function(item, i, mass) {   // forEach перебор массива
            console.log(i + ': ' + item + " (массив: " +mass + ")");
        });
    };

    // forEach();

    function forInOf () {
        let mass = [1,3,4,6,7];

        for (let key in mass) { // цикл для вывода ключей массива
            console.log (key);
        };
        for (let key of mass) { // цикл для вывода значений массива
            console.log (key);
        };
    };

    // forInOf();


    function fun1() {
        arr.pop();      // метод .pop удаляет последний элемент массива
        arr.push('5')   // метод .push добавляет в конце новый элемент
        arr.shift();    // метот .shift удаляет первый элемент у массива
        arr.unshift('1');// метод .unshift добавляет первый элемент массиву

        for (let i = 0; i<arr.length; i++) {
            console.log(typeof(arr[i])+ ' ' + arr[i]);
        }
        arr[99] = 'x';
        console.log(arr);
        console.log(arr.length);    // == 100 | lenght возвращает не количество элементов, а последний индекс + 1
    };
    
    //fun1();

    function split (){
        let ans = prompt("", ""),
            arr = [];

        arr = ans.split(',');   // метод .split записывает ответы в массив
        console.log(arr);
    };

    // split();

    function join (){
        let arr = ["qwe", "rty", "uio", "op["];
            i = arr.join(", ");         // метод .join склеивает массив в строку через разделитель
        
        console.log((typeof(i)) +" - " + i);
    };



    function join (){
        let arr = ["qwe", "rty", "uio", "op["];
            i = arr.sort();         // метод .sort сортирует массив
        
        console.log(arr);
    };


    function joinToNumber () {
        let arr = [1,35,75,2,4,14];
            i = arr.sort(compareNum);         // метод .sort сортирует массив как строку

        function compareNum(a,b) {       // так можно заставить упорядочивать по значению, а не строке. ХЗ как работает. Сравнивает каждую пару.
            return a-b;
        };
    console.log(arr);  
    }