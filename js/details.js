const postDetails = document.querySelector('#postContainer');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let url = `https://www.avena.dev/exam/wp-json/wp/v2/posts/${id}`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        listData(data);
        console.log(data + `, Data Value: ` + data + `, Data Type: ` + typeof data);
    })
    .finally(() => {
        document.querySelector(".loader").remove();
        document.querySelector(".back").innerHTML = `<a href="/index.html">Back</a>`;
    })

function listData(id) {
    console.log(id);
    document.title = id.title.rendered;


    let itemImg = id._embedded;
    let itemImgAlt = id._embedded;

    console.log(itemImg + itemImgAlt);
    postDetails.innerHTML = `
        <div>
        <h1>${id.title.rendered}</h1>
        <img src="${itemImg}" alt="${itemImgAlt}">
        <div style="display: flex; flex-direction: column;">
        <p>${id.content.rendered}</p>        
        </div>
        </div>
         `;

    id.style.backgroundImage = `url(${id.background})`;
    id.style.backgroundRepeat = "no-repeat";
    id.style.backgroundSize = "50% 50%"; //SIZE: width height
    id.style.backgroundPosition = "-80% 30%"; // POSITION: width height
}