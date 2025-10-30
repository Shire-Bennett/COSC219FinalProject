const pokedex = document.getElementById("pokedex");

async function loadPokemon() {
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();

    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <h3>#${i} ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
    `;

    pokedex.appendChild(card);
  }
}

loadPokemon();
