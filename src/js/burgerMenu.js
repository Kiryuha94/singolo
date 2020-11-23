document.addEventListener('DOMContentLoaded', () => {

const home = document.getElementById('sliderHome')
const serveces = document.getElementById('serveces')
const portfolio = document.getElementById('portfolio')
const about = document.getElementById('aboutPortfolio')
const contact = document.getElementById('contact')
const navbarBurgerHome = document.getElementById('navbarBurgerHome')
const navbarBurgerServeces = document.getElementById('navbarBurgerServeces')
const navbarBurgerPortfolio = document.getElementById('navbarBurgerPortfolio')
const navbarBurgerAbout = document.getElementById('navbarBurgerAbout')
const navbarBurgerContact = document.getElementById('navbarBurgerContact')
const hiddenMenu = document.getElementById('hiddenMenu')
const burger = document.getElementById('burger')


burger.addEventListener('click', (e) => {
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')

})

let currentBurgerTag = navbarBurgerHome

navbarBurgerHome.addEventListener('click', ()=> {
    home.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    currentBurgerTag.classList.remove('navbar__text_active')
    navbarBurgerHome.classList.add('navbar__text_active')
    currentBurgerTag = navbarBurgerHome
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')

})

navbarBurgerServeces.addEventListener('click', ()=> {
    serveces.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    currentBurgerTag.classList.remove('navbar__text_active')
    navbarBurgerServeces.classList.add('navbar__text_active')
    currentBurgerTag = navbarBurgerServeces
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')
})

navbarBurgerPortfolio.addEventListener('click', ()=> {
    portfolio.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    currentBurgerTag.classList.remove('navbar__text_active')
    navbarBurgerPortfolio.classList.add('navbar__text_active')
    currentBurgerTag = navbarBurgerPortfolio
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')
})
navbarBurgerAbout.addEventListener('click', ()=> {
    about.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    currentBurgerTag.classList.remove('navbar__text_active')
    navbarBurgerAbout.classList.add('navbar__text_active')
    currentBurgerTag = navbarBurgerAbout
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')
})
navbarBurgerContact.addEventListener('click', ()=> {
    contact.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    currentBurgerTag.classList.remove('navbar__text_active')
    navbarBurgerContact.classList.add('navbar__text_active')
    currentBurgerTag = navbarBurgerContact
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')
})

})