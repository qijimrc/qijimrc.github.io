// Performance Optimizations and Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Optimize scroll performance
    let scrollRAF;
    function optimizedScroll() {
        if (scrollRAF) {
            cancelAnimationFrame(scrollRAF);
        }
        
        scrollRAF = requestAnimationFrame(() => {
            // Update scroll-based animations here
            updateScrollProgress();
            updateParallaxElements();
        });
    }
    
    window.addEventListener('scroll', throttle(optimizedScroll, 16), { passive: true });
    
    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    function updateScrollProgress() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        gsap.set(progressBar, { width: `${scrolled}%` });
    }
    
    // Optimized parallax scrolling
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    function updateParallaxElements() {
        const scrolled = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            
            gsap.set(element, {
                transform: `translateY(${yPos}px)`,
                willChange: 'transform'
            });
        });
    }
    
    // Intersection Observer for lazy loading and animations
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
    };
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add visible class for CSS animations
                element.classList.add('is-visible');
                
                // Trigger custom animations based on data attributes
                if (element.dataset.animation) {
                    triggerAnimation(element, element.dataset.animation);
                }
                
                // Stop observing once animated
                if (!element.dataset.repeatAnimation) {
                    elementObserver.unobserve(element);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements with animation attributes
    document.querySelectorAll('[data-animation]').forEach(element => {
        elementObserver.observe(element);
    });
    
    // Custom animation triggers
    function triggerAnimation(element, animationType) {
        switch(animationType) {
            case 'fadeIn':
                gsap.from(element, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                });
                break;
            case 'slideUp':
                gsap.from(element, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
                break;
            case 'slideIn':
                gsap.from(element, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
                break;
            case 'zoomIn':
                gsap.from(element, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });
                break;
            case 'rotate':
                gsap.from(element, {
                    rotation: 180,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
                break;
        }
    }
    
    // Smooth anchor scrolling with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offset = 80; // Navbar height
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                
                gsap.to(window, {
                    scrollTo: {
                        y: targetPosition,
                        autoKill: false
                    },
                    duration: 1,
                    ease: "power3.inOut"
                });
            }
        });
    });
    
    // Prefetch links on hover for faster navigation
    const prefetchedUrls = new Set();
    
    document.querySelectorAll('a[href^="/"], a[href^="./"]').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            
            if (!prefetchedUrls.has(href)) {
                const prefetchLink = document.createElement('link');
                prefetchLink.rel = 'prefetch';
                prefetchLink.href = href;
                document.head.appendChild(prefetchLink);
                prefetchedUrls.add(href);
            }
        });
    });
    
    // Optimize image loading
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }
    
    // Request idle callback for non-critical tasks
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Load non-critical resources
            loadDeferredStyles();
            initializeAnalytics();
        });
    } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
            loadDeferredStyles();
            initializeAnalytics();
        }, 1);
    }
    
    function loadDeferredStyles() {
        // Load any deferred stylesheets
        const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
        deferredStyles.forEach(link => {
            link.rel = 'stylesheet';
        });
    }
    
    function initializeAnalytics() {
        // Initialize any analytics or tracking scripts
        console.log('Analytics initialized');
    }
    
    // Memory cleanup on page unload
    window.addEventListener('beforeunload', () => {
        // Cancel any pending animations
        gsap.killTweensOf('*');
        
        // Clear observers
        if (elementObserver) {
            elementObserver.disconnect();
        }
        
        // Cancel animation frames
        if (scrollRAF) {
            cancelAnimationFrame(scrollRAF);
        }
    });
});

// Add performance styles
const performanceStyles = `
    <style>
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, 
                var(--global-theme-color) 0%, 
                var(--global-hover-color) 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        }
        
        [data-animation] {
            will-change: transform, opacity;
        }
        
        .is-visible {
            animation: contentReveal 0.6s ease forwards;
        }
        
        @keyframes contentReveal {
            from {
                opacity: 0.8;
            }
            to {
                opacity: 1;
            }
        }
        
        /* Optimize rendering */
        .publications li,
        .card,
        img {
            will-change: auto;
            transform: translateZ(0);
            backface-visibility: hidden;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', performanceStyles);