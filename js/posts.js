const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
const out = document.querySelector('.output');

function listData(list) {
    list.forEach((item) => {
        // console.log(item.name);
        let newDiv = `<div>
            <h2>${item.name}</h2>
            <p><strong>Rating: </strong> ${item.rating}</p>
            <p><strong>Tags amount: </strong> ${item.tags.length}</p>
        </div>`;
        out.innerHTML += newDiv;
    })
}

fetch(url)
    .then(response => response.json())
    .then(dataArray => {
        dataArray.results.length = 8;
        // console.log(dataArray.results.length);
        listData(dataArray.results);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove());



/*******************/

let postsMedia = 'https://www.avena.dev/exam/wp-json/wp/v2/posts/?_embed=wp:featuredmedia';
const output = document.querySelector('#output');

fetch(postsMedia)
    .then (respons => respons.json())
    .then (data => listPosts(data))


function listPosts (posts) {
    for (let post of posts) {
        if (post.featured_media > 0) {
            let imgSrc = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
            output.innerHTML += `<div><img src="${imgSrc}" alt=""></div>`;
        } else {
            output.innerHTML += `<div>[Post id=${post.id} does not have a featured image]</div>`;
        }
    } }



/******************/

/*
const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
const slidesContainer = document.querySelectorAll('.slide');
const postsContainer = document.getElementById('postsContainer');
const loadButton = document.getElementById('loadMore');

fetch(url)
    .then(response => response.json())
    .then(responseArray => {
        console.log(responseArray);
        console.log(' FETCH');
        //  responseArray.splice(0,6); // get descending order ...
        // console.log(responseArray);
    })

loadButton.addEventListener('click', ev => {
    ev.preventDefault();

    //  responseArray.splice(0,7);
    //    responseArray.split(",", 3);
    responseArray.length = 3; // 3+3..

})

loadMore(responseArray);


function loadMore(posts) {

    console.log(posts);
    console.log(' FUNCTION loadMore(posts)');

    posts.forEach(post => {
        console.log(post);
        postsContainer.innerHTML += `

                <h3>${post.title.rendered}</h3>
                <p>${post.excerpt.rendered}</p>
                `;
    })


}


/*

         //   let allMySlides = [firstSlide, secondSlide, thirdSlide, fourthSlide];

responseArray[0] = firstSlide;
        responseArray[1] = secondSlide;
        responseArray[2] = thirdSlide;
        responseArray[3] = fourthSlide;



const loadButton = document.getElementById('loadMore');

loadButton.addEventListener('click', ev => {
    ev.preventDefault();
    // loadMore();
})


const mySlides = document.querySelectorAll('.slide');
const slides = [firstSlide, secondSlide, thirdSlide, fourthSlide];


// infinite for loop
for (let i = 5; i > 6; i++) {

    responseArray += i;

    // block of code
    loadButton.addEventListener('click', ev => {
        ev.preventDefault();
    })
}



function loadMore(posts) {
    let allSlides = document.querySelectorAll('.slide');
    console.log(posts);
    posts.forEach(post => {
        allSlides.innerHTML = `
        <h2>${post.title.rendered}</h2>
        <p>${post.excerpt.rendered}</p>
`;
    })

}


/*

 const loadMore = () => {

}






items.forEach(function (item, index) {
    console.log(item.innerText, index);
    if (index > maxItems - 1) {
        item.classList.add(hiddenPosts);
    }
});

items.forEach(function (item, index) {
    console.log(item.innerText, index);
    if (index > maxItems - 1) {
        item.classList.add(hiddenPosts);
    }
});


loadMore.addEventListener('click', function () {
    [].forEach.call(document.querySelectorAll('.' + hiddenPosts), function (item, index) {
        if (index < loadItems) {
            item.classList.remove(hiddenPosts);
        }
        if (document.querySelectorAll('.' + hiddenPosts).length === 0) {
            loadMore.style.display = 'none';
        }
    })
})
*/


/*
    $(function(){
        $("div").slice(0, 10).show(); // select the first ten
        $("#load").click(function(e){ // click event for load more
            e.preventDefault();
            $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
            if($("div:hidden").length == 0){ // check if any hidden divs still exist
                alert("No more divs"); // alert if there are none left
            }
        });
    });
*/
/*
    function loadData(posts) {

        if (posts.length == 6) {
            loadMore.forEach(post => {
                post.style.display = 'block';
            });
        } else {
            loadMore.style.display = 'none';
        }

        loadMore.slice(0, 5).show(); // select first 5
        loadMore.click(function (e) { // click event for load more
            e.preventDefault();
            loadMore.slice(0, 5).show(); // select next 5 hidden divs and show them
            if (posts.length == 0) { // check if any hidden divs still exsist
                loadMore.style.display = 'none'; // button hide if no more posts exist
            }
        })
    }
    */



/*
const url = 'https://www.avena.dev/exam/wp-json/wp/v2/posts';
const out = document.querySelector('#postsContainer');

fetch(url)
    .then(response => response.json())
    .then(parsedData => {
        listData(parsedData.data);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove());

function listData(posts) {
    console.log(posts);

    posts.forEach((post) => {

        out.innerHTML +=
            `<div>
              <a href="details.html?guid=${post.id}">
                    <h3>${post.title.rendered}</h3>
              </a>
                    <p>${post.excerpt.rendered}</p>
            </div>`;
    })
}
*/