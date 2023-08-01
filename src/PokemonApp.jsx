import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/thunks";

export const PokemonApp = () => {
  const {
    isLoading,
    page,
    pokemons = [],
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleNextPage = () => {
    dispatch(getPokemons(page));
  };

  return (
    <>
      <h1>Pokemon App</h1>

      <p>Loading {isLoading ? "cargando..." : "Cargado"}</p>

      <ul style={{ display: "flex", justifyContent: "center", gap: 5 }}>
        {pokemons
          ? Object.values(pokemons).map((item) => (
              <li key={item.id}>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <img src={item.image} alt={item.name} />
                <p>ID: {item.id}</p>
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
