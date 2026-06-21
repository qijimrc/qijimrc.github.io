// Lightweight native hints for images
document.addEventListener('DOMContentLoaded', function () {
  const images = Array.from(document.querySelectorAll('img'));

  // Mark non-critical images as lazy and async decode
  images.forEach((img, index) => {
    // Respect explicit opt-outs
    if (img.hasAttribute('data-no-lazy')) return;

    // Profile or first image: keep default priority
    const isProfile = img.closest('.profile');
    const isLikelyHero = index === 0 || img.width > 600;

    if (!isProfile && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }

    // Give a small priority hint to obvious hero/profile image
    if ((isProfile || isLikelyHero) && !img.hasAttribute('fetchpriority')) {
      img.setAttribute('fetchpriority', 'high');
    }
  });
});

