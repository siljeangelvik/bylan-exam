const url = "https://www.avena.dev/exam/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";

let slider = document.querySelector('.slide');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');


let postsArray = [];
let postItems = 0;
let i = 0;


fetch(url)
    .then(respons => respons.json())
    .then(data => {
        postsArray = data;
        postsSlider(data);
    })
    .catch(error => console.error("This happened: " + error));


const postsSlider = (postsArray) => {
    console.log(postsArray);

    slider.innerHTML = '';
    for (let [index, post] of postsArray.entries()) {
        const displayPost = index >= i && index <= (i + postItems);
        let displayPostClass = '';
        if (!displayPost) {
            displayPostClass = 'hidden';
        }

        let postImg = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        let altTxt = post._embedded["wp:featuredmedia"][0].alt_text;



        let slide = `
   <div class="inner-slide ${displayPostClass}">
    <img src="${postImg}" alt="${altTxt}">
   <div>
   <!--
</div>
    <h3>${post.title.rendered}</h3>
    <p>${post.excerpt.rendered}</p>
    <a href="details.html?id=${post.id}">Les mer..</a>
    </div>-->
    `;

        slider.innerHTML += slide;
    }
}


prevBtn.addEventListener('click', () => {
    i--;

    if (i < 0) {
        i = postsArray.length - 1;
    }

    postsSlider(postsArray);
});

nextBtn.addEventListener('click', () => {
    i++;

    if (i >= postsArray.length) {
        i = 0;
    }

    postsSlider(postsArray);
});
