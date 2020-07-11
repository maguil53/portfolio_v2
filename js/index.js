let projectOverlay = document.getElementById('project-overlay');
let imageIcon = document.getElementById('image-icon');

let overlayCloseButton = document.getElementById('project-overlay-close');

// Hamburger Navigation
let hamburger = document.getElementById('hamburger-container');
let hamburgerNavigation = document.getElementById('hamburger-nav');
let hamburgerClose = document.getElementById('hamburger-nav-close');

// Navigation
// Note that there is 1 id for Home but there are two links
let homeNav = document.getElementById('home-nav');
let aboutNav = document.getElementById('about-nav');
let projectsNav = document.getElementById('projects-nav');
let contactNav = document.getElementById('contact-nav');

// Navigation Stops
let intro = document.getElementById('intro');
let about = document.getElementById('about');
let mainProjects = document.getElementById('main-projects-container');
// There is no Contact section so far...soooo yeah get on that.

hamburger.addEventListener('click', function() {
    hamburgerNavigation.style.transform = "scale(1,1)";
    hamburgerNavigation.style.opacity = "1";  
});

hamburgerClose.addEventListener('click', function() {
    removeNav();
});

homeNav.addEventListener('click', function() {
    intro.scrollIntoView();
    removeNav();
});

aboutNav.addEventListener('click', function() {
    about.scrollIntoView();
    removeNav();
});

projectsNav.addEventListener('click', function() {
    mainProjects.scrollIntoView();
    removeNav();
});

contactNav.addEventListener('click', function() {
    // There is no Contact section!!!
    removeNav();
});

function removeNav() {
    hamburgerNavigation.style.opacity = "0"; 
    setTimeout(function(){
        hamburgerNavigation.style.transform = "scale(0,1)"; 
    }, 500); 
}

// Additional Projects
imageIcon.addEventListener('click', function() {
    projectOverlay.style.visibility = "visible";
    projectOverlay.style.opacity = "1";
});

overlayCloseButton.addEventListener('click', function() {
    projectOverlay.style.visibility = "hidden"; 
    projectOverlay.style.opacity = "0";
});