
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
    document.getElementById('res').classList.add('num');
}


// //  Также добавила вариант через console.log



// for (k = 1; k <= 10; k++) {
//     var num = Math.floor(Math.random() * 20 + 1);
//     if (num % 3 != 0) console.log(num)
// }


// ------------------------------- Task 4 ----------------------------------


var btn = document.getElementById('btn');
var quest = document.getElementById('quest');
var small = document.getElementById('small');
var big = document.getElementById('big');



btn.addEventListener('click', function () {

    quest.innerText = resN;
    this.classList.add('hide');
    small.parentNode.classList.remove('hide');
    quest.classList.add('num')

});

var low = 0;
var high = 120;
var resN = Math.floor((low + high) / 2);

function search() {
    
    return Math.floor((low + high) / 2);
}

small.addEventListener('click', function () {
    
    high = Number(quest.innerText);
    quest.innerText = search();  

});

big.addEventListener('click', function () {

    low = Number(quest.innerText);    
    quest.innerText = search();  

});


// // Также добавила вариант через alert/prompt



// var min = 0;
// var max = 120;
// let resultTrue = 0;


// alert("Загадайте число от 0 до 120");

// while (true) {
    
//     let que = Math.floor((min + max) / 2);
//     let ans = prompt("Ваше число ( > ) или ( < ) или ( = )   " + que);   

//     if (ans === '>') {
//         min = que + 1;
//     }
//     else if (ans === '<') {
//         max = que - 1;
//     } 
//     else if (ans === '=') {
//         alert("Ваше число:   " + que + "   Попыток:   " + resultTrue);
//         break;
//     }

//     resultTrue++;
// }
