// Form redirection function
function redirectToForm() {
    window.open('https://forms.gle/WiD4K6XRbBehdZjSA', '_blank');
}

// Partner website redirections
function redirectToZamzam() {
    window.open('https://zamzam-capital.com/', '_blank');
}

function redirectToBarakah() {
    window.open('https://barakahfinserve.com/', '_blank');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        }
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Additional utility functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // You can add notification functionality here
    console.log(`${type}: ${message}`);
}