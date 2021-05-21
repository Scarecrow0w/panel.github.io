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
    if (window.innerWidth >= 1440) {
        sidebar.classList.toggle('xlg:translate-x-0')
        main.classList.toggle('xlg:ml-72')
    } else {
        sidebar.classList.toggle('-translate-x-full')

        if (window.innerWidth >= 640 && window.innerWidth < 1440) {
            menuBtn.classList.toggle('ml-72')
        }

        if (window.innerWidth < 640) {
            menuBtn.classList.toggle('fixed')
            menuBtn.classList.toggle('z-10')
            menuBtn.classList.toggle('right-5')
            menuBtn.classList.toggle('open')
        }
    }
}

