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

    let arr = [1, 2, 3, 4, 5];

    arr.forEach(function(item, i, mass) {   // forEach перебор массива
        console.log(i + ': ' + item + " (массив: " +mass + ")");
    });


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
