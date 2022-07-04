/*==== SHOW NAVBAR ====*/
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodyId && headerId) {
        toggle.addEventListener('click', () => {
            // Show navbar
            nav.classList.toggle('show')
            
            // Change icon
            toggle.classList.toggle('bx-x')
            
            // Add padding to body
            //bodypd.classList.toggle('body-pd')

            //Add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')




/*==== LINK ACTIVE ====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(i => i.addEventListener('click', colorLink))





/*========== NEXT/PREVIOUS CONTROLS ==========*/
function previousSlides() {
    showSlides(slideIndex -= 1)
}

function nextSlides() {
    showSlides(slideIndex += 1)
}

/*========== SHOW SLIDE ==========*/
function showSlides(n) {
    let heros = document.querySelectorAll('.hero__content')
  
    if (n > heros.length) slideIndex = 1
  
    if (n < 1) slideIndex = heros.length
  
    heros.forEach((item) => {
      item.classList.add('fade')
    })
  
    heros[slideIndex-1].classList.remove('fade')
}
  
const previousControl = document.getElementById('btnPrevious')
const nextControl = document.getElementById('btnNext')
let slideIndex = 1

showSlides(slideIndex)
previousControl.addEventListener('click', () => previousSlides())
nextControl.addEventListener('click', () => nextSlides())




/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.section-title, .hero__container, .categories__content, .movies__content`, {
    interval: 200
})