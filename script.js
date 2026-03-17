// Multi-Page Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const bgText = document.getElementById('bg-text');
    
    // Get current filename
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    // Highlight active nav link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
            
            // Update big background text based on page
            if (bgText) {
                const pageTitle = page.replace('.html', '').toUpperCase();
                bgText.innerText = (page === 'index.html' || page === '') ? 'HI' : pageTitle;
            }
        } else {
            link.classList.remove('active');
        }
    });

    console.log('Portfolio page loaded:', page);
});
