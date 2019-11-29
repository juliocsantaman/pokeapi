let divPokemon = document.getElementById("pokemon-box");

fetch("https://pokeapi.co/api/v2/pokemon/25")
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);

  const name = json.name;
  const type = json.types[0].type.name;
  const imgUrl = json.sprites.front_default;

  let output = renderPokemon(name, type, imgUrl);

  divPokemon.innerHTML = output;

});

function renderPokemon(name, type, imgUrl) {

  return `
  
  <div class="pokemon-box-2">
    

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Type:</strong> ${type}</p>
    <img src="${imgUrl}" alt="${name}" title="${name}">

  </div>

  `;
  
}

