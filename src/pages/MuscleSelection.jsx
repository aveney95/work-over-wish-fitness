// src/pages/MuscleSelection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IconButton from '../components/IconButton';
import { FaDumbbell } from 'react-icons/fa';
import styles from '../styles/MuscleSelection.css';

const MuscleSelection = () => {
  const muscleGroups = ['Biceps', 'Triceps', 'Quads', 'Hamstrings', 'Glutes', 'Abs'];

  return (
    <div className={styles.muscleSelection}>
      <Header />
      
      <main className={styles.muscleContent}>
        <h2>Select a Muscle Group</h2>
        <div className={styles.muscleOptions}>
          {muscleGroups.map((muscle) => (
            <Link to={`/exercises/muscle/${muscle.toLowerCase()}`} key={muscle}>
              <IconButton icon={<FaDumbbell />} label={muscle} />
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MuscleSelection;
