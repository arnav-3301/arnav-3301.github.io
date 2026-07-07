document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Triggers when section is in the upper middle of the viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to the link corresponding to the current section
                const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const animatedElements = document.querySelectorAll('.project');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // Optional: Remove class if you want it to shrink when scrolled out of view
                entry.target.classList.remove('in-view'); 
            }
        });
    }, { 
        root: null, 
        threshold: 0.6 // Triggers when 60% of the element is visible
    });

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
});