document.addEventListener('DOMContentLoaded', () => {
  const portfolioTags = document.getElementById('portfolioTags')
  const portfolioImg = document.getElementById('aboutPortfolio')
  const imges = [...portfolioImg.children]
  const tags = [...portfolioTags.children]
  let activeButton = tags[0]
  activeButton.classList.add('tag__active')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      activeButton.classList.remove('tag__active')
      tag.classList.add('tag__active')
      activeButton = tag
      for (let i = imges.length; i >= 0; i--) {
        portfolioImg.appendChild(imges[(Math.random() * i) | 0])
      }
    })
  })
})
