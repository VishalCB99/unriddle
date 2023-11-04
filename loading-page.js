// JavaScript to hide the loading animation with a delay
window.addEventListener('load', () => {
  const loadingContainer = document.querySelector('.loading-container');
  const content = document.querySelector('.content');

  // Delay for 2 seconds (2000 milliseconds) before hiding the loading animation
  setTimeout(() => {
      loadingContainer.style.display = 'none'; // Hide the loading animation
      content.style.display = 'block'; // Show the content
  }, 1200); // Adjust the delay time (in milliseconds) as needed
});






const animatedHeading = document.getElementById('animated-heading');

// Add "Zoom In" animation
animatedHeading.classList.add('animate__zoomIn');

// Wait for the "Zoom In" animation to complete, then remove it and add "Zoom Out"
animatedHeading.addEventListener('animationend', function () {
    animatedHeading.classList.remove('animate__zoomIn');
    animatedHeading.classList.add('animate__zoomOut');
});










