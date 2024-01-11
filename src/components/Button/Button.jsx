import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, disabled }) => {
  const { isLoading } = useSelector((state) => state.pokemons);

  const handleClick = (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    onClick();
  };

  return (
    <button
      className=" m-2 max-w-56 rounded-full border-2 border-purple-500 px-4 py-2 text-purple-500 hover:bg-purple-600 hover:text-white disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
      type="button"
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
