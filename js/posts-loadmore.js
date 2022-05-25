const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
//const urlMedia = 'https://www.avena.dev/exam/wp-json/wp/v2/media';
const urlPostImg = 'https://www.avena.dev/exam/wp-json/wp/v2/posts?_embed';
let out = document.querySelector('#postsContainer');

fetch(url)
    .then(response => response.json())
    .then(parsedData => {
        console.log(parsedData);
        parsedData.length = 3;
        // let result = parsedData;
        listData(parsedData);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove())



let imgSrc = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
output.innerHTML += `<div><img src="${imgSrc}" alt=""></div>`;

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




/*
SLICE 0,3 (SLIDER)
SLICE 0,5 (?) (LOAD MORE)

* Need to fetch images / featured_media
* Need to add event listener to btn, that will fetch the next 5 posts in the url array
* */