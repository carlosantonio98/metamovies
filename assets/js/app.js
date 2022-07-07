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
function controlSlider(isNext) {
    sliderIndex = isNext ? (sliderIndex + 1) : (sliderIndex - 1)
    showSlider(sliderIndex)
}

/*========== SHOW SLIDE ==========*/
function showSlider(n) {
    const heros = document.querySelectorAll('.hero__content')
  
    if (n > heros.length) sliderIndex = 1
  
    if (n < 1) sliderIndex = heros.length
  
    /* Add fade class to all heros */
    heros.forEach((item) => item.classList.add('fade'))
  
    /* Removed fade class to current hero */
    heros[sliderIndex-1].classList.remove('fade')
}
  
let sliderIndex = 1

showSlider(sliderIndex)
document.getElementById('btnPrevious').addEventListener('click', () => controlSlider(false))
document.getElementById('btnNext').addEventListener('click', () => controlSlider(true))



/*===== TOGGLE MODAL DETAIL =====*/
const toggleModal = modalId => {
    const modal = document.getElementById(modalId),
    body = document.body
    
    if (modal && body) {
        body.classList.toggle('stop-scrolling')
        modal.classList.toggle('bg-active')
    }
}

/*===== CHANGE IMAGE =====*/
const changeImageTo = (elementoId, urlImage) => {
    const element = document.getElementById(elementoId)
    element.src = urlImage
}

document.querySelectorAll('.movies__content').forEach(item => item.addEventListener('click', e => {
    urlImage = e.target.src

    changeImageTo('modalDetailImg', urlImage)
    toggleModal('modalBg')
}))

window.addEventListener('click', (e) => {
    if (e.target == document.getElementById('modalBg')){
        toggleModal('modalBg')
    }
})



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