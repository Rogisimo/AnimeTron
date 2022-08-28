// API https://animechan.vercel.app/api/quotes 10 random
//https://animechan.vercel.app/api/quotes/anime?title=naruto by anime name
//https://animechan.vercel.app/api/quotes/character?name=saitama by character name



async function searchByAnimeName(){
    let input = document.getElementById("searchInput").value;
    const quotes = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${input}`)
    const quotesData = await quotes.json("")
    const quotesListEl = document.querySelector(' .quote-cards')
    quotesListEl.innerHTML = quotesData.map((quote) => quoteHTML(quote)).join("")
    //document.getElementById("quotes-header").innerHTML = `Search results for: ${input}`
}

async function renderQuotes(){
    const quotes = await fetch("https://animechan.vercel.app/api/quotes")
    const quotesData = await quotes.json("")
    const quotesListEl = document.querySelector(' .quote-cards')
    quotesListEl.innerHTML = quotesData.map((quote) => quoteHTML(quote)).join("")
}

renderQuotes()

function quoteHTML(quote){
    return `<div class="quote-card">
    <h2 class="quote-card-anime-name">${quote.anime}</h2>
    <p class="qoute-card-qoute">${quote.quote}</p>
    <p class="qoute-card-anime-character-name">~${quote.character}</p>
</div>`
}

