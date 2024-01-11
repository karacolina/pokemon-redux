import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/thunks";

import { CardContainer } from "./components/Card/CardContainer";
import { Button } from "./components/Button/Button";

export const PokemonApp = () => {
  const {
    isLoading,
    prevPage,
    nextPage,
    pokemons = [],
  } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handlePrevPage = () => {
    if (prevPage >= 0) {
      dispatch(getPokemons(prevPage));
    }
  };

  const handleNextPage = () => {
    dispatch(getPokemons(nextPage));
  };

  return (
    <div className="container">
      <div className="grid min-h-screen place-content-center">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-700">
          Pokemon App
        </h1>

        <CardContainer pokemons={pokemons} isLoading={isLoading} />

        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <Button onClick={handlePrevPage} disabled={prevPage < 0 || isLoading}>
            Prev pokemons
          </Button>

          <Button onClick={handleNextPage} disabled={isLoading}>
            Next pokemons
          </Button>
        </div>
      </div>
    </div>
  );
};
