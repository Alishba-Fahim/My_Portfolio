// ======================== Toggle Icon Navbar ======================== //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar visibility on menu icon click
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); 
};

// ======================== Scroll Sections Active Link ======================== //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    // =================== Sticky Navbar =================== //
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // =================== Remove Toggle Icon and Navbar When Link is Clicked (scroll) =================== //
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
};

// =================== Scroll Reveal =================== //
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .voice-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .voice-content', { origin: 'right' });

    // =================== Typed.js =================== //
    const typed = new Typed('.multiple-text', {
        strings: ['HTML Developer', 'CSS Expert', 'JavaScript Enthusiast', 'Web Designer', 'Frontend Developer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
