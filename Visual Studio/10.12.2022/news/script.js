// const searchControls = document.querySelector('.search-controls');
// const searchInput = document.querySelector('.search-input');


// function customHttp(url) {

//     // console.log(url);

//     return {
//         get(url, cb) {
//             console.log(url);
//             const xhr = new XMLHttpRequest()
//             xhr.open('GET', url);
//             xhr.send();

//             xhr.addEventListener('load', () => {
//                 const response = JSON.parse(xhr.responseText);
//                 cb(response);
//                 // console.log(response);

//             });
//         }
//     }
// }



// function myHttpRequest({ method, url } = {}, cb) {

//     try {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url);
//         xhr.addEventListener('load', () => {
//             if (Math.floor(xhr.status / 100) !== 2) {
//                 cb(`Помилка. status code: ${xhr.status} `, xhr)
//                 return
//             }
//             const response = JSON.parse(xhr.responseText);
//             cb(null, response)
//         })
//         xhr.addEventListener('error', () => {
//             console.log('error');
//         })
//     } catch (error) {
//         cb(error)
//     }

//     xhr.send()

// }


// myHttpRequest(
//     {
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts',
//     },
//     (err, res) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(res);
//     }
// )


// function http() {
//     return {
//         get(url, cb) {
//             try {
//                 const xhr = new XMLHttpRequest()
//                 xhr.open("GET", url);
//                 xhr.addEventListener('load', () => {
//                     if (Math.floor(xhr.status / 100) !== 2) {
//                         cb(`Помилка. status code: ${xhr.status} `, xhr)
//                         return
//                     }
//                     const response = JSON.parse(xhr.responseText);
//                     cb(null, response)
//                 })
//                 xhr.addEventListener('error', () => {
//                     console.log('error');
//                 })
//                 xhr.send()
//             } catch (error) {
//                 cb(error)
//             }


//         },


//     }
// }


// const myHttp = http();

// // console.log(myHttp.get());
// myHttp.get('https://jsonplaceholder.typicode.com/posts', (error, resp) => {
//     console.log(resp);
// });

// const http = customHttp();





// const searchControls = document.querySelector('.search-controls');
// const searchInput = document.querySelector('.search-input');

// // const searchForm = document.querySelector('#search-form')

// // const form = document.forms['search-form']
// // const countrySelect = form.elements('')

// function customHttp() {
//     return {
//         get(url, cb) {
//             try {
//                 const xhr = new XMLHttpRequest()
//                 xhr.open("GET", url);
//                 xhr.addEventListener('load', () => {
//                     if (Math.floor(xhr.status / 100) !== 2) {
//                         cb(`ERROR. status code: ${xhr.status} `, xhr)
//                         return
//                     }
//                     const response = JSON.parse(xhr.responseText);
//                     cb(null, response)
//                 })
//                 xhr.addEventListener('error', () => {
//                     console.log('error');
//                 })
//                 xhr.send()
//             } catch (error) {
//                 cb(error)
//             }


//         },


//     }
// }



// const http = customHttp();



// const newService = (function () {
//     const apiKey = '6ab27e4b354e4744994997d2f701f048';
//     const apiUrl = 'https://newsapi.org/v2';



//     return {
//         topHeadlines(countryua = 'ua', cb) {
//             http.get(`${apiUrl}/top-headlines?country=${countryua}&category=technology&apiKey=${apiKey}`, cb);
//         },
//         everything(query, cb) {

//             http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
//         }
//     }

// })();


// // base news function


// function loadNews() {
//     newService.topHeadlines('ua', onGetResponse)
// }

// // get response function

// function onGetResponse(err, res) {
//     // console.log(res);
//     // console.log(err);

//     // console.log('sdfsdf');
//     renderNews(res)
// }


// //  dom loaded

// document.addEventListener('DOMContentLoaded', function () {
//     loadNews();
// })


// // render new function

// function renderNews(news) {
//     const newsContainer = document.querySelector('.news-section__container');
//     console.log(news);
//     let fragment = '';
//     news.articles.forEach(newsItem => {
//         const el = newsTemplate(newsItem)
//         fragment += el
//     });

