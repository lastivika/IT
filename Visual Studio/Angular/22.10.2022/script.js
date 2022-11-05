const btnGetPosts = document.querySelector(".get-posts") 
const postBox = document.querySelector(".posts-box") 

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
}

btnGetPosts.addEventListener("click", () => {
    getPosts((response) =>{
        const fragment = document.createDocumentFragment();
        response.forEach(post => {
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
            const cardId = document.createElement('p');
            article.classList.add('card__text');
            article.textContent = post.body;
            cardBody.append(title, article);
            card.appendChild(cardBody);
            console.log(card)
            fragment.appendChild(card)
            // innerHTML - аналізує вміст як html
            // textContent - не аналізує html
            
        });
        postBox.appendChild(fragment);
        
    });
})

