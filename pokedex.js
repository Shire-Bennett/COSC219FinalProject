const pokedex = document.getElementById("pokedex");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

let allPokemon = [];

async function loadPokemon() {
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();
    allPokemon.push(data);
  }
  displayPokemon(allPokemon);
}

function displayPokemon(list) {
  pokedex.innerHTML = "";

  list.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <h3>#${data.id} ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
    `;

    pokedex.appendChild(card);
  });
}

function searchPokemon() {
  const text = searchBar.value.toLowerCase();
  const filtered = allPokemon.filter(poke => poke.name.includes(text));
  displayPokemon(filtered);
}

searchBtn.addEventListener("click", searchPokemon);
searchBar.addEventListener("keyup", searchPokemon);

loadPokemon();
