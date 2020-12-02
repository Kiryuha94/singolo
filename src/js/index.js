document.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('sliderHome')
  const services = document.getElementById('services')
  const portfolio = document.getElementById('portfolio')
  const about = document.getElementById('aboutPortfolio')
  const contact = document.getElementById('contact')
  const navbarPortfolio = document.getElementById('navbarPortfolio')
  const navbarHome = document.getElementById('navbarHome')
  const navbarservices = document.getElementById('navbarservices')
  const navbarAbout = document.getElementById('navbarAbout')
  const navbarContact = document.getElementById('navbarContact')
  let currentTab = navbarHome
  const headerHeight = document.querySelector('.wrapper__header').getBoundingClientRect().height

  const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
  }

  document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop
    const arry = [
      {
        buttonId: 'navbarHome',
        sectionId: 'sliderHome',
      },
      {
        buttonId: 'navbarservices',
        sectionId: 'services',
      },
      {
        buttonId: 'navbarPortfolio',
        sectionId: 'portfolio',
      },
      {
        buttonId: 'navbarAbout',
        sectionId: 'aboutPortfolio',
      },
      {
        buttonId: 'navbarContact',
        sectionId: 'contact',
      },
    ]
    const get = (id) => document.getElementById(id)

    const activeButton = (button) => {
      arry.forEach(({ buttonId }) => get(buttonId).classList.remove('active'))
      button.classList.add('active')
    }

    arry.forEach(({ buttonId, sectionId }, index) => {
      const button = get(buttonId)
      const section = get(sectionId)
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + get(sectionId).offsetHeight
      if (index + 1 < arry.length) {
        if (scrolled + headerHeight >= sectionTop && scrolled + headerHeight < sectionBottom) {
          activeButton(button)
        }
      } else if (scrolled + headerHeight + window.innerHeight + 10 > sectionBottom) {
        activeButton(button)
      }
    })
  })

  navbarHome.addEventListener('click', () => {
    home.scrollIntoView(scrollOptions)
  })

  navbarservices.addEventListener('click', () => {
    services.scrollIntoView(scrollOptions)
  })

  navbarPortfolio.addEventListener('click', () => {
    portfolio.scrollIntoView(scrollOptions)
  })

  navbarAbout.addEventListener('click', () => {
    about.scrollIntoView(scrollOptions)
    currentTab.classList.remove('active')
    navbarAbout.classList.add('active')
    currentTab = navbarAbout
  })

  navbarContact.addEventListener('click', () => {
    contact.scrollIntoView(scrollOptions)
  })
})
