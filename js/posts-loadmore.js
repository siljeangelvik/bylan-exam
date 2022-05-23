const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
//const urlMedia = 'https://www.avena.dev/exam/wp-json/wp/v2/media';
const urlPostImg = 'https://www.avena.dev/exam/wp-json/wp/v2/posts?_embed';
let out = document.querySelector('#postsContainer');

fetch(url)
    .then(response => response.json())
    .then(parsedData => {
        console.log(parsedData);
        parsedData.length = 3;
        listData(parsedData);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove());


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
                  <p id="postsExcerpt">${post.excerpt.rendered}</p>
                  <a id="postsLink" href="details.html?guid=${post.id}">Les mer..</a>
                </div>
                </div>`;

        out.style.backgroundImage = urlPostImg;
        out.style.backgroundRepeat = "no-repeat";
    })
}


/*
* Need to fetch images / featured_media
* Need to add event listener to btn, that will fetch the next 5 posts in the url array
* */