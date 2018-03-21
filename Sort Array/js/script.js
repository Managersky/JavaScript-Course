const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
                'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsList = document.getElementById("bands");

function deleteArticles(bands) {
    // const articles = ["a", "an", "the"];
    // const regExpSort = new RegExp('^(?:(' + articles.join('|') + ') )(.*)$');
    return bands.replace(/^(a |the|an )/i, "").trim();
}

function sortBand() {
    const sortBandsName = bands.sort((a,b) => {
        return deleteArticles(a) > deleteArticles(b) ? 1 : -1;
    });

    for (let i = 0; i < sortBandsName.length; i++) {
        bandsList.innerHTML += `
            <li>${sortBandsName[i]}</li>
        `;
    }
}

sortBand();