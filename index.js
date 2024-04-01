// let animationBlock = document.getElementById("animation-block");
//     setTimeout(() => {
//         animationBlock.classList.add("hidden");
//         let container = document.getElementById('container');
//         container.classList.remove("hidden");
// }, 1000);
// let animationBlock = document.getElementById("animation-block");
//     setTimeout(() => {
//         animationBlock.classList.add("hidden");
//         let container = document.getElementById('container');
//         container.classList.remove("hidden");
// }, 1000);
let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0dea7395a6044585b3cc6d989a0d48a0`;

const news_Articles = document.getElementById('news-Articles');

const fetchNews = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        news_Articles.innerHTML = ''; // Clear previous articles

        data.articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item', 'm-5', 'rounded-lg', 'bg-violet-500', 'p-5', 'shadow-2xl', 'shadow-violet-950');
            newsItem.innerHTML = `
                <img class="w-full max-h-[50%]" src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="${article.title}" />
                <h1 class="my-2 text-center font-bold text-white">${article.title}</h1>
                <p class="text-slate-950">${article.description ? article.description.slice(0, 100) + "....." : ""}</p>
                <button class="mt-3 rounded bg-red-500 p-2 text-white ring-2 hover:bg-red-600"><a href="${article.url}" target="_blank">READ MORE ...</a></button>
            `;
            news_Articles.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

fetchNews();

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        const category = event.target.textContent.toLowerCase();
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=0dea7395a6044585b3cc6d989a0d48a0`;
        fetchNews();
    }
});
