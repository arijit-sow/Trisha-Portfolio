// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Handle Contact Form Submission to Live Backend
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault(); 
    
    // 1. Gather the data from the form
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        // 2. Send the data to your live Spring Boot API on Render
        // REPLACE THE URL BELOW WITH YOUR ACTUAL RENDER LINK
        const response = await fetch('https://trisha-portfolio-backend.onrender.com/api/contact/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message successfully sent to Trisha!');
            this.reset(); // Clear the form
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Could not connect to the server.');
    }
});