//console.log("Привет, Мир!");
/* let а = 2;  а - русская буква с==>c о==>o 
р==>p - ошибка типа: 
Uncaught ReferenceError: a is not defined */
//console.log(a);

/* Работа с var

var n; //объявили переменную

n = 5; //присвоили значение - привет, я Вася

age = 10;
name = "Vasya";

console.log(age);
console.log(age + 1); 

age = age + 2;
console.log(age); // 12


var n = 9; //через пару часов Вася: Привет, я Игорь)). Это ненормально, так быть не должно

console.log(n);

Конец работы с var*/ 

/*
let n;
n = 5;

/* 
let n = 9;
console.log(n);  ошибка, что переменная 
уже обозначена как 5
- Uncaught SyntaxError: Identifier 'n' 
has already been declared (at index.js:32:5), то есть 
мы можем только ее перезаписать, а не объявлять заново

n = 4;
console.log(n);
*/

/*
age = 10; // = var = 10;
let age;

age = 20;
console.log(age); /* Uncaught ReferenceError: Cannot access 'age' before initialization
at index.js:44:5*/

//Ctrl+Shift+R - обновить страницу и почистить кэш
//Ctrl+R - обновить страницу

/*
var age = 20;
const PLACE = "Lenina Street";
console.log(age);
console.log(PLACE);
*/

/*
    q 3.2
*/

let name = "Всеволод";
let last_name = "\nСтарозубов";//\n - лишние символы, от которых надо избавиться

let sum = name.trim().length + last_name.trim().length;
//console.log(name.trim().length); // .trim() - убери всё лишнее
//console.log(last_name.trim().length);

//console.log(sum);

// либо: 
console.log(name.trim().length + last_name.trim().length);

/*
    q 3.3
*/

let word_1 = "велосипед", word_2 = "полезен"; //можно объявлять переменные через запятую сразу несколько: Привет, это Маша, привет, это Игорь и тд
console.log(word_1, word_2); // "велосипед" "полезен" - выводит два разных значения в консоль, не связаны друг с другом
console.log(word_1 + " " + word_2); //  - конкатенация - "сложить" - "велосипед полезен" - связаны друг с другом, появляется одна строка, которая склеена их трех строк: велосипед пробел полезен
console.log(`${word_1} ${word_2}`); // - интерполяция - работает как конкатенация, но иначе :). Делается исключительно через апострофы. На букве Ё.


/*
    q 3.7
*/

// let person = {
//     name: "Roman",
//     profession: "developer",
//     wife: {
//         name: "Lucy",
//         age: 19,
//         profession: "desiner"
//     }
// }

// console.log(person.name);

let obj = {
    name: "Анатолий",
    last_name: "Максимов",
    age: 32
}
//let str = "Имя: \"" + obj.name + "\"" + " Фамилия: `" + obj.last_name + "\`" + " Возраст: " + obj.age;

// или так: 
//let str = "Имя: \"" + obj.name + "\" Фамилия: `" + obj.last_name + "\` Возраст: " + obj.age; // Конкатенация

//или так:
let str = `Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`; //Интерполяция

console.log(str);

console.log("В" + "a" + +"a"+"a");

/*
    to Number
    "2" * 1 => 2
    "2" / 1 => 2
    "2" - 0 => 2
    +"2" => 2
    +"24st" =>NaN (not a number)
    parseInt() / parseFloat()

    to String
    2 + "" => "2"
    false = "" => false


    to Boolean
    !!1 => true
    !!"" => false
    !!underfined =>false
*/

// NaN !== NaN

/*
    Дом / 3 => NaN (треть дома)
    Кот * 3 => NaN (три кота)
    треть дома === три кота ??? нельзя сравнить
*/

/*
    q 3.8
*/

let num_1 = "3", num_2 = "5";
/*let - здесь не пишем, так как объявлена выше*/ sum = parseInt(num_1) + parseInt(num_2);
console.log(sum);
//или
console.log(Math.floor(+num_1) + Math.floor(+num_2));
//или - не всегда V1
console.log(parseInt(num_1) + parseInt(num_2));
//или - не всегда V2
console.log(parseFloat(num_1) + parseFloat(num_2));


