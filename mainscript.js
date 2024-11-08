// JavaScript for Enhanced Interactivity and Animations

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for any fixed navbar offset
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link (if in mobile view)
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });
});

// Hamburger menu toggle for mobile devices
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active'); // Animate the hamburger icon to close
});

// Close menu when clicking outside of the nav
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Close menu on navigation link click (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Close the mobile menu function
function closeMobileMenu() {
    navList.classList.remove('active');
    navToggle.classList.remove('active');
}

// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.textContent = '↑'; // Scroll icon or text
document.body.appendChild(scrollToTopButton);

// Show/Hide scroll-to-top button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Card hover effect animation
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Page Load Animation for Hero Section
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});

// Animation for fade-in on load (for Hero Section)
document.styleSheets[0].insertRule(`
    .fade-in {
        opacity: 0;
        animation: fadeInAnimation 2s forwards;
    }
    @keyframes fadeInAnimation {
        100% {
            opacity: 1;
        }
    }
`, document.styleSheets[0].cssRules.length);

