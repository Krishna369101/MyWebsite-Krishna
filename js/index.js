 // Header scroll effect
 window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const backToTop = document.querySelector('.back-to-top');
  
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
  
  if (window.scrollY > 300) {
      backToTop.classList.add('visible');
  } else {
      backToTop.classList.remove('visible');
  }
  
  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < window.innerHeight - 100) {
          item.classList.add('visible');
      }
  });
});
// DevOps tools icon animation in hero background
document.addEventListener('DOMContentLoaded', function() {
  const heroBg = document.getElementById('hero-bg');
  const icons = [
      '🐳', // Docker
      '☸️', // Kubernetes
      '🔄', // CI/CD
      '☁️', // Cloud
      '🔧', // Tools
      '📊', // Monitoring
      '🚀', // Deployment
      '⚙️', // Automation
      '🔒', // Security
      '📦', // Containers
      '🔍', // Testing
      '🔌', // Integration
      '🌱', // Seedling/Growth
      '🍃', // Leaf
      '🌿', // Plant/Herb
      '🌲', // Tree/Sustainability
      '🌳', // Mature Tree/Established System
      '🌴', // Palm Tree/Tropical Development
      '🍀', // Four-leaf Clover/Lucky Solutions
      '🌿', // Herb/Fresh Approach
      '🌾', // Rice/Cultivation
      '🌷', // Tulip/Clean Design
      '🌵', // Cactus/Resilient Systems
      '🌊', // Wave/Continuous Deployment
      '⚙️🌱', // Gear with seedling (represented by two emojis)
      '🛠️🌿', // Tools with plant (represented by two emojis)
  ];
  
  // Create DevOps icon elements
  for (let i = 0; i < 20; i++) {
      const icon = document.createElement('div');
      icon.classList.add('icon');
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];
      
      // Random positioning
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.fontSize = `${Math.random() * 3 + 2}rem`;
      
      // Random animation duration and delay
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      icon.style.animationDuration = `${duration}s`;
      icon.style.animationDelay = `${delay}s`;
      
      heroBg.appendChild(icon);
  }
  
  // Add Jenkins, Docker, and other DevOps logos as funky background elements
  const addDevOpsLogo = (name, x, y, size, rotation) => {
      const logo = document.createElement('div');
      logo.classList.add('icon');
      logo.style.left = `${x}%`;
      logo.style.top = `${y}%`;
      logo.style.fontSize = `${size}rem`;
      logo.style.transform = `rotate(${rotation}deg)`;
      logo.style.animationDuration = `${Math.random() * 10 + 10}s`;
      logo.style.animationDelay = `${Math.random() * 5}s`;
      logo.textContent = name;
      heroBg.appendChild(logo);
  };
  
  // Add some specific DevOps logos
  addDevOpsLogo('🐳', 15, 20, 5, 10); // Docker
  addDevOpsLogo('☸️', 75, 40, 4, -15); // Kubernetes
  addDevOpsLogo('⚙️', 60, 70, 6, 5); // Jenkins/Automation
  addDevOpsLogo('☁️', 25, 60, 5, -5); // Cloud
  addDevOpsLogo('🚀', 85, 15, 4, 20); // Deployment
  addDevOpsLogo('🍃', 45, 60, 10, 10);//Herb/Fresh Approach
  addDevOpsLogo('🌿', 35, 20, 5, 10); // fresh leaf
  
  // Animate on scroll
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.project-card, .section-title, .about-content, .contact-content');
      
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;
          const isVisible = elementTop < window.innerHeight && elementBottom > 0;
          
          if (isVisible) {
              element.style.animation = 'fadeIn 0.8s ease forwards';
          }
      });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Check if elements exist to prevent errors
    if (!burger || !nav || !navLinks.length) {
        console.error('Navigation elements not found');
        return;
    }
    
    // Toggle navigation function
    const toggleNav = () => {
        // Toggle nav menu visibility
        nav.classList.toggle('nav-active');
        
        // Animate links with delay
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        
        // Toggle burger animation
        burger.classList.toggle('toggle');
    };
    
    // Click event for burger menu
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNav();
    });
    
    // Close menu when clicking anywhere else on the page
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            toggleNav();
        }
    });
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });
    
    // Extra: Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('nav-active')) {
            toggleNav();
        }
    });
});