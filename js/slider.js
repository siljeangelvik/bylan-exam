
const url = "https://www.avena.dev/exam/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";
const postsWrapper = document.querySelector('#slider-loop');

fetch(url)
    .then(response => response.json())
    .then(parsedData => {
        // console.log(parsedData);
        // console.log(Object.keys(parsedData));
        listData(parsedData);
    })
    .catch((error) => postsWrapper.innerHTML = "Something's wrong!" + error)




function listData(posts) {
    // console.log(posts);
    posts.forEach(post => {
        // console.log(post);
        let postsImg = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        let postsImgAltTxt = post._embedded["wp:featuredmedia"][0].alt_text;

        let postElement = `
            <div class="slide-pic active">
            <a class="slide-link" href="details.html?${post.links}" style="cursor: pointer;">
            <img class="slide-img" src="${postsImg}" alt="${postsImgAltTxt}">
               <!--
                  <div class="slide-overlay-text">
                      <span class="slide-header">${post.title.rendered}</span>
                      <span class="slide-text">${post.excerpt.rendered}</span>
               </div>
              -->
            </div>
            </a>
            `;

        postsWrapper.innerHTML += postElement;
        console.log(post.title.rendered);
    })
}

////////////////************//////////////
document.addEventListener("DOMContentLoaded", () => {
    const SLIDETIME = 500; //ms

    const backButton = document.querySelector(".slider-back-btn");
    const forwardButton = document.querySelector(".slider-next-btn");

    const allSlides = [...document.querySelectorAll(".slide-pic")];
    let clickable = true;
    let active = null;
    let newActive = null;

    function initSlider() {
        allSlides.forEach((slide) =>
            slide.setAttribute(
                "style",
                `transition: transform ${SLIDETIME}ms ease;
                     animation-duration: ${SLIDETIME}ms`
            )
        );
    }

    function changeSlide(forward) {
        if (clickable) {
            clickable = false;
            active = document.querySelector(".active");
            const activeSlideIndex = allSlides.indexOf(active);

            if (forward) {
                console.log("activeSlideIndex: ", activeSlideIndex);
                console.log("allSlides.length: ", allSlides.length);
                console.log("new slide: ", (activeSlideIndex + 1) % allSlides.length);

                newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
                active.classList.add("slideOutLeft");
                newActive.classList.add("slideInRight", "active");
            } else {
                console.log("activeSlideIndex: ", activeSlideIndex);
                console.log("allSlides.length: ", allSlides.length);
                console.log(
                    "new slide: ",
                    (activeSlideIndex - 1 + allSlides.length) % allSlides.length
                );

                newActive =
                    allSlides[
                    (activeSlideIndex - 1 + allSlides.length) % allSlides.length
                        ];
                active.classList.add("slideOutRight");
                newActive.classList.add("slideInLeft", "active");
            }
        }
    }

    allSlides.forEach((slide) => {
        slide.addEventListener("transitionend", (e) => {
            // Check for the old active transition and if clickable is false
            // to not trigger it more than once
            if (slide === active && !clickable) {
                clickable = true;
                // Remove all CSS animation classes on old active
                active.className = "slide-pic";
            }
        });
    });

    //Event listeners
    forwardButton.addEventListener("click", () => {
        changeSlide(true);
    });
    backButton.addEventListener("click", () => {
        changeSlide(false);
    });

    // Init the slider
    initSlider();
});
