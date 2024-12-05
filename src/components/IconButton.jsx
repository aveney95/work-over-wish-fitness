
import PropTypes from 'prop-types';
import '../styles/IconButton.css';

const IconButton = ({ icon, label, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
