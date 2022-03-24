"use strict";

const jsNewForm = document.querySelector(".new-form");
jsNewForm.classList.add("js-new-form");
jsNewForm.classList.remove("collapsed");

const input_search_desc = document.querySelector(".js_in_search_desc");
input_search_desc.value = "juguetón";
const descrSearchText = input_search_desc.value;

const jsList = document.querySelector(".list");
jsList.classList.add("js-list");

let url = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const alt = "gatito";
let cardTitle = "anastacio";
cardTitle = cardTitle.toUpperCase();
const cardRace = "British Shorthair";
let cardDescription =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

if (cardDescription.includes(descrSearchText)) {
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
  </li>`;
}

url =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
cardTitle = "fiona";
cardTitle = cardTitle.toUpperCase();
cardDescription =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

if (cardDescription.includes(descrSearchText)) {
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
}

url =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
cardTitle = "cielo";
cardTitle = cardTitle.toUpperCase();
cardDescription =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

if (cardDescription.includes(descrSearchText)) {
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
}
const nameCat = cardTitle.toUpperCase();

jsNewForm.classList.add("collapsed");

const plus = document.querySelector(".menu-nav");

plus.classList.add("plusHidden");

const itemPlus = document.querySelector(".item");
itemPlus.classList.add("js__item");

/*itemPlus.addEventListener("click", (event) => {
  event.preventDefault(event);
  jsNewForm.classList.toggle("collapsed");
});*/

const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMesageError = document.querySelector(".js-label-error");


btnAdd.addEventListener("click", (event) => {
  
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    //completa el código
  } labelMesageError.innerHTML = "Debe rellenar todos los valores";

});

function showNewCatForm() {
  jsNewForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  jsNewForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  console.log('holis');
  if(jsNewForm.classList.contains('collapsed')){
    showNewCatForm();
  }
  else{
    hideNewCatForm();
  }
}
itemPlus.addEventListener('click',handleClickNewCatForm);

