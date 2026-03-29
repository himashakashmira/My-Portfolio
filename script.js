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

// Typing effect animation
const texts = ["Software Engineer", "UI/UX Developer", "any"];
let textIndex = 0;
let currentIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const delayBeforeDeleting = 2000; // Wait time before deleting
const delayBeforeTypingAgain = 500; // Wait time before typing again

function animateTyping() {
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) {
        console.log('Typing element not found');
        return;
    }
    
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentIndex);
        currentIndex--;
        
        if (currentIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(animateTyping, delayBeforeTypingAgain);
        } else {
            setTimeout(animateTyping, deletingSpeed);
        }
    } else {
        typingElement.textContent = currentText.substring(0, currentIndex);
        currentIndex++;
        
        if (currentIndex > currentText.length) {
            isDeleting = true;
            setTimeout(animateTyping, delayBeforeDeleting);
        } else {
            setTimeout(animateTyping, typingSpeed);
        }
    }
}

// Start typing animation when page loads
function startTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        setTimeout(animateTyping, delayBeforeTypingAgain);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startTypingAnimation);
} else {
    startTypingAnimation();
}
