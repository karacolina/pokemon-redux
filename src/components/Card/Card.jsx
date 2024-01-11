import PropTypes from "prop-types";
import { Loader } from "../Loader/Loader";

export const Card = ({ pokemon, isLoading }) => {
  return (
    <div className="card__inner">
      <div className="card__front bg-gradient-to-t from-yellow-300 to-lime-300 shadow-lg">
        {isLoading ? (
          <Loader />
        ) : (
          <img src={pokemon.imageFront} alt={pokemon.name} />
        )}

        <div className="card__details">
          <p className="text-slate-700">
            Name: <strong> {pokemon.name}</strong>
          </p>
          <p className="text-slate-700">ID: {pokemon.id}</p>
        </div>
      </div>

      <div className="card__back bg-gradient-to-t from-yellow-200 to-lime-200 shadow-lg">
        <img src={pokemon.imageBack} alt={pokemon.name} />
        <p>
          <strong>{pokemon.name}</strong>
        </p>
        <p className="text-gray-600">
          <em>{pokemon.type}</em>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageFront: PropTypes.string.isRequired,
    imageBack: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
};
