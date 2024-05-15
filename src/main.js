
import nav from './utils/mobile_nav.js';

nav();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 1 });





document.querySelectorAll('.hide').forEach(skill => {
    observer.observe(skill);
});

const rightElements = document.querySelectorAll('.right');
const leftElements = document.querySelectorAll('.left');

const isMobile=window.innerWidth<=767;
if(!isMobile){
    
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_timeline');
                if (entry.target.classList.contains('right')) {
                    entry.target.classList.remove('hide_right');
                } else if (entry.target.classList.contains('left')) {
                    entry.target.classList.remove('hide_left');
                }
                // Stop observing the target element after adding the class
                observer2.unobserve(entry.target);
            }
        });
    }, {
        threshold:0.3
    });
    
    // Observe all right and left elements
    rightElements.forEach(element => observer2.observe(element));
    leftElements.forEach(element => observer2.observe(element));
    
    
    const links=document.querySelectorAll('.project_link');
    const linkObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('project_link_button_show');
                entry.target.classList.remove('project_link_button_hide');
                linkObserver.unobserve(entry.target);
            }
            
        })
    });
    
    links.forEach(link=>{
        linkObserver.observe(link);
    });
}
else{
    const mobileProject=document.getElementById('mobile_project');
    mobileProject.style.display='flex';
    const desktopProject=document.getElementById('desktop_project');
    desktopProject.style.display='none';
}
