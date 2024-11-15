
    // Wait until the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        const footer = document.querySelector('footer');
        
        // Listen for the scroll event
        window.addEventListener('scroll', function() {
            // Check the scroll position
            if (window.scrollY > 300) { // Show footer when scrolled 300px or more
                footer.style.bottom = '0'; // Slide footer in
            } else {
                footer.style.bottom = '-100px'; // Hide footer when scrolled to the top
            }
        });
    }
