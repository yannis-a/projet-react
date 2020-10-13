import Pokemon from "./pokemon";


export const POKEMONS: Pokemon[] = [
    {
        id : 1,
        hp : 25,
        cp : 5,
        name : "Bulbizarre",
        picture : "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types : ["plante", "poison"],
        created : new Date()
    },
    {
        id : 4,
        hp : 25,
        cp : 5,
        name : "Salamèche",
        picture : "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types : ["feu"],
        created : new Date()
    },
    {
        id : 7,
        hp : 25,
        cp : 5,
        name : "Carapuce",
        picture : "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types : ["eau"],
        created : new Date()
    }
]