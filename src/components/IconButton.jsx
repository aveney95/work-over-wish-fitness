// src/components/IconButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/IconButton.css';

const IconButton = ({ icon, label, onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
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
