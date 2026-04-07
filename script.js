// Glass animation on mouse move for info cards
const infoCards = document.querySelectorAll('.info-card');

infoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', xPercent + '%');
        card.style.setProperty('--mouse-y', yPercent + '%');
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// Glass animation for skill tags
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mousemove', (e) => {
        const rect = tag.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        tag.style.setProperty('--mouse-x', xPercent + '%');
        tag.style.setProperty('--mouse-y', yPercent + '%');
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.setProperty('--mouse-x', '50%');
        tag.style.setProperty('--mouse-y', '50%');
    });
});

// Navigation toggle functionality
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.contains('open');
    
    if (isOpen) {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    } else {
        primaryNav.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
    }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});