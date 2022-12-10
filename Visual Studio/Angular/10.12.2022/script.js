const searchControls = document.querySelector('.search-controls');
const searchBtn = document.querySelector('search-btn');
const searchInput = document.querySelector('search-input')






function customHttp() {
    return {
        get(url, cb) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url);
            xhr.send();
        }
    }
};

const http = customHttp()

const newService = function () {
    const apiKey = '6ab27e4b354e4744994997d2f701f048';
    const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-11-10&sortBy=publishedAt&apiKey=6ab27e4b354e4744994997d2f701f048';

    return {
        topHeadlines(country = 'ua', cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`)
        },
        everything(query, cb) {
            http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`)
        }
    }
}();
//base news function

function loadNew() {
    newService.topHeadlines('ua', cb)
}

//get response function
function onGetResponse(err, res) {
    console.log(res);
}

//downloaded

document.addEventListener('DOMContentLoaded', function () {
    loadNews()
})


//render news function
function renderNews(news) {
    const newsContainer = document.querySelector('.news-section__container');
    news.forEach(newsItems =>{
        const el = newsTemplate(newsItems)
    });
}

function newsTemplate(news){
    
}

