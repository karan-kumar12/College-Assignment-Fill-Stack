const container = document.getElementById("news-container");

// Load default news when page loads
window.addEventListener("load", () => {
    fetchNews("technology");
});

async function fetchNews(query){

    const url = `https://hn.algolia.com/api/v1/search?query=${query}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log("data:", data);

    showNews(data.hits);
}

function showNews(articles){

    container.innerHTML = "";

    articles.forEach(article => {

        const div = document.createElement("div");
        div.classList.add("news");

        div.innerHTML = `
            <h3>${article.title || "No Title"}</h3>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        container.appendChild(div);

    });
}

function searchNews(){
    const topic = document.getElementById("topic").value;
    fetchNews(topic);
}