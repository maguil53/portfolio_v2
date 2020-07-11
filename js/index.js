let projectOverlay = document.getElementById('project-overlay');
let imageIcon = document.getElementById('image-icon');

let overlayCloseButton = document.getElementById('project-overlay-close');

imageIcon.addEventListener('click', function() {
    projectOverlay.style.visibility = "visible";
    projectOverlay.style.opacity = "1";
});

overlayCloseButton.addEventListener('click', function() {
    projectOverlay.style.visibility = "hidden"; 
    projectOverlay.style.opacity = "0";
});