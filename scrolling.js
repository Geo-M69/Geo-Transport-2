// Function to handle smooth scrolling
function smoothScroll(target) {
  const targetSection = document.querySelector(target);
  if (!targetSection) return; // Return if the target section doesn't exist

  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // Adjust the duration (in milliseconds) as needed

  function animationStep(timestamp) {
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);

    window.scrollTo(0, startPosition + distance * Math.easeInOutCubic(percentage));

    if (progress < duration) {
      requestAnimationFrame(animationStep);
    }
  }

  // Easing function for smooth scrolling (easeInOutCubic)
  Math.easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  let start = null;
  // Set the start timestamp before calling requestAnimationFrame
  start = window.performance.now();

  // Start the animation
  requestAnimationFrame(animationStep);
}
