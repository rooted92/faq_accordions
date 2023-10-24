const faqToggle = document.querySelectorAll('.faq-toggle'); // this will create a node list of all the faq-toggle classes


// Loop through the node list and add an event listener to each one
faqToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Add active class to the parent element of the faq-toggle class
        toggle.parentNode.classList.toggle('active');
    });
});