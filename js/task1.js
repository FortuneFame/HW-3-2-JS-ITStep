
// ------------------------------- Task 1 ----------------------------------


var i = 0;

var activeClass = document.getElementsByClassName("dayWeek");
var forward = document.getElementById('forward');
var backward = document.getElementById('backward');

forward.onclick = function () {
    activeClass[i].classList.remove("active");

    (i == 6) ? i = 0 : i++;
    
    activeClass[i].classList.add("active");
}

backward.onclick = function () {
    activeClass[i].classList.remove("active");

    (i == 0) ? i = 6 : i--;
    
    activeClass[i].classList.add("active");
}


// // Также добавила вариант через alert/confirm


// var week = 0;
// var action = true;
// var work = true;

// alert("Неделя начинается с Понедельника")

// while (work) {
   
//     action = confirm("Хотите увидеть следующий день ?");

//     while (action) {
        
//         week++;
//         if (week < 0) week = 6;
//         if (week > 6) week = 0;

//         switch (week) {
//         case 0:
//             var day = confirm("Понедельник");
//             break;
//         case 1:
//             var day = confirm("Вторник");
//             break;
//         case 2:
//             var day = confirm("Среда");
//             break;
//         case 3:
//             var day = confirm("Четверг");
//             break;
//         case 4:
//             var day = confirm("Пятница");
//             break;
//         case 5:
//             var day = confirm("Суббота");
//             break;
//         case 6:
//             var day = confirm("Воскресенье");
//             break;
//         }

//         if (!day) action = false;
//     }

//     if (!action) work = false;

// }
//     alert("До новых встречь!");

// ------------------------------- Task 2 ----------------------------------


var text = "<table>";
    for (let y = 1; y < 10; y++) {
        text += "<tr>";
        for (let x = 1; x < 10; x++) {
            var r = x * y;
            text += "<td>" + r + "</td>";
        }
        text += "</tr>";
    }
text += "</table>";
table.innerHTML = text;


// ------------------------------- Task 3 ----------------------------------

function random() {
    document.getElementById('res').innerHTML = " ";
    var randomNum = 0;
    do {
        randomNum = Math.floor(Math.random() * 20) + 1;
    } while (randomNum % 3 == 0)
    document.getElementById('res').innerHTML += randomNum;
}




// ------------------------------- Task 4 ----------------------------------







        // 1.Зациклить вывод дней недели таким образом:
        // «День недели.Хотите увидеть следующий день ?»
        // и так до техпор, пока пользователь нажимает OK.

        // 2.Вывести таблицу умножения для всех чисел от 2 до 9.
        // Каждое число необходимо умножить на числа от 1 до9.

        // 3.Напишите скрипт, который выводит ровно 10 случайныхцелых чисел
        // из диапазона 1–20, кроме тех, которыеделятся на 3.

        // 4.Игра «Угадай число». 
        // Предложить пользователю загадатьчисло от 1 до 120 
        // и отгадать его следующим способом:
        // каждую итерацию цикла делите диапазон чисел пополам,
        // записываете результат в N и спрашиваете у пользователя
        // «Ваше число > N, < N или == N ?». 
        // В зависимости от тогочто указал пользователь,
        // уменьшаете диапазон.
        // Начальный диапазон от 1 до 120,
        // поделили пополам иполучили 60. 
        // Если пользователь указал, что его число > 60,
        // то изменили диапазон на от 61 до 120. 
        // И так до техпор, пока пользователь не выберет == N.
        // Посчитайтеколичество попыток.