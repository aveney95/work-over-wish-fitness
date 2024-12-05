import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Footer from '../components/Footer';
import ExerciseItem from '../components/ExerciseItem'; 
import { fetchAllExercises } from '../services/exerciseDB';

import "../styles/AllExercises.css"

const AllExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await fetchAllExercises();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };
    fetchExercises();
  }, []);

  return (
    <div className="page-container">
      <Header />
      <Navigation />
      <Hero
        imgSrc="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBneW0lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        title="All Exercises"
        subtitle=""
      />
      <div className="all-exercises">
        {/* <h2>All Exercises</h2> */}
        <main>
          {loading ? (
            <p>Loading exercises...</p>
          ) : exercises.length > 0 ? (
            exercises.map((exercise) => (
              <ExerciseItem key={exercise.id} exercise={exercise} />
            ))
          ) : (
            <p>No exercises found.</p>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
  


};

export default AllExercises;
