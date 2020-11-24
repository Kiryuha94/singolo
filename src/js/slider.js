document.addEventListener('DOMContentLoaded', () => {
  let activeButton = true
  let slideIndex = 0
  const slider = document.getElementById('slides')
  const arrowLeft = document.getElementById('arrowLeft')
  const arrowRight = document.getElementById('arrowRight')
  const slides = [...slider.children]
  const slidesCount = slides.length

  const setSliderHeight = () => {
    const height = getComputedStyle(slides[0]).height
    slider.style.height = height
  }

  setSliderHeight()
  window.addEventListener('resize', setSliderHeight)

  slides.forEach((slide, index) => {
    if (index != slideIndex) {
      slide.classList.add('hidden')
    }
  })

  arrowLeft.addEventListener('click', () => {
    if (!activeButton) return
    activeButton = false
    const nextSlideIndex = slideIndex === 0 ? slidesCount - 1 : slideIndex - 1

    const s1 = slides[slideIndex]
    const s2 = slides[nextSlideIndex]

    const width = slider.clientWidth

    s2.style.left = `${width}px`
    s1.style.left = '0px'
    s2.classList.remove('hidden')

    const step = width / 200

    const interval = setInterval(() => {
      const left1 = parseFloat(s1.style.left)
      const left2 = parseFloat(s2.style.left)

      s1.style.left = `${left1 - step}px`
      s2.style.left = `${left2 - step}px`

      if (Math.abs(left2) < Math.abs(step)) {
        clearInterval(interval)
        s2.style.left = '0px'
        s1.classList.add('hidden')
        slideIndex = nextSlideIndex
        activeButton = true
      }
    }, 1)
  })

  arrowRight.addEventListener('click', () => {
    if (!activeButton) return
    activeButton = true
    const nextSlideIndex = slideIndex + 1 === slidesCount ? 0 : slideIndex + 1

    const s1 = slides[slideIndex]
    const s2 = slides[nextSlideIndex]

    const width = slider.clientWidth

    s2.style.left = `${-width}px`
    s1.style.left = '0px'
    s2.classList.remove('hidden')

    const step = width / 200

    const interval = setInterval(() => {
      const left1 = parseFloat(s1.style.left)
      const left2 = parseFloat(s2.style.left)

      s1.style.left = `${left1 + step}px`
      s2.style.left = `${left2 + step}px`

      if (Math.abs(left2) < Math.abs(step)) {
        clearInterval(interval)
        s2.style.left = '0px'
        s1.classList.add('hidden')
        slideIndex = nextSlideIndex
        activeButton = true
      }
    }, 1)
  })
})
