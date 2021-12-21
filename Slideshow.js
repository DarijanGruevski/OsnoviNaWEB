var slideIndex = 1;
var totalLikes = 0;
var flag = 1;

function like(totalLikes, num) {
    let likeID = "likeNum" + num;
    ++totalLikes;
    if (!flag) {
        --totalLikes;
        flag = 1;
    }
    else if (flag) {
        flag = 0;
    }
    let p = document.getElementById(likeID);
    p.innerHTML = totalLikes;
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

