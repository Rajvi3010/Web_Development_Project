let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideIndex) {
  // Hide all slides
  for (let i = 1; i <= totalSlides; i++) {
    document.getElementById(`slide${i}`).style.display = 'none';
  }
  // Show the current slide
  document.getElementById(`slide${slideIndex}`).style.display = 'block';
}

// Auto-slide every 3 seconds
setInterval(() => {
  currentSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
  showSlide(currentSlide);
}, 3000);
