const btnGetPosts = document.querySelector(".get-posts") 

function getPosts() {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        console.log('Все ок');
        console.log(xhr.response)
        const response = JSON.parse(xhr.response)
        console.log(response);
        callback()
    })


    xhr.addEventListener('error', () => {
        console.log('Все не ок');

    })
    xhr.send()
}

btnGetPosts.addEventListener("click", () => {
    getPosts((response =>{
        console.log(response)
    }));
})

