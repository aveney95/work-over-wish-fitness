import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EquipmentExerciseItem from '../components/EquipmentExerciseItem'; // Import the new component
import '../styles/EquipmentSelection.css';
import { useState, useEffect } from 'react';
import Hero from "../components/Hero"

const EquipmentSelection = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exerciseLoading, setExerciseLoading] = useState(false);

  const fetchEquipment = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9b8aa98e2cmshb5a7a61683383d5p101c81jsn75fa295d4a66',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
        options
      );
      const data = await response.json();
      setEquipmentList(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  const fetchExercisesByEquipment = async (equipment) => {
    setExerciseLoading(true);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9b8aa98e2cmshb5a7a61683383d5p101c81jsn75fa295d4a66',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
        options
      );
      const data = await response.json();
      setExercises(data);
      setExerciseLoading(false);
    } catch (error) {
      console.error('Error fetching exercises for equipment:', error);
      setExerciseLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  const handleEquipmentClick = (equipment) => {
    setSelectedEquipment(equipment);
    fetchExercisesByEquipment(equipment);
  };

  if (loading) {
    return <p>Loading equipment...</p>;
  }

  return (
    <div>
      <Header />
      <Navigation />
      <Hero
            imgSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGd5bSUyMGVxdWlwbWVudCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            title="Select Your Equipment"
            subtitle=""
        />
    
      <ul className="equipment-list">
        {equipmentList.slice(0,12).map((equipment) => (
          <li
            key={equipment}
            onClick={() => handleEquipmentClick(equipment)}
            className={`equipment-item ${
              selectedEquipment === equipment ? 'active' : ''
            }`}
          >
            {equipment}
          </li>
        ))}
      </ul>
      

      {exerciseLoading ? (
        <p>Loading exercises for {selectedEquipment}...</p>
      ) : (
        <div>
          {/* <h2>Exercises for {selectedEquipment}</h2> */}
          <div className="exercise-grid">
            {exercises.map((exercise) => (
              <EquipmentExerciseItem key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default EquipmentSelection;
