var headerHeroSliderStepIndex = 1;
var maxHeaderHeroSliderStepIndex = document.querySelector('.header-hero-wrapper').querySelectorAll('img').length;
var oldImage;
var newImage;

var oldTextOverlayWrapper;
var newTextOverlayWrapper;

function doHeaderHeroSliderStep() {
    oldImage = document.querySelector('#header-hero-image-'+headerHeroSliderStepIndex);
    oldTextOverlayWrapper = document.querySelector('#text-overlay-wrapper-'+headerHeroSliderStepIndex);

    headerHeroSliderStepIndex++;
    if(headerHeroSliderStepIndex>maxHeaderHeroSliderStepIndex) {headerHeroSliderStepIndex=1;}
    newImage = document.querySelector('#header-hero-image-'+headerHeroSliderStepIndex);
    newTextOverlayWrapper = document.querySelector('#text-overlay-wrapper-'+headerHeroSliderStepIndex);
    newImage.classList.add('fade-in');
    oldTextOverlayWrapper.classList.remove('active');
    newTextOverlayWrapper.classList.add('fade-in');

    setTimeout(function() {
        newImage.classList.add('active');
        oldImage.classList.remove('active');
        newImage.classList.remove('fade-in');

        newTextOverlayWrapper.classList.add('active');
        
        newTextOverlayWrapper.classList.remove('fade-in');
    }, 1050);
}

window.doHeaderHeroSliderStep = doHeaderHeroSliderStep;
setInterval(doHeaderHeroSliderStep, 7500);