const burgerBtn = document.querySelector(".burger__menu")
const burgerModalMenu = document.querySelector(".modal__burger_menu")
burgerBtn.addEventListener('click', () => {
     burgerModalMenu.classList.toggle('active')
})

 document.addEventListener('clack', (event) => {
    if(!burgerBtn.contains(event.target) && !burgerModalMenu.contains
        (event.target)) {
            burgerModalMenu.classList.remove('active')
        }
 })