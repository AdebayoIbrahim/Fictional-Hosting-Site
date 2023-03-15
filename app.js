const menu = document.querySelector('.menu')
const  mob = document.querySelector('div.cover')
const close = document.querySelector('img.close')
const mobile_items_list = document.querySelectorAll('div.cover > ul.elem > li')

menu.addEventListener('click', () => {
    mob.classList.add('show-cover');
    mobile_items_list.forEach(lists => {lists.classList.add('neat')})
})

close.addEventListener('click', () => {
    mob.classList.remove('show-cover');
    mobile_items_list.forEach(lists => {lists.classList.remove('neat')})
})

// function openNav () {
//     mob.style.transform = "translateX(0%)"
// }