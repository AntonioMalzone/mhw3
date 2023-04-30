function onJson(json) {
  console.log('JSON ricevuto');
  const grid = document.querySelector('#grid');
  //Svuoto grid
  grid.innerHTML = '';
  const results = json.results;
  let num_results = results.length;
  if (num_results > 10) {
    num_results = 10
  }
  for (let i = 0; i < num_results; i++) {
    const title = document.createElement('span');
    const img = document.createElement('img');
    if (results[i].image !== '') {
      img.src = results[i].image;
    }
    else {
      img.src = './non_disponibile.webp';
    }
    title.textContent = results[i].title;
    const locandina = document.createElement('div');

    locandina.classList.add('locandina');
    title.classList.add('title');
    locandina.appendChild(img);
    locandina.appendChild(title);
    grid.appendChild(locandina);
  }

}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function search() {
  event.preventDefault();

  const name = document.querySelector('#searchbar');
  const value = name.value;

  fetch('https://imdb-api.com/en/API/SearchMovie/' + my_key + '/' + value)
    .then(onResponse).then(onJson)



}

function ricarica(event) {
  location.reload();
}

function onResponse2(res) {
  console.log('Risposta ricevuta');
  return res.json();
}

function onJson2(json) {
  console.log('JSON ricevuto');
  const grid = document.querySelector('#grid');
  //Svuoto grid
  grid.innerHTML = '';
  const results = json.items;
  let num_results = 10;
  const description = document.createElement('div');
  description.textContent = 'Top 10 movies';
  description.classList.add('descrizione');
  grid.appendChild(description);
  for (let i = 0; i < num_results; i++) {
    const title = document.createElement('span');
    const img = document.createElement('img');
    if (results[i].image !== '') {
      img.src = results[i].image;
    }
    else {
      img.src = 'https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg';
    }
    title.textContent = results[i].title;
    const locandina = document.createElement('div');

    locandina.classList.add('locandina');
    title.classList.add('title');
    locandina.appendChild(img);
    locandina.appendChild(title);
    grid.appendChild(locandina);
  }

}

const my_key = 'k_zx6a70e1';

// Aggiungi event listener al form
const form = document.querySelector('form');
form.addEventListener('submit', search);
const logo = document.querySelector('.ricarica');
logo.addEventListener('click', ricarica);

fetch('https://imdb-api.com/en/API/Top250Movies/' + my_key)
  .then(onResponse2)
  .then(onJson2)


