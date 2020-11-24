document.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('sliderHome')
  const serveces = document.getElementById('serveces')
  const portfolio = document.getElementById('portfolio')
  const about = document.getElementById('aboutPortfolio')
  const contact = document.getElementById('contact')
  const navbarPortfolio = document.getElementById('navbarPortfolio')
  const navbarHome = document.getElementById('navbarHome')
  const navbarServeces = document.getElementById('navbarServeces')
  const navbarAbout = document.getElementById('navbarAbout')
  const navbarContact = document.getElementById('navbarContact')
  let scrollHome = home.getBoundingClientRect().y
  let scrollServeces = serveces.getBoundingClientRect().y
  let scrollPortfolio = portfolio.getBoundingClientRect().y
  let scrollAbout = about.getBoundingClientRect().y
  let currentTab = navbarHome

  document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop

    if (scrolled >= scrollHome && scrolled < scrollServeces) {
      currentTab.classList.remove('active')
      navbarHome.classList.add('active')
      currentTab = navbarHome
    }

    if (scrolled >= scrollServeces && scrolled < scrollPortfolio) {
      currentTab.classList.remove('active')
      navbarServeces.classList.add('active')
      currentTab = navbarServeces
    }

    if (scrolled >= scrollPortfolio && scrolled < scrollAbout) {
      currentTab.classList.remove('active')
      navbarPortfolio.classList.add('active')
      currentTab = navbarPortfolio
    }

    const isBottomOfDocument = scrolled + window.innerHeight + 5 > document.body.getBoundingClientRect().height

    if (scrolled >= scrollAbout && !isBottomOfDocument) {
      currentTab.classList.remove('active')
      navbarAbout.classList.add('active')
      currentTab = navbarAbout
    }

    if (isBottomOfDocument) {
      currentTab.classList.remove('active')
      navbarContact.classList.add('active')
      currentTab = navbarContact
    }
  })

  navbarHome.addEventListener('click', () => {
    home.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })

  navbarServeces.addEventListener('click', () => {
    serveces.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })

  navbarPortfolio.addEventListener('click', () => {
    portfolio.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })

  navbarAbout.addEventListener('click', () => {
    about.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    currentTab.classList.remove('active')
    navbarAbout.classList.add('active')
    currentTab = navbarAbout
  })
  navbarContact.addEventListener('click', () => {
    contact.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
