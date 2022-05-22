// SHOW MENU

const navToggle = document.querySelector('.nav__toggle');
navMenu = document.querySelector('.nav__menu');
navClose = document.querySelector('.nav__close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
} if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// REMOVE MOBILE MENU
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ADD ACTIVE LINK
function addActive() {
    navLink.forEach(n => n.classList.remove('active')); 
    this.classList.add('active'); 
};
navLink.forEach(n => n.addEventListener('click', addActive));
// CHANGES HEADER WHEN SCROLL
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scroll-header', window.scrollY > 200);
});
// SWIPER DISCOVER
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// VIDEO
const videoFile = document.querySelector('.video-id');
videoButton = document.querySelector('.button__video');
videoIcon = document.querySelector('.button__video-icon');

function playPause() {
    if (videoFile.paused) {
        videoFile.play();
        // change icon
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause();
        // change icon
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended', finalVideo);

// SHOW SCROLL-TOP
const scrollUp = document.querySelector('.scroll-up');
window.addEventListener('scroll', () => {
    scrollUp.classList.toggle('show-scroll', window.scrollY > 200);
});

// DARK-LIGHT THEME
const modeChange = document.querySelector('.mode-change');
const body = document.querySelector('body');
modeChange.addEventListener('click', () => {
    if (!body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme');
        modeChange.classList.remove('ri-moon-line');
        modeChange.classList.add('ri-sun-line');
    } else {
        body.classList.remove('dark-theme');
        modeChange.classList.add('ri-moon-line');
        modeChange.classList.remove('ri-sun-line');
    }
});

// SCROLL ANIMATION
const sr = ScrollReveal({
    distance: '80px',
    duration: 2800,
});

sr.reveal('.home__data, .home__social, .home__social-link, .discover__container, .experience__data, .place__card', {
    origin: 'top',
    interval: 100,
});
sr.reveal('.about__data, .experience__img-one, .video__description, .subcribe__description, .sponsor__img', {
    origin: 'left',
});
sr.reveal('.about__img-overlay, .experience__img-two, .video__content, .subcribe__form, .footer__data', {
    origin: 'right',
    interval: 100

});