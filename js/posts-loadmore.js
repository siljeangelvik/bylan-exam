const api = "https://www.avena.dev/exam/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";
const output = document.querySelector('#outputPosts');
const loadMoreBtn = document.getElementById('loadMore');

let posts = [];
let i = 0;


fetch(api)
    .then(respons => respons.json())
    .then(data => {
//        posts = data;
        data.length = 4;
        posts = data;
        listPosts(data);
    })
    .catch(error => console.error("This happened: " + error));


loadMoreBtn.addEventListener('click', e => {
    e.preventDefault();

    listPosts();
});


function listPosts(posts) {
    for (let post of posts) {

        console.log(posts.value)
        if (post.featured_media > 0) {
            console.log(post._embedded["wp:featuredmedia"][0]);
            let imgSrc = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
            let altTxt = post._embedded["wp:featuredmedia"][0].alt_text;

            output.innerHTML += `
            <div class="row-item" style="background-color: var(--bylan-secondaryBg);">
            <img src="${imgSrc}" alt="${altTxt}">
            <span style="padding-top: 5px;"><strong>${post.title.rendered}</strong></span>
            <span>${post.excerpt.rendered}</span>
            </div>
            `;
            output.style.backgroundSize = "60px 120px";
            output.style.background = imgSrc;

            console.log(post);

        } else {
            output.innerHTML += `<div>[Post id=${post.id} does not have a featured image]</div>`;
        }

    }

}

i++;

if (i === 0) {
    posts.length = i++;
}



/*
let out = document.querySelector('#postsContainer');
//const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
const url = "https://www.avena.dev/exam/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";

fetch(url)
   .then(response => response.json())
   .then(parsedData => {
       console.log(parsedData);
       // parsedData.length = 3;
       // let result = parsedData;
       parsedData[0] = firstSlide;
       parsedData[1] = secondSlide;
       parsedData[2] = thirdSlide;
       parsedData[3] = fourthSlide;
       listData(parsedData);

   })
   .catch((error) => out.innerHTML = "Something's wrong!" + error)
   .finally(() => document.querySelector(".loader").remove())


function listData (posts) {

   for (let post of posts) {
       if (post.featured_media > 0) {
           let imgSrc = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
           out.innerHTML += `<img src="${imgSrc}" alt="">`;
       } else {
           out.innerHTML += `<div>[Post id=${post.id} does not have a featured image]</div>`;
       }
   } }



function changeSlide(slides) {
   for (let slide of slides) {
       if (slide>25) return slide;
   }
}



/*
function listData(posts) {
   posts.length = 5;
   console.log(`POSTS LENGTH =  ` + posts.length);

   posts.forEach((post) => {
       out.innerHTML +=
           `<div id="postsItem" class="item">
              <div id="postsInnerItem">
              <a class="postsTitle" href="details.html?guid=${post.id}">
                       <h3 id="postsTitle">${post.title.rendered}</h3>
                 </a>
                 <span id="postsExcerpt">${post.excerpt.rendered}</span>
                 <a id="postsLink" href="details.html?guid=${post.id}">Les mer..</a>
               </div>
               </div>`;

       out.style.backgroundImage = '';
       out.style.backgroundRepeat = "no-repeat";
   })
}
/**/


/*
SLICE 0,3 (SLIDER)
SLICE 0,5 (?) (LOAD MORE)

* Need to fetch images / featured_media
* Need to add event listener to btn, that will fetch the next 5 posts in the url array
* */