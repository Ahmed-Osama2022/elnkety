/**
 * To-do:
 * Make the header visible when scrolling over the whole page.
 */


/**
 * Start global variables
 */
const head = document.querySelector(".head");
const banner = document.querySelector(".banner");
const mobileMenu = document.querySelector(".mobile-menu");
/**
 * End with global variables.
 */

/**
 * Making the head of the page visible when scrolling,
 *  and change its opacity
 */
window.onscroll = function() {
    if (
        document.body.getBoundingClientRect().top <= -200 
        && document.body.getBoundingClientRect().top != 0 

    ) {
        console.log('scroll!');
        document.getElementsByClassName('head')[0].style.opacity = '0.85';
    } else if (
        document.body.getBoundingClientRect().top == 0 

    ){
    document.getElementsByClassName('head')[0].style.opacity = '1';
    
    };
};
/**
 * End making the head of the page visible when scrolling,
 *  and change its opacity
 */

/**
 * Appear the side-menu bar...
 */

function sideMenu() {
    head.style.display = 'none';
    banner.style.display = 'none';
    mobileMenu.style.display = 'block'
    
}
/**
 * disappear the menu => "close it"
 */

function closeMenu() {
    head.style.display = 'flex';
    banner.style.display = 'block';
    // mobileMenu.style.animation = 'disappear 0.7s linear';
    mobileMenu.style.display = 'none';
}

/**
 * End of script
 */