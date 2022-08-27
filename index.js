// API https://animechan.vercel.app/api/quotes


async function renderQuotes(){
    const quotes = await fetch("https://animechan.vercel.app/api/quotes")
    const quotesData = await quotes.json("")
    const quotesListEl = document.querySelector(' .quote-cards')
    quotesListEl.innerHTML = quotesData.map((quote) => quoteHTML(quote)).join("")
}

//renderQuotes()

function quoteHTML(quote){
    return ``
}