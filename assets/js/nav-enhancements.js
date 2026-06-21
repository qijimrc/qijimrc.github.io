// Navigation Enhancements
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    // Smart navbar hide/show on scroll - disabled to maintain layout
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        // Only add/remove scrolled class for styling, don't hide navbar
        // to maintain consistent layout
        
        // Add/remove scrolled class for styling
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    // Throttle scroll events
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    // Enhanced nav link hover effects
    navLinks.forEach(link => {
        // Create hover indicator
        const indicator = document.createElement('span');
        indicator.className = 'nav-indicator';
        link.appendChild(indicator);
        
        link.addEventListener('mouseenter', function() {
            gsap.to(indicator, {
                width: '100%',
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', function() {
            gsap.to(indicator, {
                width: '0%',
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Mobile menu animations
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                // Closing menu
                gsap.to('.navbar-nav .nav-item', {
                    x: -20,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: "power2.in"
                });
            } else {
                // Opening menu
                setTimeout(() => {
                    gsap.from('.navbar-nav .nav-item', {
                        x: -20,
                        opacity: 0,
                        stagger: 0.05,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }, 100);
            }
        });
    }
    
    // Active page indicator animation
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.parentElement.classList.add('active');
            const activeIndicator = link.querySelector('.nav-indicator');
            if (activeIndicator) {
                gsap.set(activeIndicator, { width: '100%' });
            }
        }
    });
});

// Add navigation styles
const navStyles = `
    <style>
        .navbar {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .navbar.scrolled {
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        }
        
        .nav-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--global-theme-color);
            pointer-events: none;
        }
        
        .navbar-nav .nav-link {
            position: relative;
            overflow: hidden;
        }
        
        @media (max-width: 768px) {
            .navbar-collapse {
                background: var(--global-bg-color);
                padding: 20px;
                border-radius: 10px;
                margin-top: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', navStyles);