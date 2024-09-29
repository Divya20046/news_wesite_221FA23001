const apiKey = '94729dbab27f456cb3207479ea49a1fe'; 
const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <img src="${article.urlToImage}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}
window.onload = fetchNews;
