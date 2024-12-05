import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';
import BodyPartExerciseItem from '../components/BodyPartExerciseItem'; // Import the new component
import { fetchExercisesByBodyPart } from '../services/exerciseDB';
import { FaDumbbell, FaHandRock, FaWalking, FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Example icons for body parts
import '../styles/BodyPartSelection.css'; // Custom styles for the icons
import Hero from "../components/Hero"

const BodyPartSelection = () => {
  const [bodyPart, setBodyPart] = useState('chest');
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExercises = async () => {
      setLoading(true); // Set loading to true while fetching
      try {
        const data = await fetchExercisesByBodyPart(bodyPart);
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    getExercises();
  }, [bodyPart]);

  const bodyParts = [
    { name: 'chest', icon: <FaDumbbell /> },
    { name: 'back', icon: <FaArrowUp /> },
    { name: 'upper arms', icon: <FaHandRock /> },
    { name: 'upper legs', icon: <FaWalking /> },
    { name: 'shoulders', icon: <FaArrowDown /> },
  ];

  return (
    <div>
      <Header />
      <Navigation />
      <Hero
            imgSrc="https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBneW0lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
            title="What Are We Hitting?"
            subtitle=""
        />
      <main>
        
        <div className="body-part-icons">
          {bodyParts.map((part) => (
            <button
              key={part.name}
              className={`body-part-icon ${bodyPart === part.name ? 'active' : ''}`}
              onClick={() => setBodyPart(part.name)}
            >
              {part.icon}
              <span>{part.name}</span>
            </button>
          ))}
        </div>
        <div>
          {loading ? (
            <p>Loading exercises...</p>
          ) : exercises.length > 0 ? (
            exercises.map((exercise) => (
              <BodyPartExerciseItem key={exercise.id} exercise={exercise} />
            ))
          ) : (
            <p>No exercises found for this body part.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BodyPartSelection;
