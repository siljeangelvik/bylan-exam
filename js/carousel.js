// noinspection JSUnresolvedVariable
/*
let slide0 = document.getElementById('slide1');
let slide1 = document.getElementById('slide2');
let slide2 = document.getElementById('slide3');
let slide3 = document.getElementById('slide4');
let slide4 = document.getElementById('slide5');
*/

const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
const carousel = document.querySelector('#carousel');


fetch(url)
    .then(response => response.json())
    .then(parsedData => {
        //parsedData.length = 4;
        carouselSlider(parsedData);
        console.log(parsedData);

    })
    .catch((error) => carousel.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove());





const slides = document.getElementsByClassName('slide');
const content = document.querySelectorAll('.slide');


let nextBtn = document.querySelector('.btn-next');
let prevBtn = document.querySelector('.btn-prev');
nextBtn.addEventListener('click', (e) => {
    slides.forEach(slide => {
        slide.nextElementSibling.style.display = 'block'
        slide.style.display = 'none';
    })
})
prevBtn.addEventListener('click', (e) => {
    slides.forEach(slide => {
        slide.prevElementSibling.style.display = 'block';
        slide.style.display = 'none';
    })
})

posts = 0; // REMEMBER TO TRY: make it an array with 5 objects

// When page loads show first background
(function() {
    slides[posts].className += ' carouselActive';
    posts++;
})();

function changeSlide() {

    // Slide previous slide to the left of the screen
    // from right to left
    if(posts === 0) {
        slides[slides.length-1].className = 'slide carouselInactive';//Changed 2 to slides.length-1 to avoid hardcoding values
    }
    else {
        slides[posts - 1].className = 'slide carouselInactive';
    }
    // Slide the current slide in from the right of the screen
    slides[posts].className = 'slide carouselActive';// removed += to override transport
    // Make the slide go back to the right of the screen
    // prepare NEXT slide
    if(posts === slides.length-5) {
        slides.className = 'slide';    // dont override transport
       slides[1].className = 'slide transport';
    }
    else {
        slides[posts - 1].className = 'slide transport';
        //slides[posts + 1].className = 'slide';    // dont override transport
    }

    posts++

    if(posts === slides.length) {
        posts = +0;
    }
}
setInterval(changeSlide, 2000);

console.log('LOGGING POSTS: ' + slides);




// The window object calls the function:
//window.addEventListener("load", changeSlide);

/* // A button object calls the function:
document.querySelector('.btn-next').addEventListener("click", changeSlide);
document.querySelector('.btn-prev').addEventListener("click", changeSlide);
*/

/*
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
*/

/*
  posts[0] = slide1;
  posts[1] = slide2;
  posts[2] = slide3;
  posts[3] = slide4;
  posts[4] = slide5;
*/

/*
data.forEach((item) => {
            content.innerHTML = ' ';
            console.log(item);
                content.innerHTML = `
        <a href="${item.link}" target="_blank">
        <h3>${item.title.rendered}</h3>
        <p>${item.excerpt.rendered}</p>
        </a>
        <p><strong><a href="${item.link}">Les mer..</a> </strong></p>
        `;
                content.style.background = `${item.featured_media}`;
*/