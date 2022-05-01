'use strict';

const select = document.querySelector('#selectList'),
    selectedBook = document.querySelector('#selectedBook'),
    button = document.querySelector('#regQueue');

//Створення та рендер елементів списку
booksData.forEach(el => {
    const selectOption = document.createElement('option');

    selectOption.setAttribute('id', el.id);
    selectOption.textContent = el.name;
    selectOption.value = el.name;

    select.append(selectOption);
});

//Зміна книжки за обраним пунктом(стандартним методом switch)

// select.addEventListener('change', function() {
//     switch(true) {
//         case(this.value === 'Ікабог'): selectedBook.src = "./img/books/Ickagod.jpeg";
//         break;

//         case(this.value === 'Завтрашній день кішки'): selectedBook.src = "./img/books/Cat's tomorrow day.jpeg";
//         break;

//         case(this.value === "П'ять частин апельсину"): selectedBook.src = "./img/books/Five pieces of orange.jpeg";
//         break;

//         case(this.value === "Гормони щастя"): selectedBook.src = "./img/books/Hormones of happiness.png";
//         break;

//         case(this.value === "Хребти божевілля"): selectedBook.src = "./img/books/Ridges of madness.jfif";
//         break;

//         case(this.value === "Дім на краю ночі"): selectedBook.src = "./img/books/The house on the edge of night.jpg";
//         break;

//         case(this.value === "Молитва про Оуена Міні"): selectedBook.src = "./img/books/The prayer about Owen Mini.jpg";
//         break;

//         case(this.value === "Проблеми надзвичайно багатих азіатів"): selectedBook.src = "./img/books/The problems of insanly rich asians.jpg";
//         break;

//         case(this.value === "Прованс назавжди"): selectedBook.src = "./img/books/the provance forever.jpg";
//         break;

//         case(this.value === "Ловці неба"): selectedBook.src = "./img/books/Sky chasers.jpeg";
//         break;
//     };
// });

//Зміна книжки за обраним пунктом(оптимальне рішення)
select.addEventListener('change', function() {
    renderChangedBook(this.value);
});

function renderChangedBook(val) {
    booksData.forEach(el => {
        if (val === el.name) {
            selectedBook.src = el.poster;
        } else {
            return;
        };
    });
};

document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Ви встали у чергу!');
    location.reload();
});