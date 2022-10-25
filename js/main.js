'use strict';
console.log('main.js');


const sectionTitleEl = document.getElementById('sectionTitle');



function makeStyleBig(element) {
    element.style.fontWeight = 'normal';
    element.style.fontSize = '2rem';
    element.style.marginBottom = '0.3rem';
}
makeStyleBig(sectionTitleEl);


// nusitaikyti i paragrafa su tekstu, uzdedi linijos auksti 1.5 ir padidini tarpa tarp raidziu keletu pikseliu, padaryti teksta pasvirusi i desine
const pEl = document.getElementById('para');

function pStyle(element) {
    element.style.lineHeight = 1.5;
    element.style.letterSpacing = '2px';
    element.style.fontStyle = 'italic';
}
pStyle(para);


// <input type="text" id="artColorInput" placeholder="Article spalva">
// ivedus spalva ta spalva turi nusidazyti article fonas. be mygtuko

const colorEl = document.getElementById('artColorInput');
function backgroundColor(element) {
    element.style.backgroundColor = 'grey';
    
}
colorEl.addEventListener('input', (event) => {
    console.log('input', event.target.value);
    const colorValueFromInput = event.target.value;
    sectionTitleEl.style.backgroundColor = colorValueFromInput;
    
});

//  <button>make article 50% width</button> paspaudus sumazina article ploti iki 50%

const artHalfBtnEl = document.getElementById('artHalf');
const articleEl = document.getElementById('article');

artHalfBtnEl.addEventListener('click', () => {
    console.log('half');
    articleEl.style.width = '50%';
    
});

// <button>Hide article</button> kai paspaudziam paslepia article elementa, ir pasikeicia tekstas i 'show article'

// paspaudus dar karta atvirkstinis efektas


const hideArtBtnEl = document.getElementById('hideArt');

hideArtBtnEl.addEventListener('click', toggleArticle);

function toggleArticle() {
    

    if (articleEl.style.display === 'none') {
        articleEl.style.display = 'block';
        hideArtBtnEl.textContent = 'Hide article';
    } else {
        articleEl.style.display = 'none';
        hideArtBtnEl.textContent = 'Show article';
    }
}


const specialBtn = document.getElementById('specialBtn');
specialBtn.addEventListener('click', () => {
    // sectionTitleEl.style.fontSize = '4rem';
    // articleEl.style.backgroundColor = 'coral';
    // articleEl.className += 'specialBtn';
    articleEl.classList.toggle('specialBtn')


});

