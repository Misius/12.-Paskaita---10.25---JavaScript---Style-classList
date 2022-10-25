'use strict';
console.log('accordion.js');


const allTitlesArr = document.querySelectorAll('.accTitle')





for (let titleEl of allTitlesArr) {
    titleEl.addEventListener('click', (event) => {
        console.log('click');
        // el and kurio paspaudziau
        const currentTitleEl = event.target;
        console.log(event.target);
        // parodyti akordiono teksta
        currentTitleEl.nexElementSibling.classList.toggle('show');
    });
}