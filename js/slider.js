



const posts = "https://www.avena.dev/exam/wp-json/wp/v2/posts";

// Select all slides
const slides = document.querySelectorAll(".slide");



fetch(posts)
    .then(response => response.json())
    .then(data => {
        listData(data);
    })

function listData(posts) {
    console.log(posts);
    slides.forEach((slide, indx) => {
        slide.style.transform = `translate(${indx * 100}%)`;
        slides.innerHTML =
            `<h1>${slide.slug}</h1>
            <div>
                <p>${slide.excerpt}</p>
            </div>`;
    })
}





// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});
