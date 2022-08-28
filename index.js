// API https://animechan.vercel.app/api/quotes


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
    <p class="qoute-card-qoute">${quote.quote} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas earum autem corporis odit nemo recusandae dicta, ipsum cum maiores consequatur obcaecati quasi ea vero nisi expedita quam facilis fuga soluta reprehenderit? Modi odit numquam saepe et quas eum quisquam?</p>
    <p class="qoute-card-anime-character-name">~${quote.character}</p>
</div>`
}