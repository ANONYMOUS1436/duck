// JavaScript for Interactivity and Enhanced UI

// Get the navigation toggle button, the navigation menu, and other elements
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

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
    });
});

// Toggle navigation menu (hamburger menu)
navToggle.addEventListener('click', () => {
    // Toggle the 'active' class to show or hide the navigation menu
    navList.classList.toggle('active');
    
    // Animate the hamburger icon to turn into a close icon
    navToggle.classList.toggle('active');

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Close the menu when clicking on any navigation link (for mobile view)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu on link click (mobile)
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Optional: Apply a fade-in effect for the Hero Section when the page loads
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transition = 'opacity 2s';
    setTimeout(() => {
        hero.style.opacity = '1';
    }, 100); // Delay to allow for a smooth fade-in
});
