var myIndex = 0;
carousel();

function carousel() {
    var slides = document.getElementsByClassName("banner-image");
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    myIndex++;
    if (myIndex > slides.length) {
        myIndex = 1;
    }

    slides[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);
}