/*
    q3.11
*/

let size = "500.5%";
console.log(parseFloat(size));


/*
    q 3.5
*/

/*
let a = 2, b = 4;
//V1 - устаревший
console.log(Math.pow(a * b, 2));
//или V2 - новомодный, популярный
console.log((a * b) ** 2);
*/

/*
    q 3.12
*/

let a = "5px", b = "7px", c = "10px";
console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

/*
    q 3.9
    В программе задана переменная value_1. Выведите в консоль ее тип. 
    Не забудьте, что функция typeof со значением аргумента null выдает неправильный результат. 
    При значении null необходимо вывести "null".
    Пример значений переменных:
    value_1 = "привет"
    Пример результата:
    "string"

*/
let value_1 = "привет"
    //первый способ решения
console.log(typeof value_1 === "object" && value_1 === null ? "null" : typeof value_1);
    //второй способ решения
if(typeof value_1 === "object" && value_1 === null) {
    console.log("null");
}  else {
    console.log(typeof value_1);
}

    // a ? "v1" : "v2" - если А истина делай один, иначе делай два
    // если а истина делай 1 иначе делай 2 ==> if/else
    // если истина, выводится то, что идет между ? и :, если ложь, то, что после :
    // в консоль выведется то, что идет после вопросительного знака


    /*
        Я САМА    
        Q 3.4 - НЕ РАЗБИРАЛИ НА ПРАКТИКЕ, РЕШАЮ САМА
    */
let value = 5.4;
    //здесь я вычислила возведение в квадрат, ответ 256
console.log(parseInt(Math.pow((Math.ceil(value) + Math.floor(value) + Math.round(value)), 2)));
    //Здесь согласно заданию - возвращение квадратного корня, ответ 4
console.log(parseInt(Math.sqrt((Math.ceil(value) + Math.floor(value) + Math.round(value)))));

    /*
        Я САМА Q 3.6
    */
    //let не определяем, так как в данном случае a и b были объявлены выше

a = 3, b = 4;
console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

    /*
        q 3.7
    */

let obj_1 = {
    name_1: "Анатолий",
    last_name_1: "Максимов",
    age_1: "32"
};
let str_1 = "Имя: \"" + obj_1.name_1 + "\" Фамилия: '" + obj_1.last_name_1 + "' Возраст: " + obj_1.age_1;
console.log(str_1);

    /*
        Я САМА Q 3.8
        В программе заданы три переменные name, last_name, age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте объект с ключами name, last_name, age и значениями из соответствующих переменных. Выведите этот объект в консоль.
        Пример значений переменных:
        name = "Анатолий"
        last_name = "Максимов"
        age = 32
        Пример результата:
        {name: "Анатолий", last_name: "Максимов", age: 32}

    */
    // решила, но слишком сложно, уперлась в кавычки, пробелы и т.п. - решила согласно образца
let name_2 = "Анатолий", last_name_2 = "Максимов", age_2 = 32;
let obj_2 = {
    name_2: "name_2",
    last_name_2: "last_name_2",
    age_2: "age_2"
};
console.log ("\{" + "\"" + obj_2.name_2 + "\"" + ": \"" + name_2 + "\", ","\"" + obj_2.last_name_2 + "\"" + ": \"" + last_name_2+ "\", ","\"" + obj_2.age_2 + "\"" + ": " + age_2 + "\}");

    //как решить проще:
let name_3 = "Анатолий", last_name_3 = "Максимов", age_3 = 32;
let obj_3 = {
    name_3: name_3,
    last_name_3: last_name_3,
    age_3: age_3
};
console.log (obj_3);

    /*
        Q 3.11
        В программе объявлена переменная size, в которой записано строковое значение. В строке size записано число и единицы измерения. Необходимо "достать" численное значение вывести в консоль.
        Пример значений переменных:
        size = "500.5%"
        Пример результата:
        500.5
    */

let size_1 = "500.5%"; // size_1 - потому что выше уже был один size
console.log(parseFloat(size_1));

    /* 
        Q 4.1
    */

