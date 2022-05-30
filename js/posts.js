const url = "https://www.avena.dev/exam/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";
const output = document.querySelector('#outputPosts');
const loadMoreBtn = document.querySelector('#loadMore');

let posts = [];
let i = 0;
let n = 0;
while (i < 4) {
    i++;
    n += i;
}

console.log(i + ' ' + n);

fetch(url)
    .then(respons => respons.json())
    .then(data => {
        posts = data;
        listPosts(posts);
    })
    .catch(error => console.error("This happened: " + error));

loadMoreBtn.addEventListener('click', e => {
    e.preventDefault();

    listPosts(posts);
});

function listPosts(posts) {
    //console.log(posts);
    posts.forEach(post => {
        posts.length = i++;
        let itemImg = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        let itemImgAlt = post._embedded["wp:featuredmedia"][0].alt_text;

        let postItem = `
            <div class="row-item" style="background-color: var(--bylan-secondaryBg);">
            <a href="details.html?id=${post.id}" style="text-decoration: none; color: var(--bylan-primaryFont);">
            <img src="${itemImg}" alt="${itemImgAlt}">
            <span style="padding-top: 10px;"><strong>${post.title.rendered}</strong></span>
            <span>${post.excerpt.rendered}</span>
            </a>
            </div>
            `;
        output.innerHTML += postItem;
    })
}