// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    alert(`Thank you for reaching out, ${name}! Your message has been simulated successfully.`);
    this.reset();
});