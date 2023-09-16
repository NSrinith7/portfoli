// Add a smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
  
  // Add a lightbox to all images in the portfolio section
  const portfolioImages = document.querySelectorAll('#projects img');
  portfolioImages.forEach(image => {
    image.addEventListener('click', function() {
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
  
      const lightboxImage = document.createElement('img');
      lightboxImage.src = this.src;
      lightboxImage.alt = this.alt;
  
      lightbox.appendChild(lightboxImage);
      document.body.appendChild(lightbox);
  
      lightbox.addEventListener('click', function() {
        lightbox.remove();
      });
    });
  });
  