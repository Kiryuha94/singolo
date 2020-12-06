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
  const headerHeight = document.querySelector('.wrapper__header').getBoundingClientRect().height
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
  }

  const array = [
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

  const getElement = (id) => document.getElementById(id)

  document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop

    const addActiveButton = (button) => {
      array.forEach(({ buttonId }) => getElement(buttonId).classList.remove('active'))
      button.classList.add('active')
    }

    array.forEach(({ buttonId, sectionId }, index) => {
      const button = getElement(buttonId)
      const section = getElement(sectionId)
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + getElement(sectionId).offsetHeight
      if (index + 1 < array.length) {
        if (scrolled + headerHeight >= sectionTop && scrolled + headerHeight < sectionBottom) {
          addActiveButton(button)
        }
      } else if (scrolled + headerHeight + window.innerHeight + 10 > sectionBottom) {
        addActiveButton(button)
      }
    })
  })

  const clickScroll = (element) => () => {
    element.scrollIntoView(scrollOptions)
  }
  navbarHome.addEventListener('click', clickScroll(home))
  navbarservices.addEventListener('click', clickScroll(services))
  navbarPortfolio.addEventListener('click', clickScroll(portfolio))
  navbarAbout.addEventListener('click', clickScroll(about))
  navbarContact.addEventListener('click', clickScroll(contact))
})
