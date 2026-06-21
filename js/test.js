// path/to/animation.js

document.addEventListener('DOMContentLoaded', function() {
  // Get the element you want to animate
  const element = document.getElementById('my-element');

  // Define the animation using GSAP
  gsap.from(element, {
    y: "100%", // start the element 100% from the bottom of the page
    duration: 0.5, // 1 second
    ease: "power1.inOut",
    overwrite: "auto"
  });
});