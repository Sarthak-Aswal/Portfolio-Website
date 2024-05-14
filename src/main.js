
import nav from './utils/mobile_nav.js';

nav();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
            
        }
    });
}, { threshold: 1 });





document.querySelectorAll('.hide').forEach(skill => {
    observer.observe(skill);
});

