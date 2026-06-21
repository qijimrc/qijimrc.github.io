// Optimized Animations - Performance-focused implementation
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Performance optimizations
    gsap.config({
        force3D: true,
        nullTargetWarn: false
    });
    
    // Batch ScrollTriggers for better performance
    ScrollTrigger.batch([
        'h1, h2, h3, h4, h5',
        'p',
        '.publications li',
        '.card',
        '.news td',
        '.profile'
    ].join(', '), {
        onEnter: elements => {
            gsap.fromTo(elements, 
                {
                    opacity: 0,
                    y: 10
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.02,
                    ease: "power2.out",
                    overwrite: 'auto'
                }
            );
        },
        once: true,
        start: "top 90%"
    });
    
    // Navbar - immediate visibility
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
    }
    
    // Optimized image loading and effects
    const images = document.querySelectorAll('img');
    
    // Use Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load image if needed
                if (img.dataset.src && !img.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                // Simple fade in
                if (!img.classList.contains('loaded')) {
                    gsap.fromTo(img, 
                        { 
                            opacity: 0,
                            scale: 0.98
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out",
                            onComplete: () => {
                                img.classList.add('loaded');
                            }
                        }
                    );
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px',
        threshold: 0.01
    });
    
    // Apply to all images
    images.forEach(img => {
        // Skip already loaded images
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            imageObserver.observe(img);
        }
        
        // Hover effect: remove shake globally, keep a subtle tilt only
        let hoverAnimation = null;

        img.addEventListener('mouseenter', function() {
            if (hoverAnimation) hoverAnimation.kill();
            const isAvatar = this.classList && this.classList.contains('student-avatar');
            const isProfile = (this.classList && this.classList.contains('profile-image')) || (this.closest && this.closest('.profile'));
            if (isAvatar || isProfile) {
                // Let CSS handle avatar hover (lift + shadow); avoid JS transforms to prevent conflicts
                return;
            }
            hoverAnimation = gsap.to(this, {
                rotation: 1.0,
                duration: 0.03,
                ease: "power2.out"
            });
        });

        img.addEventListener('mouseleave', function() {
            if (hoverAnimation) hoverAnimation.kill();
            const isAvatar = this.classList && this.classList.contains('student-avatar');
            const isProfile = (this.classList && this.classList.contains('profile-image')) || (this.closest && this.closest('.profile'));
            if (isAvatar || isProfile) return; // CSS will reset; don't override with inline transforms
            gsap.to(this, { x: 0, rotation: 0, duration: 0.024, ease: "power2.out" });
        });
    });
    
    // Publication list stagger animation
    ScrollTrigger.batch('.publications li', {
        onEnter: elements => {
            gsap.fromTo(elements,
                {
                    opacity: 0,
                    x: -10
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    stagger: 0.015,
                    ease: "power2.out"
                }
            );
        },
        once: true,
        start: "top 85%"
    });
    
    // Optimize ScrollTrigger refresh
    ScrollTrigger.refresh(true);
    
    // Debounced resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
    
    // Ensure everything is visible after load (fallback)
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
                if (!el.classList.contains('loaded')) {
                    el.style.opacity = '1';
                }
            });
        }, 1000);
    });
});

// Optimized styles
const optimizedStyles = `
    <style>
        /* GPU acceleration for smooth animations */
        img, .card, .publications li, h1, h2, h3, h4, h5, p {
            will-change: transform, opacity;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            transform: translateZ(0);
        }
        
        /* Prevent layout shift */
        img {
            display: block;
            max-width: 100%;
            height: auto;
        }
        
        /* Smooth base transitions for common elements (avoid global *) */
        img, .card, .publications li, h1, h2, h3, h4, h5, p, a, button {
            transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        
        /* Navbar always visible */
        .navbar {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Loaded state */
        .loaded {
            opacity: 1 !important;
        }
        
        /* Content visibility for long lists */
        .publications, .news {
            content-visibility: auto;
            contain-intrinsic-size: 1px 1000px; /* reserve space to avoid jump */
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', optimizedStyles);
