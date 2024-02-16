/*=============== SHOW MENU MOBILE===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// menu show
if(navToggle){
    navToggle.addEventListener('click', () => 
    {navMenu.classList.add('show-menu')
    })
}

//menu hidden
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // by clicking on each nav__link we remove show the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const scrollShadowHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is grester than 50 viewport heigt, add the shadow-header class
    window.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', scrollShadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_qqf5qfm', 'template_ll3t69a', contactForm, 'c_4YBCo5ljMitjlKG')
    .then(() => {
        // display sent message
        contactMessage.textContent = 'Message sent successfully';
        // remove afterwards
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 4000);

        // clear input fields
        contactForm.reset();
    })
    .catch((error) => {
        console.error('Error sending the message:', error);
        contactMessage.textContent = 'Error sending the message: ' + error;
    });
    

};

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // adding when more than 350 vieport
    window.scrollY >= 500 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const boldNameSection = () =>{

    // The current scroll distance from the top edge of the browser window.
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight, // height of current section
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*="'+sectionId + '"]')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');   
        }
        else{
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', boldNameSection);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme' // class of dark colors
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButtonButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : '"ri-sun-line'

//we validate if the user previously chose a topic
if (selectedTheme) {
    //chcecking the state
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme)
}

// activate or deactivate using buttom
themeButton.addEventListener('click', () => {
    //
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // saving choice
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

//main function for scrollReveal
function revealFunction(){
    //initialize our "sr" (scroll reveal)
    window.sr = ScrollReveal({ duration: 1350, distance:'250px', easing: 'ease-out'});
    sr.reveal('.reveal-left', {origin:'left', reset:false})
    sr.reveal('.reveal-right', {origin:'right', reset:false})
    sr.reveal('.reveal-right', {origin:'right', reset:false})
    sr.reveal('.reveal-right', {origin:'right', reset:false})
    

    sr.reveal('.reveal-bottom-reset', {origin:'bottom', interval:'200'})
    sr.reveal('.reveal-left-reset', {origin:'left', interval:'200'})
    sr.reveal('.reveal-right-reset', {origin:'right', interval:'200'})
    sr.reveal('.reveal-top-reset', {origin:'top', interval:'200'})
 
    // Animacja "Fade In"
    sr.reveal('.reveal-fade-in', { origin: 'bottom', distance: '50px', opacity: 0, duration: 1000, delay: 200 });

    // Animacja "Slide From Left"
    sr.reveal('.reveal-slide-left', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });

    // Animacja "Slide From Right"
    sr.reveal('.reveal-slide-right', { origin: 'right', distance: '50px', duration: 1000, delay: 200 });

    // Animacja "Slide From Top"
    sr.reveal('.reveal-slide-top', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });

    sr.reveal('.reveal-slide-diagonal', { 
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        beforeReveal: (domEl) => {
          domEl.style.transform = 'rotate(-15deg)'; // Obrócenie elementu o -45 stopni przed animacją
        },
        afterReveal: (domEl) => {
          domEl.style.transform = 'rotate(0deg)'; // Powrót do pierwotnej rotacji (0 stopni) po zakończeniu animacji
        }
      });

      sr.reveal('.reveal-slide-diagonal', { 
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        beforeReveal: (domEl) => {
          domEl.style.transform = 'rotate(-15deg)'; // Obrócenie elementu o -45 stopni przed animacją
        },
        afterReveal: (domEl) => {
          domEl.style.transform = 'rotate(0deg)'; // Powrót do pierwotnej rotacji (0 stopni) po zakończeniu animacji
        }
      });


}
// first of all, on load we call our magic
window.addEventListener('load', () => {
    revealFunction();
})
