// Safe and Elegant Enhancements - Preserved Layout
document.addEventListener('DOMContentLoaded', function() {
    
    // Only if GSAP is loaded
    if (typeof gsap === 'undefined') return;
    
    // 1. Smooth hover effects for links (subtle)
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.dataset.noHover) {
                gsap.to(this, {
                    opacity: 0.8,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.dataset.noHover) {
                gsap.to(this, {
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // 2. Subtle button animations
    document.querySelectorAll('.btn, button').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
    
    // 3. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 4. Subtle animations - removed to prevent content disappearing
    // Only add very subtle hover effects, no fade-in animations that might hide content
    
    // 5. Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
    
    // 6. Image fade-in on load
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
    
    // 7. Enhanced focus states for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
    // 8. Smooth page transitions
    window.addEventListener('beforeunload', () => {
        document.body.style.transition = 'opacity 0.2s ease';
        document.body.style.opacity = '0';
    });
    
    // Ensure page is visible
    document.body.style.opacity = '1';
    
    // Force publications to be visible (failsafe)
    document.querySelectorAll('.publications, .publications li').forEach(elem => {
        elem.style.opacity = '1';
        elem.style.visibility = 'visible';
    });
});

// Add safe styles
const safeStyles = `
    <style>
        /* Safe enhancement styles */
        body {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        .navbar {
            transition: box-shadow 0.3s ease;
        }
        
        a {
            transition: opacity 0.2s ease, color 0.2s ease;
        }
        
        .btn, button {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .btn:hover, button:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
        
        .keyboard-nav *:focus {
            outline: 2px solid var(--global-theme-color);
            outline-offset: 2px;
        }
        
        /* Ensure content is visible */
        * {
            visibility: visible !important;
        }
        
        /* Remove any problematic animations */
        .custom-cursor,
        .cursor-follower,
        .background-particle {
            display: none !important;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', safeStyles);