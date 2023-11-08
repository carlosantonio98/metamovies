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



/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 40) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
}

window.addEventListener('scroll', scrollTop)



if (document.querySelectorAll('.hero__content').length > 0) {
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
}



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




/*===== DARK LIGHT THEME =====*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add':'remove'](iconTheme)
}

// Activate / desactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal(`.section-title, .hero__container, .categories__container, .movies__content`, {
    interval: 100
})