//     newsContainer.insertAdjacentHTML('afterbegin', fragment)
// }

// searchBtn.addEventListener('click', function (e) {
//     e.preventDefault();


//     const country = countrySelect.value;
//     const theme = themeInput.value;
//     console.log(country, theme);



//     function loadNews() {
//         newService.topHeadlines(country, theme, onGetResponse)
//     }

//     loadNews();


// })

// form.addEventListener("submit", (e) =>{
//     newsContainer.innerHTML = loadNews()
//     e.preventDefault();
//     pop()
// })

// function newsTemplate({ urlToImage, title, url, description }) {
//     if (urlToImage == undefined) {
//         urlToImage = 'https://images8.alphacoders.com/563/thumb-1920-563155.jpg'
//     }

//     return `
//     <div class="card-news">
//     <div class="card-news__img">
//         <img src="${urlToImage}" alt="">
//     </div>
//     <div class="card-news__content">
//     <div class="card-news__title">${title || ''}</div>
//     <div class="cards-news__desc">
//         ${description || ''}
//     </div>
//     <a href="${url}" class="card-news__btn">Переглянути</a>
// </div>
// </div>
//     `
// }

//----------------------------------------------------------------------------------------------








































const searchControls = document.querySelector('.search-controls');
const themeInput = document.querySelector('.theme');
const countrySelect = document.querySelector('.country');
const searchBtn = document.querySelector('.search-btn');
const form = document.querySelector('.search-form');

const container = document.querySelector('.news-section__container');



function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest()
                xhr.open("GET", url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`ERROR. status code: ${xhr.status}`, xhr)
                        return
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response)
                })
                xhr.addEventListener('error', () => {
                    console.log('error');
                })
                xhr.send()
            } catch (error) {
                cb(error)
            }


        },


    }
}



const http = customHttp();



const newService = (function () {
    const apiKey = '6ab27e4b354e4744994997d2f701f048';
    const apiUrl = 'https://newsapi.org/v2';



    return {
        topHeadlines(country = 'ua', category = 'technology', cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, cb);
        },

        everything(query, cb) {

            http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
        }
    }

})();





searchBtn.addEventListener('click', function (e) {
    e.preventDefault();


    const country = countrySelect.value;
    const theme = themeInput.value;
    console.log(country, theme);



    function loadNews() {
        newService.topHeadlines(country, theme, onGetResponse)
    }

    container.innerHTML = loadNews();
    // pop()

    form.reset()


})



function onGetResponse(err, res) {

    console.log('sdfsdf');
    renderNews(res)
}




function renderNews(news) {    
    const newsContainer = document.querySelector('.news-section__container');
    console.log(news);
    let fragment = '';
    news.articles.forEach(newsItem => {
        const el = newsTemplate(newsItem)
        fragment += el
    });

    newsContainer.insertAdjacentHTML('afterbegin', fragment)
}


function newsTemplate({ urlToImage, title, url, description }) {
    if (urlToImage == undefined) {
        urlToImage = 'https://images.prismic.io/cinsa/c42a5aaf-d00b-4be2-8af4-a8b1a427fce3_cinsa_ventajas_electrico_ecologico.jpg?auto=compress'
    } 
 

    // if (country == 'ua') {
    //     img = 'https://images8.alphacoders.com/563/thumb-1920-563155.jpg'
    // } else if (country == 'pl') {
    //     img = "https://oscarazal.files.wordpress.com/2014/08/flag-of-poland.jpg?w=866&h=574"
    // } else {
    //     img = 'https://thumbs.dreamstime.com/b/rustic-american-flag-look-31157931.jpg'
    // }


    return `<div class="card-news">
    <img class="card-news__img" src="${urlToImage}" alt="">
    <div class="card-information">
    <div class="card-news__title">${title || ''}</div>
    <div class="card-news__content">${description || ''}</div>
    <a href="${url}" class="card-news__btn">View</a>
    </div>
</div>`
}