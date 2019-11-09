const endpoint = 'https://gwo.pl/booksApi/v1/search?query=historia';

books = [];

fetch(endpoint)
    .then(resp => resp.json())
    .then(data => books.push(...data));
    // .then(resp => {
    //     // console.table(resp);
    //     resp.forEach(book => {
    //         console.groupCollapsed(`Tytuł: ${book.title}`)
    //         console.log(`Autorzy: ${book.author}`);
    //         console.log(`ISBN: ${book.isbn}`);
    //         console.log(`Nr dopuszczenia MEN: ${book.men}`);
    //         console.log(`Liczba stron: ${book.pages_count}`);
    //         console.log(`Poziomy nauczania: ${book.levels}`);
    //         console.log(`Przedmiot: ${book.subject}`);
    //         console.log(`Rodzaj publikacji (podręcznik, zeszyt ćwiczen, materialy dodatkowe: ${book.type}`);
    //         console.log(`Okładka: ${book.cover}`);
    //         console.log(`URL: ${book.url}`);
    //         console.groupEnd();
    //     });
    // });

function findMatches(wordToMatch, books) {
    return books.filter(book => {
        return (book.title.match(wordToMatch) || book.author.match(wordToMatch));
    });
}

function displayMatches() {
    const wordToMatch = searchInput.value;
    const matchArray = findMatches(wordToMatch, books);
    const html = matchArray.map(book => {
        return `
        <li>
            <span class="name">${book.title}, ${book.author}</span>
        </li>
        `;
    }).join(" ");
    results.innerHTML = html;
}

const searchInput = document.getElementById("searcher");
const submitBtn = document.getElementById("submit");
const results = document.querySelector(".form__list-results");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    displayMatches();
});
