const API_KEY = '3e2ba7534db74e91ba49f88e4a234a03'
const source = 'google-news'
const url = 'https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + API_KEY

async function fetchNews () {
  try {
    const result = await fetch(url).then(res => res.json())
    const articles = result.articles
    let content = ''
    articles.forEach(article => {
      if (article && article.title && article.description) {
        const piece = `
            <article class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img src="${article.urlToImage}"/>
                </p>
              </figure>
              <div class="media-content">    
                <div class="content">
                  <p>
                    <strong class="title is-5"><a href="${article.url}">${article.title}</a></strong> <p class="subtitle is-6">${article.publishedAt}</p>
                  </p>
                  <p>${article.description}</p>
                </div>
              </div>
            </article>
          `
        content += piece
      }
    })
    document.getElementById('news').innerHTML = content
  } catch (e) {
    console.error('could not fetch news!', e)
  }
}

fetchNews()
