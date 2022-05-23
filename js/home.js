const url = "https://www.avena.dev/exam/wp-json/wp/v2/pages";
//const url = "https://www.avena.dev/exam/wp-json/wp/v2/pages/2";

const allPages = document.getElementById('menuItems');

fetch(url)
    .then(response => response.json())
    .then(data => {
      listData(data);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
// type is not array, it is object, therefore error

function listData(contents) {
    console.log(contents);
    contents.forEach((content) => {
        out.innerHTML =
            `<h1>${content.id}</h1>
            <div>
                <p>${content.rendered}</p>
            </div>`;
    })
}
