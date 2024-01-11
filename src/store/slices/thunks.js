import { pokemonApi } from "../../api/pokemonApi";
import { isLoading, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(isLoading());

    try {
      const allPokemons = await pokemonApi.get(
        `pokemon?limit=5&offset=${page * 10}`,
      );
      const pokemonResults = await allPokemons.data.results;

      const pokemonPromises = pokemonResults.map(async (item) => {
        const pokemonName = item.name;
        return dispatch(getSinglePokemon(pokemonName));
      });

      const pokemonList = await Promise.all(pokemonPromises);
      const filteredPokemonList = pokemonList.filter(
        (pokemon) => pokemon !== null,
      );

      dispatch(
        setPokemons({
          nextPage: page + 1,
          prevPage: page - 1,
          pokemons: filteredPokemonList,
        }),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getSinglePokemon = (pokemonName) => {
  return async (dispatch) => {
    dispatch(isLoading());

    try {
      const singlePokemon = await pokemonApi.get(`/pokemon/${pokemonName}`);
      const { id, name, sprites, types } = singlePokemon.data;

      const singlePokemonResult = {
        id: id,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        imageFront: sprites?.front_shiny,
        imageBack: sprites?.back_shiny,
        type: types.map((type) => type.type.name).join(", "),
      };

      return singlePokemonResult;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
};
