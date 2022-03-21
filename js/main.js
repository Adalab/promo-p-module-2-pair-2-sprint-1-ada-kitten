'use strict';

const jsNewForm = document.querySelector('.new-form');
jsNewForm.classList.add('js-new-form');
jsNewForm.classList.remove('collapsed');


const jsList = document.querySelector('.list');
jsList.classList.add('js-list');

let url = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const alt = 'gatito';
let cardTitle = 'anastacio';
cardTitle = cardTitle.toUpperCase();
const cardRace = 'British Shorthair';
let cardDescription = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


jsList.innerHTML += `<li class="card">
<article>
  <img
    class="card_img"
    src="${url}"
    alt="${alt}"
  />
  <h3 class="card_title">${cardTitle}</h3>
  <h4 class="card_race">${cardRace}</h4>
  <p class="card_description">${cardDescription}</p>
</article>
</li>`

url = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
cardTitle = 'fiona';
cardTitle = cardTitle.toUpperCase();
cardDescription = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


jsList.innerHTML += `<li class="card">
<img
  class="card_img"
  src="${url}"
  alt="${alt}"
/>
<h3 class="card_title">${cardTitle}</h3>
<h4 class="card_race">${cardRace}</h4>
<p class="card_description">${cardDescription}</p>
</li>`;

url = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
cardTitle = 'cielo';
cardTitle = cardTitle.toUpperCase();
cardDescription = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


jsList.innerHTML += `<li class="card">
<img
  class="card_img"
  src="${url}"
  alt="${alt}"
/>
<h3 class="card_title">${cardTitle}</h3>
<h4 class="card_race">${cardRace}</h4>
<p class="card_description">${cardDescription}</p>
</li>`;

const nameCat = cardTitle.toUpperCase();