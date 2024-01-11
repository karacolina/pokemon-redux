import PropTypes from "prop-types";
import { Card } from "./Card";
import "./cards.scss";

export const CardContainer = ({ pokemons, isLoading }) => {
  return (
    <ul className="gap mb-8 flex flex-wrap justify-center gap-6 align-middle">
      {pokemons
        ? Object.values(pokemons).map((item) => (
            <li className="card h-52 w-36 md:h-72 md:w-48" key={item.id}>
              <Card isLoading={isLoading} pokemon={item} />
            </li>
          ))
        : null}
    </ul>
  );
};

CardContainer.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
