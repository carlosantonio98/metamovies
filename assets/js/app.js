/*========== SHOW NAVBAR =========*/
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




/*========== LINK ACTIVE ==========*/
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

    // Add limits
    if (n > heros.length) sliderIndex = 1

    if (n < 1) sliderIndex = heros.length

    // Add fade class to all heros
    heros.forEach((item) => item.classList.add('fade'))

    // Removed fade class to current hero
    heros[sliderIndex-1].classList.remove('fade')
}

let sliderIndex = 1
showSlider(sliderIndex)

// Add events to control slider
document.getElementById('btnPrevious').addEventListener('click', () => controlSlider(false))
document.getElementById('btnNext').addEventListener('click', () => controlSlider(true))

// Slider movement auto
setInterval(() => {
    controlSlider(true)
}, 5000)



/*========== TOGGLE MODAL DETAIL ==========*/
const toggleModal = modalId => {
    const modal = document.getElementById(modalId),
    body = document.body

    if (modal && body) {
        // Add new heigth to body
        body.classList.toggle('stop-scrolling')

        // Add fade to the modal
        modal.classList.toggle('fade')
    }
}

/*========== CHANGE IMAGE ==========*/
const changeImageTo = (elementoId, urlImage) => {
    document.getElementById(elementoId).src = urlImage
}

// Add event to the movies content
document.querySelectorAll('.movies__content').forEach(item => item.addEventListener('click', e => {
    const urlImage = e.target.children[0].src

    // Change the image of modal detail
    changeImageTo('modalDetailImg', urlImage)

    // Show or hidden the modal detail
    toggleModal('modalBg')
}))

// Add envent to the dom
window.addEventListener('click', (e) => {

    // Show or hidden the modal detail when the element cliked been the modal backgrond
    if (e.target == document.getElementById('modalBg')){
        toggleModal('modalBg')
    }
})



/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.section-title, .hero__container, .categories__content, .movies__content`, {
    interval: 200
})