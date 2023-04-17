const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const burgerSidebar = document.querySelector('.burger-sidebar')

burger.addEventListener('click', function() {
    this.classList.toggle('change')
    sidebar.classList.toggle('change')
    burgerSidebar.classList.toggle('change')
})

burgerSidebar.addEventListener('click', function() {
    this.classList.remove('change')
    sidebar.classList.remove('change')
    burger.classList.remove('change')
})