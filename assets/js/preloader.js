// Preloader and Page Load Animations
document.addEventListener('DOMContentLoaded', function() {
    // Skip preloader if page is already loaded or cached
    if (document.readyState === 'complete') {
        return;
    }
    
    // Create preloader HTML
    const preloaderHTML = `
        <div id="preloader" style="pointer-events: none;">
            <div class="loader-container">
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
            </div>
            <div class="loader-text">Loading...</div>
        </div>
    `;
    
    // Insert preloader at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
    
    // Preloader animation
    const preloader = document.getElementById('preloader');
    const dots = document.querySelectorAll('.loader-dot');
    
    // Animate dots
    gsap.timeline({ repeat: -1 })
        .to(dots, {
            y: -20,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out"
        })
        .to(dots, {
            y: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.in"
        });
    
    // Hide preloader quickly to not block content
    window.addEventListener('load', function() {
        if (preloader) {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    preloader.style.display = 'none';
                }
            });
        }
    });
    
    // RevealPage removed to prevent layout issues
});

// Add preloader styles
const preloaderStyles = `
    <style>
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--global-bg-color);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .loader-container {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .loader-dot {
            width: 12px;
            height: 12px;
            background: var(--global-theme-color);
            border-radius: 50%;
        }
        
        .loader-text {
            font-size: 14px;
            color: var(--global-text-color);
            opacity: 0.7;
            font-family: monospace;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', preloaderStyles);