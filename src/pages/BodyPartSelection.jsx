// src/pages/BodyPartSelection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IconButton from '../components/IconButton';
import { FaDumbbell } from 'react-icons/fa';
import styles from '../styles/BodyPartSelection.css';

const BodyPartSelection = () => {
  const bodyParts = ['Arms', 'Legs', 'Back', 'Chest', 'Core', 'Shoulders'];

  return (
    <div className={styles.bodyPartSelection}>
      <Header />
      
      <main className={styles.bodyPartContent}>
        <h2>Select a Body Part</h2>
        <div className={styles.bodyPartOptions}>
          {bodyParts.map((part) => (
            <Link to={`/exercises/${part.toLowerCase()}`} key={part}>
              <IconButton icon={<FaDumbbell />} label={part} />
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BodyPartSelection;
