let projectOverlay = document.getElementById('project-overlay');
let imageIcon = document.getElementById('image-icon');

let overlayCloseButton = document.getElementById('project-overlay-close');

// Hamburger Navigation
let hamburger = document.getElementById('hamburger-container');
let hamburgerNavigation = document.getElementById('hamburger-nav');
let hamburgerClose = document.getElementById('hamburger-nav-close');

// Navigation

// Hamburger links 
let homeNav = document.getElementById('home-nav');
let aboutNav = document.getElementById('about-nav');
let projectsNav = document.getElementById('projects-nav');
let contactNav = document.getElementById('contact-nav');

// Navigation links
let homeLink = document.getElementById('home-link');
let aboutLink = document.getElementById('about-link');
let projectsLink = document.getElementById('projects-link');
let contactLink = document.getElementById('contact-link');

// Navigation Stops
let intro = document.getElementById('intro');
let about = document.getElementById('about');
let mainProjects = document.getElementById('main-projects-container');
// There is no Contact section so far...soooo yeah get on that.

hamburger.addEventListener('click', function() {
    hamburgerNavigation.style.transform = "scale(1,1)";
    hamburgerNavigation.style.opacity = "1";  
});

hamburgerClose.addEventListener('click', () => removeNav());

// Hamburger links
homeNav.addEventListener('click', () => {
    intro.scrollIntoView();
    removeNav(); 
});

aboutNav.addEventListener('click', () => {
    about.scrollIntoView();
    removeNav(); 
});

projectsNav.addEventListener('click', () => {
    mainProjects.scrollIntoView();
    removeNav();  
});

contactNav.addEventListener('click', () => {
   // There is no Contact section!!!
   removeNav();  
});

// Navigation links
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    intro.scrollIntoView({behavior: "smooth"});
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    about.scrollIntoView({behavior: "smooth"});
});

projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    mainProjects.scrollIntoView({behavior: "smooth"});
});
// contactLink.addEventListener('click', () => );

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