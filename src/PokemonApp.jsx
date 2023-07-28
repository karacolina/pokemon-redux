import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/thunks";

export const PokemonApp = () => {
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(page)); // Llama a la función getPokemons con la página actual al cargar la app
  }, []);

  const handleNextPage = () => {
    dispatch(getPokemons(page + 1)); // Llama a la función getPokemons con la siguiente página al hacer clic en el botón "Next pokemons"
  };

  return (
    <>
      <h1>pokemon App</h1>

      <p>Loading {isLoading ? "cargando..." : "Cargado"}</p>

      <p>{JSON.stringify(pokemons)} </p>

      <ul style={{ display: "flex", justifyContent: "center", gap: 5 }}>
        {pokemons
          ? pokemons.map(({ id, name, image }) => (
              <li key={id}>
                <p>
                  <strong>{name}</strong>
                </p>
                <img src={image} alt={name} />
                <p>ID: {id}</p>
              </li>
            ))
          : null}
      </ul>

      <button type="button" onClick={handleNextPage}>
        Next pokemons
      </button>
    </>
  );
};
