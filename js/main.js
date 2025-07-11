window.addEventListener('load', init);

function init() {
    //Gather elements
    let slideshow = document.querySelector('.slideshow-container');

    //Event listeners
    slideshow.addEventListener('click', slideShowHandler);
}

function slideShowHandler(e) {
    if(e.target.nodeName !== 'IMG') {
        return;
    }

    if(e.target.alt === 'Scale') {
        window.location.href = 'https://studio-scale.itch.io/scale';
    } else if(e.target.alt === 'Cosmic Catch') {
        window.location.href = 'https://studio-scale.itch.io/cosmic-catch';
    }
}