var currentIndex = 0;
    
function showImage(index) {
    var images = document.querySelectorAll('.carousel-image');
    var contents = document.querySelector('.carousel-contents');

    currentIndex = (index + images.length) % images.length;

    var translateValue = -1 * currentIndex * 100;
    contents.style.transform = 'translateX(' + translateValue + '%)';
}

function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}