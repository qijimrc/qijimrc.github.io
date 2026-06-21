// Smooth and Advanced Fade-in Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Configuration for different animation styles
    const animationConfig = {
        // Smooth fade with subtle scale
        smoothFade: {
            initial: { opacity: 0, y: 30, scale: 0.98 },
            final: { opacity: 1, y: 0, scale: 1 },
            duration: 0.8,
            ease: "power2.out"
        },
        // Elegant slide up
        slideUp: {
            initial: { opacity: 0, y: 40, filter: "blur(4px)" },
            final: { opacity: 1, y: 0, filter: "blur(0px)" },
            duration: 0.9,
            ease: "power3.out"
        },
        // Gentle reveal
        gentleReveal: {
            initial: { opacity: 0, y: 20 },
            final: { opacity: 1, y: 0 },
            duration: 0.7,
            ease: "power1.out"
        }
    };
    
    // Advanced stagger configuration
    const staggerConfig = {
        each: 0.08,
        from: "start",
        ease: "power2.inOut"
    };
    
    // 1. Hero section and profile - immediate smooth fade
    const heroElements = document.querySelectorAll('.profile, h1, .clearfix > p:first-child');
    if (heroElements.length > 0) {
        gsap.set(heroElements, animationConfig.smoothFade.initial);
        
        gsap.to(heroElements, {
            ...animationConfig.smoothFade.final,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            ease: "power3.out"
        });
    }
    
    // 2. Section headings with elegant entrance
    gsap.utils.toArray('h2, h3, h4, h5').forEach((heading, index) => {
        gsap.set(heading, {
            opacity: 0,
            x: -20,
            filter: "blur(2px)"
        });
        
        ScrollTrigger.create({
            trigger: heading,
            start: "top 85%",
            once: true,
            onEnter: () => {
                gsap.to(heading, {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    duration: 0.7,
                    delay: index * 0.05,
                    ease: "power3.out"
                });
            }
        });
    });
    
    // 3. Publications with sophisticated stagger
    const publicationItems = document.querySelectorAll('.publications li');
    if (publicationItems.length > 0) {
        // Set initial state
        gsap.set(publicationItems, {
            opacity: 0,
            y: 25,
            scale: 0.97,
            transformOrigin: "left center"
        });
        
        // Create batch animation for better performance
        ScrollTrigger.batch(publicationItems, {
            start: "top 85%",
            once: true,
            interval: 0.1,
            batchMax: 3,
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: {
                        each: 0.06,
                        ease: "power2.inOut"
                    },
                    ease: "power3.out",
                    overwrite: true
                });
            }
        });
    }
    
    // 4. Cards with 3D perspective animation
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        gsap.set(cards, {
            opacity: 0,
            y: 40,
            rotationX: -15,
            transformPerspective: 1000,
            transformOrigin: "center bottom"
        });
        
        ScrollTrigger.batch(cards, {
            start: "top 80%",
            once: true,
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out"
                });
            }
        });
    }
    
    // 5. Text paragraphs with smooth wave effect
    const paragraphs = document.querySelectorAll('p:not(.address p):not(.profile p)');
    paragraphs.forEach((p, index) => {
        // Skip if already animated or too short
        if (p.textContent.length < 20) return;
        
        gsap.set(p, {
            opacity: 0,
            y: 15
        });
        
        ScrollTrigger.create({
            trigger: p,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(p, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: (index % 3) * 0.1, // Create wave effect
                    ease: "power2.out"
                });
            }
        });
    });
    
    // 6. News items with cascade effect
    const newsItems = document.querySelectorAll('.news td');
    if (newsItems.length > 0) {
        gsap.set(newsItems, {
            opacity: 0,
            x: -30,
            filter: "blur(3px)"
        });
        
        ScrollTrigger.batch(newsItems, {
            start: "top 90%",
            once: true,
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    duration: 0.7,
                    stagger: 0.08,
                    ease: "power3.out"
                });
            }
        });
    }
    
    // 7. Social icons with bounce effect
    const socialIcons = document.querySelectorAll('.social .contact-icons a');
    if (socialIcons.length > 0) {
        gsap.set(socialIcons, {
            opacity: 0,
            scale: 0,
            rotation: -180
        });
        
        // Delay to ensure they appear after main content
        setTimeout(() => {
            gsap.to(socialIcons, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.5)"
            });
        }, 800);
    }
    
    // 8. Navigation items with elegant entrance
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    if (navItems.length > 0) {
        gsap.from(navItems, {
            opacity: 0,
            y: -20,
            duration: 0.6,
            stagger: 0.08,
            delay: 0.3,
            ease: "power3.out"
        });
    }
    
    // 9. Images with smooth scale effect
    const images = document.querySelectorAll('img:not(.profile img)');
    images.forEach(img => {
        gsap.set(img, {
            opacity: 0,
            scale: 0.95,
            filter: "brightness(0.8)"
        });
        
        // Wait for image to load
        if (img.complete) {
            animateImage(img);
        } else {
            img.addEventListener('load', () => animateImage(img));
        }
    });
    
    function animateImage(img) {
        ScrollTrigger.create({
            trigger: img,
            start: "top 85%",
            once: true,
            onEnter: () => {
                gsap.to(img, {
                    opacity: 1,
                    scale: 1,
                    filter: "brightness(1)",
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    }
    
    // 10. Footer with subtle entrance
    const footer = document.querySelector('footer');
    if (footer) {
        gsap.set(footer, {
            opacity: 0,
            y: 20
        });
        
        ScrollTrigger.create({
            trigger: footer,
            start: "top 95%",
            once: true,
            onEnter: () => {
                gsap.to(footer, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    }
    
    // 11. Special effect for selected papers section
    const selectedPapersSection = document.querySelector('.publications:has(h4:contains("Selected Papers"))');
    if (selectedPapersSection) {
        const heading = selectedPapersSection.querySelector('h4');
        const items = selectedPapersSection.querySelectorAll('li');
        
        if (heading) {
            gsap.set(heading, {
                opacity: 0,
                letterSpacing: "0.2em",
                y: 20
            });
            
            ScrollTrigger.create({
                trigger: heading,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(heading, {
                        opacity: 1,
                        letterSpacing: "0.05em",
                        y: 0,
                        duration: 1,
                        ease: "power3.out"
                    });
                }
            });
        }
    }
    
    // 12. Smooth reveal for any remaining elements
    ScrollTrigger.batch('[data-fade]', {
        start: "top 85%",
        once: true,
        onEnter: batch => {
            gsap.fromTo(batch,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.05,
                    ease: "power2.out"
                }
            );
        }
    });
    
    // Refresh ScrollTrigger after all content is loaded
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
});

// Add smooth animation styles
const smoothStyles = `
    <style>
        /* Ensure smooth rendering */
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* GPU acceleration for animations */
        .publications li,
        .card,
        img,
        h1, h2, h3, h4, h5,
        .profile {
            will-change: transform, opacity;
            transform: translateZ(0);
            backface-visibility: hidden;
        }
        
        /* Prevent layout shift during animations */
        body {
            overflow-x: hidden;
        }
        
        /* Smooth scroll behavior */
        html {
            scroll-behavior: smooth;
        }
        
        /* Ensure elements are hidden initially but not permanently */
        .fade-init {
            opacity: 0;
        }
        
        /* Performance optimization */
        .no-animation {
            animation: none !important;
            transition: none !important;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', smoothStyles);