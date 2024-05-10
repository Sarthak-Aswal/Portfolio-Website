const nav=()=>{
const navBtn=document.querySelector('.header_bar');
const mobileNav=document.querySelector('.mobile_nav');
let isNavOpen=false;
const mobileLinks=document.querySelectorAll('.mobile_nav_link');
navBtn.addEventListener('click',()=>{
    isNavOpen=!isNavOpen;
    if(isNavOpen){
        mobileNav.style.display='flex';
        document.body.style.overflowY='hidden';
    }
    else{
        mobileNav.style.display='none';
        document.body.style.overflowY='auto';
    }
    mobileLinks.forEach(link=>{
        link.addEventListener('click',()=>{
            isNavOpen=false;
            mobileNav.style.display='none';
            document.body.style.overflowY='auto';

        });
    });
  
}); 
};
export default nav;