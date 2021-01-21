/**
 * Menu Show
 */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener(('click'), () =>{
            nav.classList.toggle('show');
        }

        );
    }
};
showMenu("nav-toggle", "nav-menu");

/**
 * Active and Remove Menu
 * Every time i clicked, the menu is inactive and
 */
const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
    //Active link
    navLink.forEach(x => x.classList.remove('active'));
    this.classList.add('active');
    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(x => x.addEventListener('click', linkAction));

/**
 * Scrool Reveal Animation
 */

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//SCROLL HOME
sr.reveal(".home_title", {});
sr.reveal(".button", {delay: 200});
sr.reveal(".home_img", {delay: 400});
sr.reveal(".home_social_icon", {interval: 200});
/*SCROLL ABOUT*/
sr.reveal('.about_img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 
sr.reveal('.skills_img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.portfolio_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_input',{interval: 200}); 