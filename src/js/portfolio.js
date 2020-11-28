document.addEventListener('DOMContentLoaded', () => {
  const portfolioTags = document.getElementById('portfolioTags')
  const portfolioImg = document.getElementById('aboutPortfolio')
  const imges = [...portfolioImg.children]
  const tags = [...portfolioTags.children]

  tags.forEach((e) => {
    e.addEventListener('click', () => {
     console.log(e);
     tags.forEach( (element) => {
      element.classList.remove('tag__active')
     })

     e.classList.add('tag__active')
      for (let i = imges.length; i >= 0; i--) {
        portfolioImg.appendChild(imges[(Math.random() * i) | 0])
      }
    })
  })
})