let speed = 60;
if (speed <=30) {
    console.log ('Вы едете слишком медленно')
} else if (speed > 31 && speed <= 70) {
    console.log('Вы едете с нормальной скоростью');
} else {
    console.log('Вы едете слишком быстро, сбавьте скорость');
}

/*
    q 4.2
    В программе объявлена переменная price, в которой хранится строка со значением цены. Переведите значение переменной в число (parseInt) и в зависимости от полученного значения выполните следующее действие:

    если записанное значение оказалось не числом, выведите в консоль сообщение Не число;
    если число равно 0 или является отрицательным, выведите в консоль сообщение Число не корректное;
    в ином случае выведите в консоль значение числа.

    Пример значений переменных:
    price = "12 рублей"

    Пример результата:
    12
*/

let price = "12 рублей";
price = parseInt(price);

if (isNaN(price)) {
    console.log("Не число");
} else if (price<=0) {
    console.log("Число не корректное");
} else {
    console.log(price);
}

/* 
    Q 4.3 
        В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль, но помните: методом max пользоваться нельзя.
        Пример значений переменных:
        a = 32
        b = 5
        c = 14
        Пример результата:
        32
*/ 
//мое решение   
let a_1=32, b_1=5, c_1=14;
if (a_1 > b_1 && a_1 > c_1) {
    console.log(a_1); 
    } else if (b_1 > a_1 && b_1 > c_1) {
    console.log(b_1);
    } else {
    console.log(c_1);
    }

/*
    Q 4.4
            В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
        если значение переменной temp больше либо равно 25, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
        если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "bowling";
        в ином случае значение переменной activity должно быть "hiking".

        Пример значений переменных:
        temp = 25

        weather = "clear"

        Пример результата:
        "golf"
*/
//мое решение

let temp = 25, weather = "clear";
let activity;

if (temp >= 25 && weather == "clear") {
    activity = "golf";
    console.log(activity);
} else if (temp > 10 && temp <24 && weather == "clear") {
    activity = "bowling";
    console.log(activity);
} else {
    activity = "hiking";
}

/*
    Q 4.5
        В программе определены две переменные со строковым значением word_1 и word_2. 
        Допишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины.
        Пример значений переменных:
        word_1 = "машина"
        word_2 = "стол"
        Пример результата:
        "машина"
*/
//мое решение. названия переменных меняю для уникальности

let word_3 = "машина", word_4 = "стол";

//короткий вариант кода
console.log(word_3.length > word_4.length ? word_3 : word_4);

//длинный вариант кода с if/else

if (word_3.length > word_4.length) {
    console.log(word_3);
} else {
    console.log(word_4);
}

/*
    Q 4.6
    В программе объявлена переменная task, в которой записано одно из строковых значений: 
    удалить, переименовать, редактировать. 
    
    Напишите программу, которая выводит в консоль:
    delete – при значении task – удалить;
    rename – при значении task – переименовать;
    edit – при значении task – редактировать.

    Пример значений переменных:
    task = "переименовать"

    Пример результата:
    "rename"
*/
//мое решение
let task = "переименовать";

switch (task) {
    case "удалить":
        console.log("delete");
    break;
    case "переименовать":
        console.log("rename");
    break;
    case "редактировать":
        console.log("edit");
    break;
}


/*
    Q 4.7
    В программе объявлены две переменные — price и range. 
    Переменная range может принимать одно из трех строковых значений — month/day/week. 
    Переменная price хранит в себе числовое значение. 
    Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:
    <значение price> Р в <эквивалент значения range на русском языке>
    Пример значений переменных:
    price = 10000
    range = "day"

    Пример результата:
    10000 Р в день
*/
//мое решение

let price_1 = 10000, range = "day";

switch (range) {
    case "month":
        console.log(price_1 + " Р" + " в месяц");
    break;
    case "day":
        console.log(price_1 + " Р" + " в день");
    break;
    case "week":
        console.log(price_1 + " Р" + " в неделю");
    break;
}

//через интерполяцию

