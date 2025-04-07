

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scrollspy
    initScrollSpy();
    
    // Smooth scrolling for navigation links
    initSmoothScroll();
    
    // Navbar animation on scroll
    initNavbarAnimation();
    
    // Add animation to cards when they come into view
    initCardAnimations();
    
    // Mobile menu toggle
    initMobileMenuToggle();
    
    // Add typing effect to hero section
    initTypingEffect();
});

// Initialize Bootstrap scrollspy
function initScrollSpy() {
    const scrollSpyElements = document.querySelectorAll('[data-bs-spy="scroll"]');
    scrollSpyElements.forEach(element => {
        bootstrap.ScrollSpy.getOrCreateInstance(element);
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link, .navbar-brand');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process links with hash
            if (this.hash !== '') {
                e.preventDefault();
                
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    // Calculate position with offset for fixed navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash after scroll
                    setTimeout(() => {
                        window.location.hash = hash;
                    }, 800);
                }
            }
        });
    });
}

// Navbar animation on scroll
function initNavbarAnimation() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.padding = '0.5rem 1rem';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.padding = '1rem';
        }
    });
}

// Add animation to cards when they come into view
function initCardAnimations() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const cards = document.querySelectorAll('.card');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        cards.forEach(card => {
            observer.observe(card);
        });
    }
}

// Mobile menu toggle
function initMobileMenuToggle() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
}

// Add typing effect to the hero section
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-section h1');
    
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
    }
}

// Make active link highlight
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 10;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
