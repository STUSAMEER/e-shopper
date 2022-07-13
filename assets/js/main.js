/*=========  Header  ===========*/
function scrollHeader() {
    const header =document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=========  Swiper  ===========*/
var homeSwiper = new Swiper(".home_swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


/*=========  New Arrivals  ===========*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView:"auto",
    loop: 'true',
  });


/*=========  Show Menu ===========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      if(navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add('show-menu')
        })
      }

      if(navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove('show-menu')
        })
      }



/*=========  Show Card ===========*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')


      if(cartShop) {
        cartShop.addEventListener("click", () => {
          cart.classList.add('show-cart')
        })
      }

      if(cartClose) {
        cartClose.addEventListener("click", () => {
          cart.classList.remove('show-cart')
        })
      }
  
      
/*=========  Show Login ===========*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')

      if(loginButton) {
        loginButton.addEventListener("click", () => {
          login.classList.add('show-login')
        })
      }

      if(loginClose) {
        loginClose.addEventListener("click", () => {
          login.classList.remove('show-login')
        })
      }


/*=========  Show Scroll Up ===========*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 350)
  scrollUp.classList.add('show-scroll');

  else
  scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=========  Question Accordion ===========*/
const accordionItem = document.querySelectorAll('.question-item')

accordionItem.forEach((item) => {
  const AccordionHeader = item.querySelector('.question-header')

  AccordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(
      openItem && openItem !== item
    )
    {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.question-content')

  if(
    item.classList.contains('accordion-open')) {
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    }

    else
    {
      accordionContent.style.height =accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
    }
  

 
}