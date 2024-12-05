import PropTypes from 'prop-types';
import '../styles/EquipmentExerciseItem.css'; // Include custom styles

const EquipmentExerciseItem = ({ exercise }) => {
  return (
    <div className="equipment-exercise-item">
      <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
      <div className="exercise-details">
        <h3 className="exercise-name">{exercise.name}</h3>
        <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
        <p><strong>Target:</strong> {exercise.target}</p>
        <p><strong>Equipment:</strong> {exercise.equipment}</p>
      </div>
    </div>
  );
};

EquipmentExerciseItem.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
  }).isRequired,
};

export default EquipmentExerciseItem;
