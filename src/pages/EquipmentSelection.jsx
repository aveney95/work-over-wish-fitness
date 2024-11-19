// src/pages/EquipmentSelection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IconButton from '../components/IconButton';
import { FaDumbbell } from 'react-icons/fa';
import styles from '../styles/EquipmentSelection.css';

const EquipmentSelection = () => {
  const equipmentList = ['Dumbbells', 'Barbell', 'Kettlebell', 'Bodyweight', 'Resistance Bands', 'Machine'];

  return (
    <div className={styles.equipmentSelection}>
      <Header />

      <main className={styles.equipmentContent}>
        <h2>Select Equipment Type</h2>
        <div className={styles.equipmentOptions}>
          {equipmentList.map((equipment) => (
            <Link to={`/exercises/equipment/${equipment.toLowerCase()}`} key={equipment}>
              <IconButton icon={<FaDumbbell />} label={equipment} />
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EquipmentSelection;
