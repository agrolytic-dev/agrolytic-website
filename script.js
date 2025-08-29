// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = 70; // Height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Consent checkbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const consentCheck = document.getElementById('consentCheck');
    const accessButton = document.getElementById('accessButton');

    if (consentCheck && accessButton) {
        consentCheck.addEventListener('change', function() {
            accessButton.disabled = !this.checked;
            
            if (this.checked) {
                accessButton.style.background = 'linear-gradient(135deg, #2563eb, #3b82f6)';
                accessButton.style.cursor = 'pointer';
            } else {
                accessButton.style.background = '#94a3b8';
                accessButton.style.cursor = 'not-allowed';
            }
        });
    }
});

// Handle repository access
function handleAccess() {
    const consentCheck = document.getElementById('consentCheck');
    
    if (consentCheck && consentCheck.checked) {
        // Show loading state
        const button = document.getElementById('accessButton');
        const originalText = button.textContent;
        button.textContent = 'Redirecting...';
        button.disabled = true;
        
        // Get repository URL from content
        const repositoryUrl = window.siteContent?.access?.repositoryUrl || 'https://github.com/your-username/your-repo';
        
        // Simulate brief loading then redirect
        setTimeout(() => {
            window.open(repositoryUrl, '_blank');
            
            // Reset button
            button.textContent = originalText;
            button.disabled = false;
        }, window.siteContent?.config?.loadingDelay || 1000);
        
        // Track access attempt (you can add analytics here later)
        console.log('Repository access granted at:', new Date().toISOString());
    } else {
        alert('Please accept the terms and conditions first.');
    }
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company') || 'Not specified',
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Show loading state
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual email service later)
            setTimeout(() => {
                // For now, we'll just show success message
                alert('Thank you for your message! We\'ll get back to you soon.');
                
                // Log form submission (you can add email service here later)
                console.log('Contact form submitted:', data);
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Add animation on scroll for sections
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 150;
        
        if (sectionTop < windowHeight - sectionVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animations
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});

// Add hover effects to credential badges
document.addEventListener('DOMContentLoaded', function() {
    const certBadges = document.querySelectorAll('.cert-badge');
    
    certBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Scroll to top functionality (can be added later)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close any modals or reset focus
    if (e.key === 'Escape') {
        // Reset any active states
        document.activeElement.blur();
    }
    
    // Add more keyboard shortcuts as needed
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.get('email') || !validateEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('subject')) {
        errors.push('Please select a subject');
    }
    
    if (!formData.get('message') || formData.get('message').trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
}