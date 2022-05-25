
let slideNext = document.querySelector(".btn .btn-next");
let slidePrev = document.querySelector(".btn .btn-prev");
let slide = document.querySelectorAll(".slider .slide");
let i = 0;


slidePrev.onclick = function() {

    slide[i].classList.remove("active");
    i--;

    if (i < 0) {
        i = slide.length - 1;
    }
    slide[i].classList.add("active");
};

slideNext.onclick = function() {
    slide[i].classList.remove("active");
    i++;

    if (i >= slide.length) {
        i = 0;
    }

    slide[i].classList.add("active");
};
