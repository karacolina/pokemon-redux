//peticion asincrona
import { pokemonApi } from "../../api/pokemonApi";
import { isLoading, setPokemons } from "./pokemonSlice"

let todosPokemones = [];

export const getPokemons = ( page = 0) => {
    return async(dispatch) => {

        dispatch(isLoading);

        todosPokemones = [];


        try {

        //peticion endpoint para traer todos los pokemons
        const allPokemons = await pokemonApi.get(`pokemon?limit=10&offset=1`)
        const pokemonResults = await allPokemons.data.results;


        pokemonResults.map( (item) => {
            const pokemonName = item.name;
            dispatch(getSinglePokemon(pokemonName));
        });
    
        //const pokemonList = await Promise.all(pokemonPromise);

        console.log(pokemonResults)

        //Despachamos la funcion, con los datos necesarios
        
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        dispatch(setPokemons({ page: page }));
    }
}

export const getSinglePokemon = (pokemonName) => {
    return async( dispatch) => {

        dispatch(isLoading);

        try {

            const singlePokemon = await pokemonApi.get(`/pokemon/${pokemonName}`);
            const { id, name, sprites } =  singlePokemon.data;



            const singlePokemonResult = {
                id: id,
                name: name,
                image: sprites.front_default,
              };

              console.log(singlePokemonResult);


            //datos de los pokemons

            todosPokemones = [...todosPokemones, singlePokemonResult ];


            //console.log('set pokemon:', singlePokemonResult)
           dispatch(setPokemons(todosPokemones));
           //return singlePokemonResult;

           

        } catch (error) {
            console.error("Error fetching data:", error);
            return null
        }
  
    }
}