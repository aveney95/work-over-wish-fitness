// src/components/ExerciseCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ExerciseCard.css';

const ExerciseCard = ({ name, imageUrl, description }) => {
  return (
    <div className={styles.exerciseCard}>
      <img src={imageUrl} alt={name} className={styles.exerciseImage} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

ExerciseCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ExerciseCard;
