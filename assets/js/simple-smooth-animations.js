// Simple and Smooth Fade Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Simple configuration
    const fadeConfig = {
        distance: 15,      // pixels to move (reduced for subtlety)
        duration: 0.5,     // animation duration
        stagger: 0.03,     // delay between elements (faster)
        ease: "power1.out" // smoother easing
    };
    
    // 1. Simple fade up for all main elements
    const elementsToAnimate = [
        'h1, h2, h3, h4, h5',
        'p',
        '.publications li',
        '.card',
        '.news td',
        'img',
        '.profile'
    ];
    
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach(el => {
            // Set initial state
            gsap.set(el, {
                opacity: 0,
                y: fadeConfig.distance
            });
            
            // Create scroll trigger
            ScrollTrigger.create({
                trigger: el,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(el, {
                        opacity: 1,
                        y: 0,
                        duration: fadeConfig.duration,
                        ease: fadeConfig.ease
                    });
                }
            });
        });
    });
    
    // 2. Stagger animation for lists
    const lists = document.querySelectorAll('.publications');
    lists.forEach(list => {
        const items = list.querySelectorAll('li');
        
        gsap.set(items, {
            opacity: 0,
            y: fadeConfig.distance
        });
        
        ScrollTrigger.create({
            trigger: list,
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.to(items, {
                    opacity: 1,
                    y: 0,
                    duration: fadeConfig.duration,
                    stagger: fadeConfig.stagger,
                    ease: fadeConfig.ease
                });
            }
        });
    });
    
    // 3. Navigation immediate show (no delay)
    gsap.set('.navbar', {
        opacity: 1,
        y: 0
    });
    
    // 4. Profile image hover effect (very subtle shake)
    const profileImg = document.querySelector('.profile img');
    if (profileImg) {
        // Remove the hover effect since it's now handled in image-enhancements.js
        // The universal subtle shake will apply to all images including profile
    }
    
    // 4. Ensure everything is visible as fallback
    window.addEventListener('load', () => {
        // After page loads, ensure all content is visible
        setTimeout(() => {
            document.querySelectorAll('*').forEach(el => {
                if (el.style.opacity === '0') {
                    el.style.opacity = '1';
                }
            });
        }, 2000); // 2 second timeout
    });
});

// Simple styles
const simpleStyles = `
    <style>
        /* Smooth transitions */
        * {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        /* Ensure visibility */
        body {
            opacity: 1;
        }
        
        /* Remove complex animations */
        @keyframes simpleFade {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Prevent content jumping */
        .publications li,
        .card,
        p, h1, h2, h3, h4, h5 {
            will-change: transform, opacity;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', simpleStyles);