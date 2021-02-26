import anime from 'animejs'

document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.navbar_logo',
    easing: 'easeOutExpo',
    translateX: [-200, 0],
    duration: 800,
    delay: 1000,
    opacity: [0, 1]
  })

  anime({
    targets: '.menu-item',
    easing: 'easeOutExpo',
    duration: 800,
    translateX: [-200, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {start: 1300})
  })

  anime({
    targets: '.btn_primary',
    easing: 'easeOutExpo',
    duration: 800,
    translateX: [200, 0],
    opacity: [0, 1],
    delay: 1400
  })

  anime({
    targets: '.toggle_menu',
    easing: 'easeOutExpo',
    translateX: [200, 0],
    duration: 800,
    delay: 1300,
    opacity: [0, 1]
  })

  anime({
    targets: '.bgcircle',
    translateX: [-200, 0],
    duration: 1000,
    delay: 1500,
    opacity: [0, 1]
  })

  anime({
    targets: '.bicycle',
    translateX: [200, 0],
    duration: 1000,
    delay: 1700,
    opacity: [0, 1]
  })

  anime({
    targets: '.hero-footer',
    easing: 'easeInCubic',
    translateY: [200, 0],
    duration: 700,
    delay: 1800,
    opacity: [0, 1]
  })

  setTimeout(() => {
    anime({
      targets: '.bgcircle',
      keyframes: [
        {
          translateY: -15,
        },
        {
          translateY: 0
        }
      ],
      easing: 'easeInOutSine',
      duration: 3600,
      loop: true,
    })

    anime({
      targets: '.bicycle',
      keyframes: [
        {
          translateY: 10,
        },
        {
          translateY: 0
        }
      ],
      easing: 'easeInOutSine',
      duration: 3600,
      loop: true,
    })
  }, 2000)
})

export const anMobileMenu = () => {
  anime({
    targets: '.navbar-mobile-item',
    duration: 1000,
    translateY: [-200, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
  })
} 