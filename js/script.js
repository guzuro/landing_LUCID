window.onscroll = function () {
    activateStickyNav();
};

let navbar;
let slides;
let slideIndex = 1;


$(document).ready(function () {
    navbar = document.getElementById("header");
    activateStickyNav();
    slides = document.getElementsByClassName("slider__item");
    showSlides(slideIndex);
});

function activateStickyNav() {
    if (window.pageYOffset >= 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

function showHideBurgerMenu(bars) {
    bars.classList.toggle("change");
    document.querySelector('#navList > ul').classList.toggle("active");
}