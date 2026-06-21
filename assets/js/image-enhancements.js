// Image Loading and Enhancement Effects
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images with fade-in effect
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                // Animate image appearance
                img.onload = () => {
                    gsap.to(img, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                    img.classList.add('loaded');
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    images.forEach(img => {
        // Only apply effects to images that are not already loaded
        if (!img.complete && !img.src) {
            gsap.set(img, {
                opacity: 0,
                scale: 0.95
            });
        } else {
            // Image already loaded, ensure it's visible
            img.style.opacity = '1';
            img.classList.add('loaded');
        }
        imageObserver.observe(img);
        
        // Add subtle tilt effect on hover for all images
        img.addEventListener('mouseenter', function() {
            // Gentle tilt animation
            gsap.to(this, {
                rotation: 3,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        img.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotation: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Lightbox disabled to prevent accidental clicks
    // Can be re-enabled if needed
    
    function createLightbox(img) {
        const lightbox = document.createElement('div');
        lightbox.className = 'image-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt || ''}">
                <span class="lightbox-close">&times;</span>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // Animate lightbox opening
        gsap.from(lightbox, {
            opacity: 0,
            duration: 0.3
        });
        
        gsap.from(lightbox.querySelector('img'), {
            scale: 0.8,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
        
        // Close lightbox
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                gsap.to(lightbox, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => lightbox.remove()
                });
            }
        });
        
        // ESC key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.querySelector('.image-lightbox')) {
                const lb = document.querySelector('.image-lightbox');
                gsap.to(lb, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => lb.remove()
                });
            }
        });
    }
    
    // Add image gallery effects for publication previews
    const pubPreviews = document.querySelectorAll('.publications .preview img');
    pubPreviews.forEach((img, index) => {
        // Staggered reveal on scroll
        ScrollTrigger.create({
            trigger: img,
            start: "top 85%",
            onEnter: () => {
                gsap.from(img, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            }
        });
    });
});

// Add lightbox styles
const lightboxStyles = `
    <style>
        .image-lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10001;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: zoom-out;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-content img {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 4px;
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 40px;
            font-weight: 100;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .lightbox-close:hover {
            transform: rotate(90deg);
        }
        
        img[data-src] {
            filter: blur(5px);
            transition: filter 0.3s;
        }
        
        img.loaded {
            filter: blur(0);
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', lightboxStyles);