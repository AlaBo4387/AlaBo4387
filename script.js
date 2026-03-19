// script.js

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scrolling functionality
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission handling
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Gather form data
    const formData = new FormData(contactForm);
    // Send data to server (example endpoint)
    fetch('https://example.com/api/contact', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle successful submission
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors
    });
});
