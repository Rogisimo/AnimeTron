// API https://animechan.vercel.app/api/quotes


async function renderQoutes(){
    const quotes = await fetch("https://animechan.vercel.app/api/quotes")
    const quotesData = await quotes.json("")
    const quotesListEl = document.querySelector(' .quote-cards')
    quotesListEl.innerHTML = quotesData.map((quote) => quoteHTML(quote)).join("")
}

renderQoutes()

function quoteHTML(quote){
    return `<div class="quote-card">
    <h2 class="quote-card-anime-name">${quote.anime}</h2>
    <h2 class="qoute-card-anime-character-name">${quote.character}</h2>
    <h4 class="qoute-card-qoute">${quote.quote}</h4>
</div>`
}