// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Sticky Header Logic
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Global Intersection Observer for scroll animations
const globalObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          const el = entry.target;
          // Apply staggered delay if present
          const delay = el.dataset.delay || 0;
          setTimeout(() => el.classList.add('visible'), delay);
          globalObserver.unobserve(el);
      }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Stagger delays for grid items automatically if they have specific classes
  document.querySelectorAll('.expertise-grid > div, .args-grid > div').forEach((card, i) => {
      if (!card.dataset.delay) {
        card.dataset.delay = i * 120;
      }
  });

  // Observe all elements with .observe-me
  document.querySelectorAll('.observe-me').forEach(el => globalObserver.observe(el));
});

console.log('SV Glehn Website Loaded - Premium Style Activated');
