'use strict';
console.log('classList.js');


// classList    API

// element.classList.add - prideti
// element.classList.remove - pasalinti
// element.classList.toggle - toglinti
// element.classList.contains - grazina ar yra tokia klase

// 1. uzdeti <main> klase container
const htmlEls = {
    main: document.querySelector('main'),
    ul: document.querySelector('ul'),
    h1: document.querySelector('h1'),
}
htmlEls.main.classList.add('container'); // prideda klase container


// 2. <ul class = 'unlisted'> uzdeto klase 'card;

htmlEls.ul.classList.add('card'); // prideda klase card

// 3. uzdeti h1 elementui klase mainTitle aprsyti css faile keleta taisykliu

htmlEls.h1.classList.add('mainTitle'); // prideda klase mainTitle

// 4. paspaudus ant h1 mes ijungiam arba isjungiam klase (toggle)

htmlEls.h1.addEventListener('click', () => {
    htmlEls.h1.classList.toggle('mainTitle')
});


// 5. atvaizduoti su alertu ar <ul xlass = 'unllisted'> turi klase .unllisted (toggle)


const isThereaClass = htmlEls.ul.classList.contains('unlisted');
console.log(isThereaClass);