/**
 * Portfolio Website JavaScript
 * Main script file handling interactions and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions when DOM is fully loaded
    initNavbar();
    initSmoothScroll();
    initProjectFilters();
    initAnimations();
    initContactForm();
    initSkillBars();
    initTypingEffect();
});

/**
 * Navbar functionality - changes on scroll
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Change navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: targetPosition - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Project filtering functionality
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (filterButtons.length === 0 || projectItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 100);
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 100);
                } else {
                    item.classList.remove('visible');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Trigger 'all' filter on page load
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
}

/**
 * Scroll animations using Intersection Observer
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Contact form validation and submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const message = this.querySelector('#message').value.trim();
        const formStatus = this.querySelector('.form-status');
        
        if (!name || !email || !message) {
            if (formStatus) {
                formStatus.textContent = 'Please fill in all fields';
                formStatus.classList.add('error');
                
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.classList.remove('error');
                }, 3000);
            }
            return;
        }
        
        if (!isValidEmail(email)) {
            if (formStatus) {
                formStatus.textContent = 'Please enter a valid email address';
                formStatus.classList.add('error');
                
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.classList.remove('error');
                }, 3000);
            }
            return;
        }
        
        // In a real implementation, you would send the form data to a server
        // For demonstration, we'll just show a success message
        if (formStatus) {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.classList.add('success');
            
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.classList.remove('success');
                this.reset();
            }, 3000);
        }
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

/**
 * Initialize skill bars with animation
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const skillLevel = skillBar.getAttribute('data-progress') || '0';
                
                skillBar.style.width = `${skillLevel}%`;
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.3
    });
    
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
}

/**
 * Typing effect for hero section
 */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    const phrases = typingElement.getAttribute('data-phrases')?.split(',') || 
                   ['Developer', 'Designer', 'Freelancer'];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex].trim();
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at the end of typing
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 300;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

/**
 * Portfolio image modal/lightbox
 */
function initPortfolioModal() {
    const projectImages = document.querySelectorAll('.project-image');
    const modal = document.querySelector('.portfolio-modal');
    const modalImg = document.querySelector('.modal-img');
    const closeModal = document.querySelector('.close-modal');
    
    if (!modal || !modalImg || projectImages.length === 0) return;
    
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

/**
 * Dark mode toggle functionality
 */
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (!darkModeToggle) return;
    
    // Check for saved theme preference or use prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('active');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('active');
        
        // Save theme preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// Call these functions after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    initPortfolioModal();
    initDarkMode();
});