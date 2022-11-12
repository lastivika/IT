const btnGetPosts = document.querySelector(".get-posts");
const btnAddPosts = document.querySelector(".add-posts");
const postBox = document.querySelector(".posts-box");
const fragment = document.querySelector(".posts-box");

function getPosts(callback) {

    const xhr = new XMLHttpRequest();
    // console.log(xhr)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        console.log('Все ок');
        console.log(xhr.response);
        const response = JSON.parse(xhr.response)
        console.log(response);
        callback(response);
    })


    xhr.addEventListener('error', () => {
        console.log('Все не ок');
    })
    xhr.send()

    postBox.appendChild
}
//робимо запит на сервер для отримання постів

btnGetPosts.addEventListener("click", () => {
    getPosts((response) => {
        renderPosts(response)
    });
});
// вітаємо 


function cardTemplate(post) {
    const card = document.createElement("div");
    // card.className = 'card'
    card.classList.add("card")
    const cardBody = document.createElement("div");
    cardBody.classList.add('card-body');
    const title = document.createElement('h4');
    title.classList.add('card__title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card__text');
    article.textContent = post.body;
    const cardId = document.createElement('p');
    cardId.classList.add('card__text');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';

    cardBody.append(title, article);
    card.appendChild(removeBtn);
    card.appendChild(cardBody);
    console.log(card)
    fragment.appendChild(card)
    // innerHTML - аналізує вміст як html
    // textContent - не аналізує html
    return card
}


function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card);
    })
    postBox.appendChild(fragment);
}
// функція яка створює фрагмент, викликає  функцію створення карточки 


btnAddPosts.addEventListener('click', (e) => {
    const newPost = {
        title: 'title post',
        body: 'body text post',
        id: 1,
    };
    createPost(newPost, response => {
        // console.log(response)
        const card = cardTemplate(response);
        postBox.insertAdjacentElement('afterbegin', card);
        // console.log(card);
    });
});





fragment.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const card = button.parentNode;
        const fragment = card.parentNode;
        if (button.textContent === 'remove') {
            fragment.removeChild(card);
        }
    }
});





function createPost(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response)
    });
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8")

    xhr.addEventListener('error', () => {
        console.log("error add");
    })

    xhr.send(JSON.stringify(body));
}