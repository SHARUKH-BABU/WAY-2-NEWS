invoke();

const invoke = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0dea7395a6044585b3cc6d989a0d48a0`;
    let data  = await fettch(url);
    let parsedData = await data.json();

    // Access the articles array from the parsedData
    let articles = parsedData.articles;
    console.log(articles)

    // Loop through the articles array and perform DOM manipulation
    articles.forEach((article, index) => {
        let container = document.getElementById('container');
        let newsItem = document.createElement('div');
        newsItem.classList.add('news-item', 'm-5', 'rounded-lg', 'bg-violet-500', 'p-5', 'shadow-2xl', 'shadow-violet-950');
        newsItem.innerHTML = `
            <img class="w-full max-h-[50%]" src="${article.urlToImage}" alt="${article.title}" />
            <h1 class="my-2 text-center font-bold text-white">${article.title}</h1>
            <p class="text-slate-950">${article.description ? article.description.slice(0, 100)+"....." : ""}</p>
            <button class="mt-3 rounded bg-red-500 p-2 text-white ring-2 hover:bg-red-600"><a href="${article.url}" target="_blank">READ MORE ...</a></button>
        `;
        container.appendChild(newsItem);
    });
}
