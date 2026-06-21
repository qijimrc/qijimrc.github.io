// Simple Preloader - minimal impact on layout
window.addEventListener('load', function() {
    // Remove any existing preloader if present
    const existingPreloader = document.getElementById('preloader');
    if (existingPreloader) {
        existingPreloader.style.display = 'none';
    }
    
    // Ensure all content is visible
    document.body.style.opacity = '1';
});