let price_2 = 10000, range_1 = "day";

switch (range_1) {
    case "month":
        console.log(`${price_2} Р в месяц`);
    break;
    case "day":
        console.log(`${price_2} Р в день`);
    break;
    case "week":
        console.log(`${price_2} Р в неделю`);
    break;
}


/*
    Q 4.8
    В программе объявлены три переменные — a, b и sign. 
    В переменных a и b хранятся числовые значения. 
    В переменную sign записано строковое значение одного из математических операторов +, -, /, *. 
    Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать 
    соответствующие математические операции с переменными a и b.
    Результат необходимо выводить в консоль. 
    Гарантируется, что переменная b не равна нулю.
    
    Примеры значений переменных:
    a = 2
    b = 6
    sign = "*"
    Пример результата:
    12
*/
//мое решение

let a_2 = 2, b_2 = 6, sign = "*";

switch (sign) {
    case "+":
        console.log(a_2 + b_2);
    break;
    case "-":
        console.log(a_2 - b_2);
    break;
    case "/":
        console.log(a_2 / b_2);
    break;
    case "*":
        console.log(a_2 * b_2);
    break;
}

/*
    Q 4.9
    Необходимо доработать решение из задания 4.8
    В дополнение к заданию 4.8 необходимо правильно обработать случай деления на 0. 
    При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!.
    Пример значений переменных:
    a = 2
    b = 0
    sign = "/"
    Пример результата:
    Делить на 0 нельзя!
    */
//мое решение

let a_3 = 2, b_3 = 0, sign_1 = "/";

switch (sign_1) {
    case "+":
        console.log(a_3 + b_3);
    break;
    case "-":
        console.log(a_3 - b_3);
    break;
    case "/":
        if (b_3==0) {
         console.log("Делить на 0 нельзя!");
     } else console.log(a_3 / b_3);
    break;
    case "*":
        console.log(a_3 * b_3);
    break;
}

console.log("string" + 4 + 2);
console.log("string " - 4 + 2);
console.log(typeof("string " - 4 + 2));

//console.log(typeof("4" + "2"));
//console.log("4" + "two");


console.log("4" + +"2");

console.log(typeof("4" + +"2"));

console.log("4" + +"two");
console.log(typeof("4" + +"two"));

console.log( " 4 " - 2);

console.log(typeof(" 4 " - 2));

console.log((" 4 " - 2) + " " + ("4 " + 2));
console.log(Number("4 "));

console.log("4 " + 2);
console.log(" 4 " + 2);

console.log(typeof("4 " + 2));

console.log(typeof(infinity));

//alert (null + undefined);

/*let num = 10;
if (num % 3 === 0) {
    num = 5
}
console.log(num);
*/


/*console.log(error);
let error = "Слишком длинный пароль";

const = error;
console.log(massage);
massage = "слишком длинный пароль";
*/

console.log(10 / "2"); //5



error = "Слишком короткий пароль"; //Слишком короткий пароль
console.log(error);

var error = "Слишком длинный пароль";

console.log("12" / 0); //Infinity

//alert("12" / 0); // Infinity

const name_4 = "Иван";
console.log("Добро пожаловать, " + name_4); //+
console.log(`Добро пожаловать, ${name_4}`); //+
console.log("Добро пожаловать, ${name_4}"); //все выводится в одну строку
console.log('Добро пожаловать, ' + name_4); //+
console.log('Добро пожаловать, ${name_4}'); //все выводится в одну строку

let d = 10;
let answer = 10 != d ? "Yes" : "No";
console.log(answer);//No


let e;
switch (e) {
    case 0:
        console.log('0');
    case null:
        console.log('null');
    case undefined: 
        console.log('undefined'); //undefined
    default:
        console.log('default'); //default
}

let f = "4";
console.log(typeof(f + +"what")); // 4NaN - строка
console.log("4" + +"what"); // 
console.log(typeof("4" + +"what")); // 


console.log( +"what"); //NaN
console.log(typeof(+"what")); //number


console.log(false == '0'); //true

console.log(typeof typeof 1); //string



