function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// Fallback for browsers that don't support animation-timeline
if (!CSS.supports('animation-timeline', 'scroll()')) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        entry.target.style.filter = 'none';
      } else {
        // Optional: reset if needed
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section, .product-card, .testimonial-card, .feature-card, .gallery-item, .contact-card, img, p').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}
