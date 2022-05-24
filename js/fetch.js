let urls = ["https://www.avena.dev/exam/wp-json/wp/v2/media",
    "https://www.avena.dev/exam/wp-json/wp/v2/posts",
    "https://www.avena.dev/exam/wp-json/wp/v2/pages?page=2",
    "https://www.avena.dev/exam/wp-json/wp/v2/pages"];

let promises = urls.map(url => new Promise(resolve => resolve({
    unprocessed: url,
    processed: url + ' processed'
})));

Promise.all(promises).then(results => results.map(obj => f(obj.unprocessed, obj.processed)));
function f(a, b) {
    console.log(a, b);
}


fetch(urls[2])
    .then(response => response.json())
    .then(data => console.log(data))


const postsUrl = "https://www.avena.dev/exam/wp-json/wp/v2/posts";
let carousel = document.querySelector('aside');

fetch(postsUrl)
    .then(response => response.json())
    .then(data => {
        postsCarousel(data);
    })

function postsCarousel(slides) {
    carousel = " ";
    slides.forEach((slide) => {
        carousel += `
        <div>
        <a href="detail.html?id=${slide.id}">
        <p>${slide.title}</p>
        <p>${slide.excerpt}</p>
        </a>
</div>`;

    })
}


/**

   // ?page= : specify the page of results to return.
     /*   For example, /wp/v2/posts?page=2 is the second page of posts results
        By retrieving /wp/v2/posts, then /wp/v2/posts?page=2, and so on, you may access every available post through the API, one page at a time. */

   // ?per_page= : specify the number of records to return in one request, specified as an integer from 1 to 100.
     /*   For example, /wp/v2/posts?per_page=1 will return only the first post in the collection */

   //?offset=: specify an arbitrary offset at which to start retrieving posts
     /*   For example, /wp/v2/posts?offset=6 will use the default number of posts per page, but start at the 6th post in the collection */

// ?per_page=5&page=4 is equivalent to ?per_page=5&offset=15


/*

ADDRESS - SOCIALS
    <a href="detail.html?id=${slide.id}"> </a>

*/