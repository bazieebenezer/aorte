const menuBtn = document.querySelector('.menu .button')
const menuLinks = document.querySelector('.links')
const links = document.querySelectorAll('ul li')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')
const prev = document.querySelector('.prev_btn')
const next = document.querySelector('.next_btn')
const portfolios = document.querySelector('.portfolios')
const cards = document.querySelectorAll('.student_box')
const returnUpBtn = document.querySelector('.return_up')
const logo = document.querySelector('.logo')


menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('hidden')
    menuBtn.classList.toggle('showMenu')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.add('hidden')
        menuBtn.classList.remove('showMenu')
    })
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && window.innerWidth >= 1024) {
        menuLinks.classList.add('active')
        menuLinks.classList.remove('hidden')
        logo.style.opacity = 0;
    } else {
        menuLinks.classList.remove('active')
        menuLinks.classList.add('hidden')
        logo.style.opacity = 1;
    }
    
    if (window.scrollY > 100) {
        returnUpBtn.classList.add('show')
    } else {
        returnUpBtn.classList.remove('show')
    }
})
