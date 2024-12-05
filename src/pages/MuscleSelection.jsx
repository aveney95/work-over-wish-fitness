import { useState} from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MuscleExerciseItem from '../components/MuscleExerciseItem'; // Import new component
import '../styles/MuscleSelection.css';
import Hero from "../components/Hero"

const MuscleSelection = () => {
  const muscleGroups = ['Biceps', 'Triceps', 'Quads', 'Hamstrings', 'Glutes', 'Abs'];
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchExercisesByMuscle = async (muscle) => {
    setLoading(true);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9b8aa98e2cmshb5a7a61683383d5p101c81jsn75fa295d4a66', // Replace with your API key
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/target/${muscle.toLowerCase()}`,
        options
      );
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
    fetchExercisesByMuscle(muscle);
  };

  return (
    <div className="muscle-selection">
      <Header />
      <Navigation />
      <Hero
            imgSrc="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBneW0lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
            title="Choose Your Target"
            subtitle=""
        />
      <main className="muscle-content">
       
        <div className="muscle-options">
          {muscleGroups.map((muscle) => (
            <button
              key={muscle}
              className={`muscle-button ${selectedMuscle === muscle ? 'active' : ''}`}
              onClick={() => handleMuscleClick(muscle)}
            >
              {muscle}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Loading exercises for {selectedMuscle}...</p>
        ) : (
          <div className="exercise-grid">
            {exercises.map((exercise) => (
              <MuscleExerciseItem key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MuscleSelection;
