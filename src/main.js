import nav from './utils/mobile_nav.js';

nav();

// Use a looser threshold + rootMargin and apply class changes inside rAF
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            requestAnimationFrame(() => {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.hide').forEach(skill => {
    observer.observe(skill);
});

const rightElements = document.querySelectorAll('.right');
const leftElements = document.querySelectorAll('.left');

const isMobile = window.innerWidth <= 767;
if (!isMobile) {

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('show_timeline');
                    if (entry.target.classList.contains('right')) {
                        entry.target.classList.remove('hide_right');
                    } else if (entry.target.classList.contains('left')) {
                        entry.target.classList.remove('hide_left');
                    }
                });
                observer2.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    });

    // Observe all right and left elements
    rightElements.forEach(element => observer2.observe(element));
    leftElements.forEach(element => observer2.observe(element));


    const links = document.querySelectorAll('.project_link');
    const linkObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('project_link_button_show');
                    entry.target.classList.remove('project_link_button_hide');
                });
                linkObserver.unobserve(entry.target);
            }
        })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 });

    links.forEach(link => {
        linkObserver.observe(link);
    });
}
else{
    // keep mobile layout simple — don't inject cloned project cards or observe for animations
    const mobileProject = document.getElementById('mobile_project') || document.querySelector('.project_timeline_mobile');
    if (mobileProject) {
        mobileProject.style.display = 'flex';
    }
    const desktopProject = document.getElementById('desktop_project');
    if (desktopProject) desktopProject.style.display = 'none';
    // no cloning, no IntersectionObserver for mobile projects
}

// Trigger mobile animations when the mobile project timeline scrolls into view
const mobileTimeline = document.querySelector('.project_timeline_mobile') || document.getElementById('mobile_project');
if (mobileTimeline) {
    const mobileObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => mobileTimeline.classList.add('in-view'));
                mobileObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -12% 0px' });

    mobileObserver.observe(mobileTimeline);
}
