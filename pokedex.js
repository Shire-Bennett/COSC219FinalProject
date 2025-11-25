
const pokedex = document.getElementById("pokedex");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

let allPokemon = [];

async function loadPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const list = await response.json();

  pokedex.innerHTML = list.results.map((p, i) => `
    <div class="pokemon-card loading" id="p${i+1}">
      <div class="loader"></div>
      <h3>Loading...</h3>
    </div>
  `).join("");

  list.results.forEach(async (p, i) => {
    const data = await fetch(p.url).then(r => r.json());
    allPokemon[i] = data;

    const card = document.getElementById(`p${i+1}`);
    card.classList.remove("loading");
    card.innerHTML = `
      <img src="${data.sprites.front_default}">
      <h3>#${data.id} ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
    `;
  });
}

function displayPokemon(list) {
  pokedex.innerHTML = "";

  list.forEach(data => {
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

  const filtered = allPokemon.filter(poke =>
      poke.name.includes(text) || poke.id.toString().includes(text)
  );

  displayPokemon(filtered);
}

searchBtn.addEventListener("click", searchPokemon);
searchBar.addEventListener("keyup", searchPokemon);
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchPokemon();
});

loadPokemon();
