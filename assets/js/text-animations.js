// Advanced Text Animations and Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Split text animation for headings
    function splitText(element) {
        const text = element.textContent;
        const words = text.split(' ');
        element.innerHTML = '';
        
        words.forEach((word, i) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            wordSpan.style.display = 'inline-block';
            
            [...word].forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.className = 'char';
                charSpan.textContent = char;
                charSpan.style.display = 'inline-block';
                wordSpan.appendChild(charSpan);
            });
            
            element.appendChild(wordSpan);
            if (i < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        });
        
        return element.querySelectorAll('.char');
    }
    
    // Simple fade in for main heading instead of split text
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
        gsap.from(mainHeading, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3
        });
    }
    
    // Highlight important text on hover
    document.querySelectorAll('em, strong').forEach(elem => {
        elem.addEventListener('mouseenter', function() {
            gsap.to(this, {
                color: 'var(--global-theme-color)',
                scale: 1.05,
                duration: 0.2
            });
        });
        
        elem.addEventListener('mouseleave', function() {
            gsap.to(this, {
                color: 'inherit',
                scale: 1,
                duration: 0.2
            });
        });
    });
    
    // Simple text reveal without SplitType library
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from(entry.target, {
                    opacity: 0,
                    y: 10,
                    duration: 0.5,
                    ease: "power2.out"
                });
                
                textObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Apply to selected paragraphs
    document.querySelectorAll('.clearfix p, .post-description').forEach(p => {
        if (p.textContent && p.textContent.length > 50) {
            textObserver.observe(p);
        }
    });
    
    // Animated counter for numbers
    function animateValue(element, start, end, duration) {
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    // Find and animate numbers in text
    document.querySelectorAll('.news td, .publications .year').forEach(elem => {
        const text = elem.textContent;
        const yearMatch = text.match(/20\d{2}/);
        
        if (yearMatch) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const year = parseInt(yearMatch[0]);
                        const tempElem = document.createElement('span');
                        tempElem.textContent = '2000';
                        elem.innerHTML = text.replace(yearMatch[0], tempElem.outerHTML);
                        
                        setTimeout(() => {
                            animateValue(elem.querySelector('span'), 2000, year, 1000);
                        }, 300);
                        
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(elem);
        }
    });
    
    // Glitch effect for special text
    function createGlitchEffect(element) {
        const text = element.textContent;
        element.dataset.text = text;
        element.classList.add('glitch');
        
        element.addEventListener('mouseenter', () => {
            element.classList.add('glitch-active');
        });
        
        element.addEventListener('mouseleave', () => {
            setTimeout(() => {
                element.classList.remove('glitch-active');
            }, 300);
        });
    }
    
    // Apply glitch to specific elements (optional)
    document.querySelectorAll('.navbar-brand').forEach(createGlitchEffect);
    
    // Typing effect for bio sections
    const bioText = document.querySelector('.clearfix');
    if (bioText) {
        const paragraphs = bioText.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            p.style.opacity = '0';
            
            ScrollTrigger.create({
                trigger: p,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(p, {
                        opacity: 1,
                        duration: 0.5,
                        delay: index * 0.2
                    });
                }
            });
        });
    }
});

// Add text animation styles
const textStyles = `
    <style>
        .char {
            transform-origin: 50% 100%;
            display: inline-block;
        }
        
        .word {
            display: inline-block;
            margin-right: 0.25em;
        }
        
        .glitch {
            position: relative;
            font-weight: bold;
        }
        
        .glitch::before,
        .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        
        .glitch.glitch-active::before {
            animation: glitch-1 0.3s linear;
            color: #ff00ff;
            z-index: -1;
        }
        
        .glitch.glitch-active::after {
            animation: glitch-2 0.3s linear;
            color: #00ffff;
            z-index: -2;
        }
        
        @keyframes glitch-1 {
            0%, 100% {
                opacity: 0;
                transform: translate(0);
            }
            20% {
                opacity: 0.8;
                transform: translate(-1px, -1px);
            }
            40% {
                opacity: 0.8;
                transform: translate(1px, 1px);
            }
            60% {
                opacity: 0.8;
                transform: translate(-1px, 1px);
            }
            80% {
                opacity: 0.8;
                transform: translate(1px, -1px);
            }
        }
        
        @keyframes glitch-2 {
            0%, 100% {
                opacity: 0;
                transform: translate(0);
            }
            20% {
                opacity: 0.8;
                transform: translate(1px, 1px);
            }
            40% {
                opacity: 0.8;
                transform: translate(-1px, -1px);
            }
            60% {
                opacity: 0.8;
                transform: translate(1px, -1px);
            }
            80% {
                opacity: 0.8;
                transform: translate(-1px, 1px);
            }
        }
        
        .split-line {
            display: block;
            position: relative;
            overflow: hidden;
        }
        
        .animated-number {
            font-weight: bold;
            color: var(--global-theme-color);
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', textStyles);