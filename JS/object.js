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
    