// let name = "Ilya"; //задача 3
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?


//задача 2
// let name = "Иван";
// let admin = name;
// alert(admin)

//задача 4
// alert("Ваше имя, Сэр?")
// result = prompt();
// alert(result);

//задача 5
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// alert(a);
// alert(b);
// alert(c);
// alert(d);

//задача 6
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a);
// alert(x);

//задача 7
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a = Number(a)
// b = Number(b)
// alert(Number(a + b)); // 12

//задача 8
// 7 > 5 true
// "стол" > "стул"true
// "4" > "52"false
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"
// alert(null);
// alert(undefined);

//задача 9    Ответ: Dа
// if ("0") {
//     alert( 'Привет' );
// }

//задача 10
// alert("Какое «официальное» название JavaScript?")
// result = prompt();
// if (result == "ECMAScript"){
//     alert("Верно!")
// }
// else{
//     alert("Не знаете? ECMAScript!")
// }

//задача 11
// alert("Введите число:");
// res = prompt();
// res = Number(res);
// if(res > 0){
//     alert("1")
// }
// else if(res < 0){
//     alert("-1")
// }
// else if(res == 0){
//     alert("0")
// }
// else{
//     alert("ААААААААААААААААААААААААА")
// }

//задача 12
// let result;
// a = Number(prompt());
// b = Number(prompt());
// result = (a + b < 4) ? alert("Мало") : alert("Много")

//задача 13
// login = prompt();
// let message = (login == 'Сотрудник') ? alert("Даров") :
//     (login == 'Директор') ? alert("Здраствуйте, многоуважаемый Сэр!") : 
//     alert("Ты кто такой, мля?");

//задача 14  Ответ: 4
//alert( null || 4 || undefined );

//задача 15  Ответ: 1 и 2
//alert( alert(1) || 2 || alert(3) );

//задача 16 Ответ: Null
// alert( 1 && null && 2 );

// Задача 17 Ответ: 1 и undefined
// alert( alert(1) && alert(2) );

// Задача 18 Ответ: 3
// alert( null || 2 && 3 || 4 );

// Задача 19 Ответ: 30
// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);

//Задача 20
// let age = Number(prompt());
// if(14 <= age && age <= 90){
//     alert("Ты взрослый <3")
// }
// else{
//     alert("Ты либо младенец или старчиская пыль ХАХАХАХАХ")
// }

//Задача 21

// let age = Number(prompt());

// if(!(17 <= age && age <= 99)){
//     alert("Ты нормис")
// }
// else{
//     alert("Ты каха")
// }


// if(!(17 <= age && age <= 99)){
//     alert("Ты каха")
// }
// else{
//     alert("Ты нормис")
// }

//Задача 22 Ответ: first и third
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

//Задача 23
alert("Хто вы?");
let who = prompt();
if(who == "Админ"){
    alert("Пароль есть?");
    let parol = prompt();
    if(parol == "Я главный"){
        alert("Здравствуйте!")
    }
    if(parol != "Я главный"){
        alert("НЕВЕРНО!!!")
    }
    else{
        alert("Отменено")
    }
}
else if(who != "Админ"){
    alert("Я вас не знаю")
}
else{
    alert("Отменено")
}