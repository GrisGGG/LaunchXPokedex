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

        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeType = (url) =>{
    const typePokemon = document.getElementById("type-pokemon");
    typePokemon.innerText = url;
}