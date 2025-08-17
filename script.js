// Form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you, ' + form.name.value + '! Your message has been received.');
    form.reset();
});

// Scroll-to-top button
const scrollButton = document.createElement('button');
scrollButton.textContent = '↑ Top';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.padding = '10px 15px';
scrollButton.style.display = 'none';
scrollButton.style.backgroundColor = '#4CAF50';
scrollButton.style.color = '#fff';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '5px';
scrollButton.style.cursor = 'pointer';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
