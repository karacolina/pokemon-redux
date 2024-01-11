import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    prevPage: 0,
    nextPage: null,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload }) => {
      state.isLoading = false;
      state.prevPage = payload.prevPage;
      state.nextPage = payload.nextPage;
      state.pokemons = payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isLoading, setPokemons } = pokemonSlice.actions;
