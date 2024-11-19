// src/pages/AllExercises.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExerciseCard from '../components/ExerciseCard';
import { getAllExercises } from '../services/exerciseDB';
import styles from '../styles/AllExercises.css';

const AllExercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getAllExercises();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className={styles.allExercises}>
      <Header />

      <main className={styles.exerciseContent}>
        <h2>All Exercises</h2>
        <div className={styles.exerciseList}>
          {exercises.length > 0 ? (
            exercises.map((exercise) => (
              <ExerciseCard 
                key={exercise.id} 
                name={exercise.name} 
                imageUrl={exercise.imageUrl} 
                description={exercise.description} 
              />
            ))
          ) : (
            <p>Loading exercises...</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllExercises;
