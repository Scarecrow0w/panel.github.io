import './style.css'

// const categories = [
//     {
//         title: 'Красота',
//         list: ['Парикмахерские', 'Услуги красоты', 'Косметика для волос', 'Парикмахеры']
//     },
//     {
//         title: 'Профессионал',
//         list: ['Курсы парикмахеров', 'Учебные центры', 'Преподаватели курсов', 'Продукция для парикмахеров', 'Моё обучение']
//     },
//     {
//         title: 'B2B',
//         list: ['Свой бизнес', 'Бизнес-консультанты', 'Бизнес-образование', 'Партнеры', 'Бонусы для салона']
//     }
// ]

let menuBtn = document.querySelector('#menuBtn'),
sidebar = document.querySelector('.sidebar'),
main = document.querySelector('main');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('opened')
    sidebar.classList.toggle('-translate-x-full')
    menuBtn.classList.contains('opened') ? main.style.marginLeft = '0' : main.style.marginLeft = '300px'
}
