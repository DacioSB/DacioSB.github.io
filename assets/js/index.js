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
console.log(navLink);
function linkAction() {
    //Active link
    navLink.forEach(x => x.classList.remove('active'));
    this.classList.add('active');
    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(x => x.addEventListener('click', linkAction));