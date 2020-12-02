document.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('sliderHome')
  const services = document.getElementById('services')
  const portfolio = document.getElementById('portfolio')
  const about = document.getElementById('aboutPortfolio')
  const contact = document.getElementById('contact')
  const navbarBurgerHome = document.getElementById('navbarBurgerHome')
  const navbarBurgerServices = document.getElementById('navbarBurgerservices')
  const navbarBurgerPortfolio = document.getElementById('navbarBurgerPortfolio')
  const navbarBurgerAbout = document.getElementById('navbarBurgerAbout')
  const navbarBurgerContact = document.getElementById('navbarBurgerContact')
  const hiddenMenu = document.getElementById('hiddenMenu')
  const burger = document.getElementById('burger')

  const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
  }

  burger.addEventListener('click', (e) => {
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')
  })

  let currentBurgerTag = navbarBurgerHome
  const onScroll = (element, navBarElement) => () => {
    element.scrollIntoView(scrollOptions)
    hiddenMenu.classList.toggle('hidden-menu')
    burger.classList.toggle('burger_rotate')
    currentBurgerTag.classList.remove('navbar__text_active')
    currentBurgerTag = navBarElement
    navBarElement.classList.add('navbar__text_active')
  }

  navbarBurgerHome.addEventListener('click', onScroll(home, navbarBurgerHome))
  navbarBurgerServices.addEventListener('click', onScroll(services, navbarBurgerServices))
  navbarBurgerPortfolio.addEventListener('click', onScroll(portfolio, navbarBurgerPortfolio))
  navbarBurgerAbout.addEventListener('click', onScroll(about, navbarBurgerAbout))
  navbarBurgerContact.addEventListener('click', onScroll(contact, navbarBurgerContact))
})
