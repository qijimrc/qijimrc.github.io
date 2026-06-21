// Elegant Enhancements for Portfolio Website
// Author: Enhanced with advanced web animations

document.addEventListener('DOMContentLoaded', function() {
    
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth page load animation - removed to prevent layout issues
    
    // Animate navigation bar on load
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    });
    
    // Animate profile image with subtle float effect
    if (document.querySelector('.profile img')) {
        gsap.to('.profile img', {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        // Add subtle rotation on hover
        document.querySelector('.profile img').addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        document.querySelector('.profile img').addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
    
    // Subtle fade-in for headings
    gsap.utils.toArray('h1, h2, h3, h4, h5').forEach((heading, i) => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                once: true
            },
            opacity: 0,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power2.out"
        });
    });
    
    // Subtle animation for paragraphs
    gsap.utils.toArray('p').forEach((elem, i) => {
        // Only animate if not already visible
        if (elem.offsetParent !== null) {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    once: true
                },
                opacity: 0,
                duration: 0.5,
                delay: i * 0.02,
                ease: "power2.out"
            });
        }
    });
    
    // Simple fade-in for publication cards
    gsap.utils.toArray('.publications li').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
            },
            opacity: 0,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power2.out"
        });
    });
    
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
    
    // Parallax effect disabled to maintain layout stability
    
    // Custom cursor effect - disabled to maintain standard cursor functionality
    // This was causing usability issues
    
    // Enhanced link hover effects - simplified without custom cursor
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.02,
                duration: 0.2
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                duration: 0.2
            });
        });
    });
    
    // Button press effect
    document.querySelectorAll('.btn, button').forEach(btn => {
        btn.addEventListener('mousedown', function() {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1
            });
        });
        
        btn.addEventListener('mouseup', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.1
            });
        });
    });
    
    // Text reveal animation for news items
    gsap.utils.toArray('.news td').forEach((newsItem, i) => {
        gsap.from(newsItem, {
            scrollTrigger: {
                trigger: newsItem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: -20,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });
    
    // Social icons animation
    gsap.from('.social .contact-icons a', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.7)"
    });
    
    // Add magnetic effect to social icons
    document.querySelectorAll('.social .contact-icons a').forEach(icon => {
        let bounds;
        
        icon.addEventListener('mouseenter', function() {
            bounds = this.getBoundingClientRect();
        });
        
        icon.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.left;
            const topY = mouseY - bounds.top;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            
            gsap.to(this, {
                x: center.x * 0.3,
                y: center.y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        icon.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Typewriter effect disabled to maintain content integrity
    
    // Add subtle gradient animation to background
    const gradientBg = document.createElement('div');
    gradientBg.className = 'gradient-bg';
    document.body.appendChild(gradientBg);
    
    gsap.to(gradientBg, {
        backgroundPosition: "200% 200%",
        duration: 20,
        repeat: -1,
        ease: "none"
    });
    
    // Page transition effect
    document.querySelectorAll('a:not([href^="#"])').forEach(link => {
        if (!link.getAttribute('href').startsWith('http') && !link.getAttribute('href').startsWith('mailto')) {
            link.addEventListener('click', function(e) {
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    
                    gsap.to('body', {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            window.location.href = href;
                        }
                    });
                }
            });
        }
    });
    
    // Reveal animation for cards
    gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out"
        });
        
        // 3D tilt effect on hover
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            gsap.to(this, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.3,
                ease: "power2.out",
                transformPerspective: 1000
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Progressive blur on scroll for header
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "+=500",
        scrub: true,
        onUpdate: (self) => {
            const blur = self.progress * 5;
            const opacity = 1 - (self.progress * 0.3);
            gsap.set('.navbar', {
                backdropFilter: `blur(${blur}px)`,
                opacity: opacity
            });
        }
    });
});

// Lenis smooth scroll integration (optional but highly recommended)
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);
    
    // Connect GSAP ScrollTrigger with Lenis
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
}