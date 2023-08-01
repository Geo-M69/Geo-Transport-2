// Function to handle smooth scrolling
function smoothScroll(target) {
  const targetSection = document.querySelector(target);
  if (!targetSection) return; // Return if the target section doesn't exist

  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // Adjust the duration (in milliseconds) as needed

  let start = null;

  function animationStep(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) {
      requestAnimationFrame(animationStep);
    }
  }

  // Easing function for smooth scrolling
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  // Start the animation
  requestAnimationFrame(animationStep);
}
