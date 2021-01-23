function updateParallaxElement() {
    let wrapper = document.querySelector('#image-above-footer-wrapper');
    let img = document.querySelector('#image-above-footer-wrapper img');
    var wrapperYInView = (wrapper.getBoundingClientRect().y-window.innerHeight)/window.innerHeight + 1;

    img.style.top = (-wrapperYInView)*100 + '%';
}

if(document.querySelector('#image-above-footer-wrapper')) {
    document.addEventListener('scroll', updateParallaxElement);
}