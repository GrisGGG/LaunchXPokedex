const fetchPokemon = () => {
    const pokeInput = document.getElementById("name")
    let namePokemon = pokeInput.value;
    namePokemon = namePokemon.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
    fetch(url).then((res) => {
        if (res.status != "200"){ /*Status 200 que ha tenido exito */
        pokeImage("./poketriste.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data){
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let typepokemon = data.types[0].type.name;
            pokeType(typepokemon);
            let heightPokemon = data.height;
            pokeHeight(heightPokemon);
            let movesPokemon = data.moves[0].move.name;
            let sndMove = data.moves[1].move.name;
            let trdMove = data.moves[2].move.name;
            pokeMoves(movesPokemon +"," + sndMove + "," + trdMove);
            let statsPokemon = data.stats[0].stat.name;
            let base_Stat = data.stats[0].base_stat;
            let effort = data.stats[0].effort;
            pokeStats("Name: " + statsPokemon + "\nBase stat: " + base_Stat + "\nEffort: " + effort);
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeType = (url) =>{
    const typePokemon = document.getElementById("type-pokemon");
    typePokemon.innerText = ("Type: " + url);
    
}
const pokeHeight = (url) =>{
    const heightPoke = document.getElementById("height-pokemon");
    heightPoke.innerText = ("Height: " + url);
}
const pokeMoves = (url) =>{
    const movesPoke = document.getElementById("moves-pokemon");
    movesPoke.innerText = ("Moves \n " + url)
}
const pokeStats = (url) =>{
    const statsPoke = document.getElementById("stats-pokemon");
    statsPoke.innerText = ("Stats \n" + url);
}