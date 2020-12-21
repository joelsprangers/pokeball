

//selectors
let pokeBall = document.querySelector(".button-get");
let resetBall = document.querySelector(".button-reset");
let pokeEventSpace = document.querySelector(".poke-event");
let pokeType = document.querySelector(".poke-type");
let pokeImg = document.querySelector(".poke-image");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
let randomPokemon = () => Math.floor(Math.random() * 500);

//get a pokemon and display it with type(s)
const getPokemon = async (id) => {
    const result = await fetch(`${baseUrl}${id}`);
    const json = await result.json();

    let types = json.types.map(type => type.type.name);

    if (json.sprites.other.dream_world.front_default != null) {
        pokeImg.src = json.sprites.other.dream_world.front_default;
    } else {
        pokeImg.scr = "img/pokeball_500.png";
    }

    if (types.length > 1) {
        pokeType.innerHTML = `You caught a wild ${json.species.name}!! This pokémon is of the following types: ${types.join(', ')}.`;
    } else {
        pokeType.innerHTML = `You caught a wild ${json.species.name}!! This pokémon is of type ${types.join(', ')}.`
    }
}

//reset ball
const resetPokeball = () => {
    pokeImg.classList.remove("poke-image__show");
    pokeImg.src = "#";
    pokeType.innerHTML = '';
    pokeBall.classList.remove("pokeball__rotate");

}

//eventlisteners
resetBall.addEventListener("click", resetPokeball);
pokeBall.addEventListener("click", () => {
    resetPokeball();
    getPokemon(randomPokemon());
    pokeBall.classList.add("pokeball__rotate");
    pokeImg.classList.add("poke-image__show")
});




