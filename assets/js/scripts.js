window.addEventListener('DOMContentLoaded', (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'))
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })

  AOS.init({
    offset: 0,
    duration: 800,
    easing: 'ease-in-quad',
    delay: 100,
  })
})
$('.owl-carousel-projects').owlCarousel({
  items: 4,
  merge: true,
  loop: true,
  margin: 10,
  video: true,
  lazyLoad: true,
  center: true,
  autoplay: true,
  nav: false,
  autoWidth: true,
  animateOut: 'fadeOut',
  responsive: {
    480: {
      items: 2,
    },
    600: {
      items: 4,
    },
  },
})
