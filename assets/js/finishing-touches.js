// Finishing Touches and Polish Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth reveal for footer
    const footer = document.querySelector('footer');
    if (footer) {
        ScrollTrigger.create({
            trigger: footer,
            start: "top 90%",
            onEnter: () => {
                gsap.from(footer, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    }
    
    // Add subtle animation to email links
    document.querySelectorAll('a[href^="mailto"]').forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                letterSpacing: '0.05em',
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                letterSpacing: '0',
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Enhanced table hover effects
    document.querySelectorAll('table tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            gsap.to(this, {
                backgroundColor: 'rgba(var(--global-theme-color-rgb), 0.05)',
                duration: 0.3
            });
        });
        
        row.addEventListener('mouseleave', function() {
            gsap.to(this, {
                backgroundColor: 'transparent',
                duration: 0.3
            });
        });
    });
    
    // Smooth color transition for theme switching
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => {
                document.documentElement.style.transition = '';
            }, 500);
        });
    }
    
    // Add breathing effect to important buttons
    document.querySelectorAll('.btn-primary, .btn-important').forEach(btn => {
        gsap.to(btn, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });
    
    // Subtle background particles effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'background-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (20 + Math.random() * 20) + 's';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 40000);
    }
    
    // Create initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createParticle(), i * 2000);
    }
    
    // Continue creating particles
    setInterval(createParticle, 8000);
    
    // Smooth resize handling
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });
    
    // Add ripple effect on click
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.classList.contains('btn')) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            
            e.target.appendChild(ripple);
            
            gsap.fromTo(ripple, {
                scale: 0,
                opacity: 1
            }, {
                scale: 4,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => ripple.remove()
            });
        }
    });
    
    // Enhanced focus indicators
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Smooth exit animation on navigation
    window.addEventListener('beforeunload', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
    });
    
    // Console Easter egg
    console.log('%c✨ Welcome to an elegantly enhanced portfolio! ✨', 
                'font-size: 20px; color: #4A90E2; font-weight: bold; ' +
                'text-shadow: 2px 2px 4px rgba(0,0,0,0.1);');
    console.log('%cCrafted with GSAP animations and modern web techniques', 
                'font-size: 14px; color: #666; font-style: italic;');
});

// Add finishing touch styles
const finishingStyles = `
    <style>
        /* Background particles */
        .background-particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--global-theme-color);
            opacity: 0.1;
            border-radius: 50%;
            pointer-events: none;
            animation: floatUp 20s linear infinite;
            z-index: -1;
        }
        
        @keyframes floatUp {
            from {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.1;
            }
            90% {
                opacity: 0.1;
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        /* Ripple effect */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            pointer-events: none;
            width: 20px;
            height: 20px;
        }
        
        /* Stop animations during resize */
        .resize-animation-stopper * {
            animation: none !important;
            transition: none !important;
        }
        
        /* Enhanced keyboard navigation */
        .keyboard-navigation *:focus {
            outline: 2px solid var(--global-theme-color);
            outline-offset: 2px;
        }
        
        /* Polish for various elements */
        ::placeholder {
            opacity: 0.5;
            transition: opacity 0.3s ease;
        }
        
        input:focus::placeholder,
        textarea:focus::placeholder {
            opacity: 0.3;
        }
        
        /* Smooth link transitions */
        a {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced blockquote */
        blockquote {
            position: relative;
            padding-left: 2rem;
            border-left: 3px solid var(--global-theme-color);
            transition: all 0.3s ease;
        }
        
        blockquote:hover {
            border-left-width: 5px;
            padding-left: 2.2rem;
        }
        
        /* Code block enhancements */
        pre {
            position: relative;
            overflow: hidden;
        }
        
        pre::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(var(--global-theme-color-rgb), 0.05) 50%, 
                transparent 100%);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }
        
        pre:hover::before {
            transform: translateX(100%);
        }
        
        /* Final polish */
        body {
            overflow-x: hidden;
            position: relative;
        }
        
        /* Smooth transitions for all elements */
        * {
            transition: color 0.3s ease, 
                        background-color 0.3s ease, 
                        border-color 0.3s ease;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', finishingStyles);